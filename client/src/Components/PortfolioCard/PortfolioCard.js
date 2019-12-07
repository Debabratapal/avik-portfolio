import React, { Fragment } from 'react';
import './PortfolioCard.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import {Link} from 'react-router-dom';
import {api} from '../../utils/config'

export const PortfolioCard = () => (
  <Fragment>
    <div className="container portfolio">
      <SectionHeader
        header="portfolio"
        description="Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for."
      />
      <div className="row">
        {['Portrait','Landscape','B&w'].map((el, i) => (
          <div className="col" key={el}>
            <Link to={"/gallery/"+el.toLowerCase()}>
              <img src={api.baseURL+'/images/card/port'+(i+1)+'.jpg'} alt="port1.jpeg"/>
              <div className="content">
                <div className="con2">{el}</div>
              </div>
            </Link>
          </div>
        ))}  
      </div>
    </div>
  </Fragment >
)
