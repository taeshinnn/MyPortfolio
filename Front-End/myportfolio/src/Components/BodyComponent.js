import './BodyComponent.css';
import React from "react";

import Section1 from './Sections/Section1';

function BodyComponent() {
    return (
      <div className='container'>
        {/* BodyComponent */}
        <section className='section1'>
          <Section1/>
        </section >
        <section className='section2'>
          section2
        </section>
        <section className='section3'>
          section3
        </section>
      </div>
    );
  }
  
  export default BodyComponent;
  