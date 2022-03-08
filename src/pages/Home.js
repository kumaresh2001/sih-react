import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';
import ComplexGrid from '../components/Cards';

export class Home extends Component {
  render() {
    return (
        <React.Fragment>

            <NavBar />
            <Carousel />
            <ComplexGrid />

        </React.Fragment>
    )
  }
}

export default Home