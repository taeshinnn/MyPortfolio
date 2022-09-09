import './Section3.css';
import React from "react";

function Section3() {
    return (
        <div className='gridContainer'>
            <div className='project'>
                <h4>My Project Experience</h4>
                <div className='projectGrid'>
                    <div className='project1' href='www.google.com'>
                        <img src={require('../../Photos/project1.png')} alt='openCV' className='project1pic'></img>
                        <h6><a href="https://github.com/AiFaceDetection">eKYC AI Face Recognition</a></h6>
                    </div>

                    <div className='project2'>
                    <img src={require('../../Photos/project2.png')} alt='CovidVisualization' className='project2pic'></img>
                        <h6><a href="https://github.com/CovidVisualization/CovidProject">COVID-19 Web Report</a></h6>
                    </div>

                    <div className='project3'>
                    <img src={require('../../Photos/project3.jpg')} alt='CovidVisualization' className='project2pic'></img>
                        <h6><a href="https://github.com/SF342-React-Native-Project/React_App">MOC Application</a></h6>
                    </div>
                </div>
            </div>

            <div className='skill'>
                <h4>Skills</h4>
            </div>
        </div>
    )

}

export default Section3;