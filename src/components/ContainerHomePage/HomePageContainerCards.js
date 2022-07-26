import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import GridCard from "../GridCard";
import { Typography } from '@mui/material';
import { connect } from 'react-redux/es/exports';
import { mapStateToProps } from '../store/Reducers';



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

const textStyle={
    textAlign:"center",
    color:"white",
    fontSize:"5rem",
    

}



 function HomePageContainerCards(props) {

  return (
      <React.Fragment>
        <Typography style={textStyle}>
            Get Started
        </Typography>
        
         <Box style = {style} sx={{ border:"none",width:'100%',boxSizing:"border-box",marginTop:"350px" }}>
      <Grid container s justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        
        <Grid  item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="High School Students" image={require("../../assets/cambridge.jpg")} description="Meraki offers a personality test via which students are able to identify the stream, profession and the related courses for a bright future" specialisation="Science" />
          </Item>

        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="Higher Secondary Students" image={require("../../assets/CIT.jpg")} description="Meraki offers a personality test via which students are able to identify the stream, profession and the related courses for a bright future" specialisation="Science" />
          </Item>

        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="Diploma Counselling" image={require("../../assets/imperial.jpg")} description="Meraki offers a personality test via which students are able to identify the stream, profession and the related courses for a bright future" specialisation="Science" />
          </Item>

        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="Career Counselling" image={require("../../assets/UCB.jpg")} description="Meraki offers a personality test via which students are able to identify the stream, profession and the related courses for a bright future" specialisation="Science" />
          </Item>

        </Grid>
        
      </Grid>
    </Box>
      </React.Fragment>
   
  );
}


export default connect(mapStateToProps) (HomePageContainerCards);