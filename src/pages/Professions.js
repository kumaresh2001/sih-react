import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Professions from "../components/Professions"
import Footer from '../components/Footer';


export class About extends Component {
  render() {
    return (
        <React.Fragment>

            <NavBar signIn = {false} />
            <p style= {{width:"100%", textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>PROFESSIONS</p>
            <Professions />
            <Footer />
        
        </React.Fragment>
    )
  }
}

export default About