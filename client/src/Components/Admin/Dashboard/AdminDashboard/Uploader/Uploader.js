import React, { Component } from 'react';
import './Uploader.css';
import Dropzone from 'react-dropzone';
import axios from '../../../../../utils/axios';
// import { api } from '../../../../../utils/config';

const catagory = [
  {id:"", name:"none"},
  {id:"landscape",name:"Landscape"},
  {id:"scenery",name:"Scenery"},
  {id:"portrait",name:"Portrait"}
]

export default class UploaderComponent extends Component {
  state = {
    files: [],
    category: '',
    error: false
  }

  onDrop = (images) => {
    let { files } = this.state;
    let {limit} = this.props;
    images.forEach((image, i) => {
      if(limit)
      image.isNew = true;
      image.filename = new Date().getTime() + String(i) + '.' + (image.name.split('.').pop());
      files.push(image);
    });
    this.setState({ files });
    this.props.fileChange(files);
  }

  componentDidUpdate() {
    if(this.state.files.length !== this.props.files.length) {
      this.setState({files: this.props.files});
    }
  }

  handleChange = (e) => {
    this.setState({category:e.target.value, error: false});
  }
  
  uploadPhotos = () => {
    let {category} = this.state;
    let files = [...this.state.files];
    const _this = this;
    if(files.length || category) {
      let promise = files.map((el,i) =>{
        return new Promise((res, rej)=>{
          let fd = new FormData();
          fd.append('image', el);
          fd.append('category', category);
          axios.post('/image', 
          fd,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              onUploadProgress: function( progressEvent ) {
                files[i].uploadPercent = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) );
                _this.setState({files},() => {
                  _this.props.fileChange(files);
                })
              }
            }
          ).then(data => {
            res(data);
          })
        })
      })
      Promise.all(promise).then(data => {
        this.setState({files:[],category:'',error: false});
      })
    } 
    this.setState({error: true});
  }

  clearImages =() => {
    this.setState({files: []});
    this.props.fileChange([]);
  }
 
  render() {
    let {category, error} = this.state;
    let dyclass = ['form-control'];
    if(error) {
      dyclass.push('borred');
    }
    return ( 
      <section className="m70">
        <Dropzone onDrop={this.onDrop} className="Dropzone">
          {({ getRootProps, getInputProps }) => (
            <section className="container" >
              <div>
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
        <div className="m30">
          <div className="form-group">
            <select 
            className={dyclass.join(' ')}
            value={category}
            onChange={e => this.handleChange(e)}>
              {catagory.map(el => (
                <option value={el.id} key={el.id}>{el.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <button onClick={this.clearImages} 
            style={{marginLeft: '2rem'}}
            type="button" 
            className="pull-right btn btn-danger">Clear All</button>
          </div>
          <div className="form-group">
            <button onClick={this.uploadPhotos} 
            type="button" 
            className="pull-right btn btn-success">Submit</button>
          </div>
        </div>
      </section>
    );
  }
}
