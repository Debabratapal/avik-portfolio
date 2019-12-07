import React from 'react';
import {api} from '../../utils/config';
import './GalleryHeader.css';
import {Link} from 'react-router-dom';
 
class GalleryHeader extends React.Component {
  render() {
    return (
      <div className="galleryHeader">
        <div className="logo-img" >
          <Link to="/" >
            <img src={`${api.baseURL}/images/white.png`} alt="logo" />
          </Link>
        </div>
      </div>
    )
  }
}

export default GalleryHeader;