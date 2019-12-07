import React, {useState} from 'react';
import { Header } from '../Admin/Dashboard/AdminDashboard/Header/Header';
import Sidebar from '../Admin/Dashboard/AdminDashboard/Sidebar/Sidebar';

export const DashboardLayout = props => {
  const [open, setOpen] = useState(false);
 
  return (
    <React.Fragment>
      <Sidebar open={(e) => setOpen(e)}/>
      <div style={{marginLeft: open ? '250px': '0px', transition: '0.6s'}}>
        <Header title={'Admin'} />
        {props.children}
      </div>
    </React.Fragment>
  )
}