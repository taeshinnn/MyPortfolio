import './Navbar.css';
import React from "react";

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import GradeIcon from '@mui/icons-material/Grade';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Navbar() {

  const actions = [
    { icon: <a href='#footer'><ContactMailIcon/></a>, name: 'Contact' },
    { icon: <a href='#section3'><WorkIcon/></a>, name: 'Project Experiences' },
    { icon: <a href='#section2'><GradeIcon/></a>, name: 'About Me & Education' },
    { icon: <a href='#section1'><HomeIcon/></a>, name: 'Welcome' },
  ];

  return (
    <div>
      <ul className='navbar'>
        <li><a href='#section1'><h4>Welcome</h4></a></li>
        <li><a href='#section2'><h4>About Me & Education</h4></a></li>
        <li><a href='#section3'><h4>Project Experiences</h4></a></li>
        <li><a href='#footer'><h4>Contact</h4></a></li>
      </ul>

      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} className='mobile'>
        <SpeedDial
          ariaLabel="NavDial"
          sx={{ position: 'absolute', bottom: 16, right: 16}}
          icon={<SpeedDialIcon />}

        >
          {actions.map((action) => (
            <SpeedDialAction 
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
          
        </SpeedDial>
      </Box>
    </div>
  );
}

export default Navbar;
