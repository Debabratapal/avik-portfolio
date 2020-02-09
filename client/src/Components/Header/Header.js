import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import {api} from '../../utils/config';
import './Header.css';


const Navbar = props => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    {props.children}
  </nav>
)

const NavLinks = props => (
  <NavItem>
    <NavLink 
    className="nav-link port-link" 
    to={props.to} 
    activeClassName="active" exact>{props.title}
    </NavLink>
  </NavItem>
)

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar>
    <NavLink to="/" exact>
      <img src={`${api.baseURL}/images/white2.png`} alt="logo" />
    </NavLink>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavLinks to='/' title="Home" /> 
        <NavLinks to='/about' title="About" />
        <NavLinks to='/portfolio' title="Portfolio" />
        <NavLinks to='/contact' title="Contact" />
      </Nav>
    </Collapse>
  </Navbar>
  )

}


export default Header;