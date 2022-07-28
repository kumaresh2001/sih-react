import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Box, Typography } from '@mui/material';
import {Results1, Results2} from '../assets/Results2';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import GridCard from "./GridCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:"none"
  }));
  const style={
      marginBottom:"20px"
  }
  

export class Entrepreneur extends Component {
  render() {
    return (
        <React.Fragment>
        <NavBar/>
        <Box>
          <Typography style={{fontSize:"2rem",textAlign:"center"}}>
              Entrepreneur
          </Typography>
          <Paper>
             
          </Paper>
          <Box style = {style} sx={{ border:"none", marginTop:"20px",width:'100%',boxSizing:"border-box" }}>
              <Grid container justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
              {
                  Results2.entrepreneur.map(item=>{
                      return(
                          <React.Fragment>
                              <Grid  item xs="auto">
                                      <Item >
                                      <GridCard name={item.name} image={item.img} requirements={item.requirements}/>
                                      </Item>
                              </Grid>
                          </React.Fragment>
                      )
                  })
              }
              </Grid>
             
          </Box>
        </Box>
        <Footer /> 
    </React.Fragment>
    )
  }
}

export default Entrepreneur