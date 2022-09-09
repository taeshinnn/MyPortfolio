import './Section2.css';
import React from "react";

import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Section2() {
    return (
      <div className='section2body'>
        <img src={require('../../Photos/image1.jpg')} className='pic1' alt='pic of me'></img>
      
        <div className='aboutMe'>
            <h3>Software Engineer & Developer</h3>
            <h1>Taeshin Rochananond</h1>
            <p>A software engineering student who pursuing his passion
                to be an experienced software engineer. Interested in software 
                development processes such as mobile & web development, testing,
                or UX/UI design. Ready to learn and work hands-on with
                self-discipline and motivation to enhance skills and abilities.
            </p>

            <div className='downloadBtn'>
                <FileDownloadIcon/>
                <a href={require('../../Files/resume.pdf')} download>Download CV</a>
            </div>
        </div>
        
        <div className='education'>
            <h2>Education History</h2>
            <div className='breakLine'></div>
            <div className='school'>
                <div>
                    <h1>Thammasat University</h1>
                    <h4>Engineering, Software Engineering</h4>
                    <p>2019 - 2023</p>
                    <p>GPA 3.78</p>
                </div>

                <div>
                    <h1>Nawaminthrachinuthit Bodindecha School</h1>
                    <h4>Math, Science in English Program</h4>
                    <p>2013 - 2019</p>
                    <p>GPA 3.60</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Section2;
  