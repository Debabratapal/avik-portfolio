import React from 'react';
import './SectionHeader.css';

const SectionHeader = (props) => (
  <header className="port_header">
    <h1>{props.header}</h1>
    <div>
      <p>{props.description}</p>
    </div>
  </header>
)

export default SectionHeader;