import React from "react";
import { Link } from "react-router-dom";
import classes from './NavBar.module.css'

const NavBar = () => {
  return ( 
  	<nav className={classes.links}>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/counter">Counter</Link>
          </li>

          <li>
            <Link to="/kids">Kids</Link>
          </li>

          <li>
            <Link to="/form">My Form</Link>
          </li>
        </ul>
    </nav>
  );
 };
 
 export default NavBar;