import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';


export class About extends Component {
  render() {
    return (
        <React.Fragment>

            <NavBar />
            <ContactUs />
            <Footer style={{position:"fixed",bottom:"0px"}} />
        
        </React.Fragment>
    )
  }
}

export default About