import './Footer.css';
import React from "react";

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
    return (
        <div className='footerBody'>
            <div className='socialMedia'>
                <a href="https://github.com/taeshinnn"><GitHubIcon style={{ color: '#fff' }} fontSize='large' className='icon'/></a>
                <a href="https://www.instagram.com/taeshinnn/"><InstagramIcon style={{ color: '#fff' }} fontSize='large' className='icon'/></a>
                <a href="https://www.linkedin.com/in/taeshin-rochananond/"><LinkedInIcon style={{ color: '#fff' }} fontSize='large' className='icon'/></a>
            </div>
            <h4>© Copyright. All Rights Reserved</h4>
            <h4>by</h4>
            <h4>Taeshin Rochananond</h4>
        </div>
    )
}

export default Footer;