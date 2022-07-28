import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Professions from "../components/Professions"
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { mapStateToProps } from '../components/store/Reducers';


class ProfessionsPage extends Component {
  render() {
    return (
        <React.Fragment>

            <NavBar signIn = {false} />
            <p style= {{width:"100%", textAlign:"center", fontWeight:"500",margin:"0px",paddingTop:"10px",paddingBottom:"10px", fontSize:"2rem",color:this.props.contrastColor,backgroundColor:this.props.backgroundColor}}>PROFESSIONS</p>
            <Professions />
            <Footer />
        
        </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(ProfessionsPage);