import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Preview } from './Preview/Preview';
import { Header } from './Header/Header';
import SliderImage from './SliderImage/SliderImage';

class AdminDashboard extends Component {
  state = {
    sideberOpen: false,
  }

  openSidebar = () => this.setState({sideberOpen: !this.state.sideberOpen})
  
  render() {
    const {sideberOpen} = this.state;
    return (
      <div>
      <Sidebar open={this.openSidebar} />
      <Header title={'Admin'}/>
     
      <div className="admin-dashboard" style={{marginLeft: sideberOpen ? '250px': '0px'}}>
        <Route exact path={'/admin/dashboard/upload'}  component={SliderImage}/>
        <Route exact path={'/admin/dashboard/preview'} component={Preview} />
      </div>
      </div>
     
    )
  }
}
