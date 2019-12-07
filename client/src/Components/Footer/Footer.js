import React from 'react';
import './Footer.css';  

import {Link} from 'react-router-dom';
const Footer = props => {
  return (
    <div className="footer">
      <div className="container">
        <div className="inner-con">
        <div className="left">
        <h3>Some essential links</h3>
        <ul>
          <li>
            <Link to={'/contact'}>
              Contacts
            </Link>
          </li>
          <li>
          <Link to={'/about'}>
              About
            </Link>
          </li>
          <li>
          <Link to={'/portfolio'}>
            Portfolio
          </Link>
          </li>
        </ul>
        </div>
        <div className="right">
        <i className="fa fa-facebook-square"/>
        <i className="fa fa-instagram"/>
        <i className="fa fa-twitter-square"/>
        <i className="fa fa-youtube"/>
        </div>
        </div>
        <h5>Ⓒ copyright by Avik Choudhury 2019</h5>
      </div>
    </div>
  )
}

export default Footer;