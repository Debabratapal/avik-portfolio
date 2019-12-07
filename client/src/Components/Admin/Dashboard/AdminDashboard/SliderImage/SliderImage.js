import React, {Component} from 'react';
import UploaderComponent from '../Uploader/Uploader';
import './SliderImage.css';
import { DashboardLayout } from '../../../../Layouts/DashboardLayout';

class SliderImage extends Component {
  state = {
    files: [],
  }

  getImagePreviewer() {
    const { files } = this.state;
    if (files && files.length) {
      
      return (
        <div>
          {files.map((image, i) => (
            <div className="image-container" key={i}>
              <span className="cross-img" onClick={() => this.remove(i)}>x</span>
              <img className="img" src={image.preview} alt={i + '.jpg'} />
              <div className="progress-bar ">
                <div className="progress" style={{width:`${image.uploadPercent|| 0}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  }

  remove = i => {
    let {files} = this.state;
    files.splice(i, 1);
    this.setState({files});
  }

  fileChange = (files) => {
    console.log(files);
    
    this.setState({files: files})
  }

  render() {
    return(
      <DashboardLayout>
        <div className='container'>
          <UploaderComponent fileChange={this.fileChange} files={this.state.files} limit={6}/>
          {this.getImagePreviewer()}
        </div>
      </DashboardLayout>
    )
  }
}

export default SliderImage;