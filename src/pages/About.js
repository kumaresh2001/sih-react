import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import AboutContent from "../components/AboutContent";
import Footer from '../components/Footer';


export class About extends Component {
  render() {
    return (
        <React.Fragment>

            <NavBar />
            <AboutContent />
            <Footer />
        
        </React.Fragment>
    )
  }
}

export default About