import './Section3.css';
import React from "react";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Section3() {
    return (
        <div className='section3body'>

            <h1 className='projectExp'>Project Experience</h1>
            <div className='breakLine2'></div>

            <div className='projects'>
                <div className='project1'>
                    <h2><FiberManualRecordIcon fontSize='small' /> eKYC AI Face Recognition</h2>
                    <div className='projectContent'>
                        <h4>
                            /Software Designer, Back-End Programmer <br />
                            Part of Machine Learning Subject <br />
                            Aug 2021 - Dec 2021
                        </h4>
                        <p>
                            Project's objective is to authenticate student identity with
                            student's card. As a back-end programmer, I had accomplished
                            system design and algorithm to operate together as a
                            working system. (Flask Back-end, OpenCV and KNN algorithm)
                        </p>
                        <a href="https://github.com/AiFaceDetection" className='gitLink'>Github</a>
                    </div>
                </div>

                <div className='project2'>
                    <h2><FiberManualRecordIcon fontSize='small' /> COVID-19 Web Report</h2>
                    <div className='projectContent'>
                        <h4>
                            /Software Designer, Back/Front-End Programmer <br />
                            Part of Software Construction Subject <br />
                            Jul 2021 - Nov 2021
                        </h4>
                        <p>
                            Project's objective is to make web application to display and
                            inform user about COVID-19 situation with untroublesome
                            ways. I had accomplished design mockup prototype,
                            working with resting api and manage data to chart library.
                        </p>
                        <a href="https://github.com/CovidVisualization/CovidProject" className='gitLink'>Github</a>
                    </div>
                </div>

                <div className='project3'>
                    <h2><FiberManualRecordIcon fontSize='small' /> MOC Application</h2>
                    <div className='projectContent'>
                        <h4>
                            /Back/Front-End Programmer <br />
                            Part of Software Construction Subject <br />
                            Jul 2020 - Nov 2020
                        </h4>
                        <p>
                            Worked on 2-3 mobile application projects on React Native
                            framework to have basic understanding of framework,
                            MVC models and components
                        </p>
                        <a href="https://github.com/SF342-React-Native-Project/React_App" className='gitLink'>Github</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Section3;

{/* <div className='gridContainer'>
    <div className='project'>
        <h4>Project Experience</h4>
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
</div> */}