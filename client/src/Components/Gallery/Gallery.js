import React from 'react';
import './Gallery.css';
import axios from '../../utils/axios';
import {api} from '../../utils/config';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

class Gallery extends React.Component {
  state = {
    images: [],
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/image/${id}`).then(data => {
      this.setState({images: data.data});
    })
  }

  render() {
    const {images} = this.state;
    
    return (
      <div className="container">
        <div className="row">
        {images.length?
          images.map((el, i) => (
            <div className="col-md-4 img-gal">
              <ProgressiveImage
                preview={api.baseURL+'/images/uploads/'+el.path}
                image={api.baseURL+'/images/uploads/'+el.path}
                key={i} 
                alt={el.path} />
            </div>
          ))
          :
          <div className="no-image">
            <p>No Image Available</p>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default Gallery;