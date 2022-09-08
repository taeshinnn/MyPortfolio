import './BodyComponent.css';
import React from "react";

import Section1 from './Sections/Section1';


function BodyComponent() {
    return (
      <div className='container'>
        <section className='section1' id='section1'>
          <Section1/>
        </section >
        <section className='section2' id='section2'>
          section2
        </section>
        <section className='section3' id='section3'>
          section3
        </section>
      </div>
    );
  }
  
  export default BodyComponent;
  