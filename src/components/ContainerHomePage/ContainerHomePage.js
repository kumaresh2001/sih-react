import React, { Component } from 'react';
import background from '../../assets/homePage.jpg';
import HomePageContainerCards from './HomePageContainerCards';

class ContainerHomePage extends Component {
    style={
        width:"100%",
        padding:"10px",
        boxSizing:"borderBox",
        height:"auto",
        backgroundImage:`url(${background})`,
        backgroundSize:"cover",
        paddingBottom:"20px",
    }
    render() {
        return (
            <div>
                <div style={this.style}>
                    <HomePageContainerCards />
                </div>
            </div>
        );
    }
}

export default ContainerHomePage;