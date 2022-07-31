import * as React from 'react';
import "../styles/aboutus.css";
import pic from "../assets/aboutBG1.jpg";
import pic1 from "../assets/aboutImg.jpg";

export default function AboutUs() {
  return (
    <>
        <div class="hero-image">
            <img src={pic}></img>
        </div>
        <div class="about-section">
          <p className='pMain'>Team Meraki exists to help people overcome their fears and uncertainties about their future by providing them with the Meraki Solution</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="column1">
            <h1>OUR VISION</h1>
            <p className='pSub'>Our vision is to ensure that every individual has the joy of discovering themselves and the career that they are most likely to enjoy and excel at.</p>
            <p className='pSub'> Meraki vows to support you throughout your career exploration journey, from the moment you sign up until you find a career you love. Does this sound like a cause you'd be passionate about pursuing? Discover where you'll fit in!</p>
          </div>
          <div class="column2">
            <img src={pic1} className = "aboutImage"/>
          </div>
        </div>   
    </>
  );
}
