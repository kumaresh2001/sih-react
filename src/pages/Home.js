import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';
import ComplexGrid from '../components/Cards';
import Footer from '../components/Footer';

export class Home extends Component {
  render() {
    return (
        <React.Fragment>

            <NavBar signIn={false} />
            <Carousel />
            <ComplexGrid />
            <Footer />
            
        </React.Fragment>
    )
  }
}

export default Home