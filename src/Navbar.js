import React from 'react';
import './Navbar.css'; 
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2 className="logo">Seb's</h2>
      <ul>
        <CustomLink to='/' className="nav-link">Home</CustomLink>
        <CustomLink to='/booking' className="nav-link">Booking</CustomLink>
        <CustomLink to='/menu' className="nav-link">Menu</CustomLink>
        <CustomLink to='/about' className="nav-link">About us</CustomLink>
        
      </ul>
    </nav>
  )
}

function CustomLink({to,children, ...props}) {
    const resolvedPath =useResolvedPath(to);
    const isActive =  useMatch({path: resolvedPath.pathname, end: true})
    return(
    <li><Link to={to} {...props} aria-current={isActive ? "page": ""}>{children}</Link></li>
    );

}
export default Navbar;

