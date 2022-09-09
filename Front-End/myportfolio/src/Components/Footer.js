import './Footer.css';
import React from "react";

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
    return (
        <div className='footerBody'>
            <div className='socialMedia'>
                <InstagramIcon style={{ color: '#fff' }} fontSize='large' className='icon'/>
                <GitHubIcon style={{ color: '#fff' }} fontSize='large' className='icon'/>
                <LinkedInIcon style={{ color: '#fff' }} fontSize='large' className='icon'/>
            </div>
        </div>
    )
}

export default Footer;