import React from 'react';
import './Header.css';

export const Header = props => (
  <div className="header2">
    <div className="container">
      <h1>{props.title}</h1>
    </div>
  </div>
)