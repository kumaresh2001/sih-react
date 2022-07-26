import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';
import ComplexGrid from '../components/Cards';
import Footer from '../components/Footer';
import ContainerHomePage from '../components/ContainerHomePage/ContainerHomePage';
import SecondCarousel from '../components/SecondCarousel/SecondCarousel';
import Canvas from '../components/canvas/Canvas';
import { Typography } from '@mui/material';
import { connect } from 'react-redux/es/exports';
import { mapStateToProps } from '../components/store/Reducers';


export class Home extends Component {
  render() {
    return (
        <React.Fragment>

            <NavBar signIn={false} />

            <Canvas />
            
            <hr style={{border:"1px solid white",width:"100%",height:"1px",margin:"0px",padding:"0px"}} />
            
            <ContainerHomePage />

            <hr style={{border:"1px solid white",width:"100%",height:"1px",margin:"0px",padding:"0px"}} />

            <Carousel />

            <hr style={{border:"1px solid white",width:"100%",height:"1px",margin:"0px",padding:"0px"}} />

            <SecondCarousel />

            <hr style={{border:"1px solid white",width:"100%",height:"1px",margin:"0px",padding:"0px"}} />

            <Typography color="text.primary" style={{textAlign:"center",backgroundColor:this.props.backgroundColor,fontSize:"3rem",margin:"0px",paddingBottom:"20px",paddingTop:"20px"}}>
              Guidance for getting admission in top universities
            </Typography>

            <ComplexGrid />
            
            <hr style={{border:"1px solid white",width:"100%",height:"1px",margin:"0px",padding:"0px"}} />

            

            <Footer />
            
            
        </React.Fragment>
    )
  }
}

export default connect(mapStateToProps) (Home);