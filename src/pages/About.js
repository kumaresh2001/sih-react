import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
import Footer from '../components/Footer';


export class About extends Component {
  render() {
    return (
        <React.Fragment>

            <NavBar />
            <AboutUs />
            <Footer />
        
        </React.Fragment>
    )
  }
}

export default About