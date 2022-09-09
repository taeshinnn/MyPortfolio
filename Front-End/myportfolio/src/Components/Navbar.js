import './Navbar.css';
import React from "react";

function Navbar() {

    return (
      <div>
        <ul className='navbar'>
            <li><a href='#section1'><h4>Welcome</h4></a></li>
            <li><a href='#section2'><h4>About Me & Education</h4></a></li>
            <li><a href='#section3'><h4>Skills & Project Experiences</h4></a></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  