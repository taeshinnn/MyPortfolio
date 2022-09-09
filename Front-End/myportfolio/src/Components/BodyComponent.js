import './BodyComponent.css';
import React from "react";

import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';


function BodyComponent() {
    return (
      <div className='container'>
        <section className='section1' id='section1'>
          <Section1/>
        </section >
        <section className='section2' id='section2'>
          <Section2/>
        </section>
        <section className='section3' id='section3'>
          <Section3/>
        </section>
      </div>
    );
  }
  
  export default BodyComponent;
  