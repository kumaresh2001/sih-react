import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import GridCard from "./GridCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { mapStateToProps } from './store/Reducers';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:"none"
}));
const style={
    marginBottom:"0px",
    paddingBottom:"30px",

}



function ComplexGrid(props) {
   
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
      <React.Fragment>
         <Box  style = {{...style,backgroundColor:props.backgroundColor}} sx={{ border:"none", marginTop:"20px",width:'100%',boxSizing:"border-box" }}>
      <Grid container justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        <Grid  style={{}}  item xs="auto">
          <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="Stanford University" image={require("../assets/stanford.jpg")} description="Stanford University, officially Leland Stanford Junior University, is a private research university located in the census-designated place of Stanford, California, near the city of Palo Alto. The campus occupies 8,180 acres, among the largest in the United States, and enrolls over 17,000 students." specialisation="Science"/>
          </Item>
        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="Massachusetts Institute of Technology" image={require("../assets/MIT.png")} description="The Massachusetts Institute of Technology is a private land-grant research university in Cambridge, Massachusetts. MIT has since played a key role in the development of modern technology and science, ranking it among the top academic institutions in the world." specialisation="Science" />
          </Item>
        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard   name="University of Oxford" image={require("../assets/oxford.jpg")} description="The University of Oxford is a collegiate research university in Oxford, England. It grew rapidly from 1167 when Henry II banned English students from attending the University of Paris.Oxford operates the world's oldest university museum, as well as the largest university press in the world and the largest academic library system nationwide." specialisation="Science"/>
          </Item>

        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="Harvard University" image={require("../assets/harvard.jpg")} description="Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, the Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States and among the most prestigious in the world." specialisation="Science" />
          </Item>

        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="University of Cambridge" image={require("../assets/cambridge.jpg")} description="The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209 and granted a royal charter by Henry III in 1231, Cambridge is the second-oldest university in the English-speaking world and the world's fourth-oldest surviving university." specialisation="Science" />
          </Item>

        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="California Institute of Technology" image={require("../assets/CIT.jpg")} description="This isThe California Institute of Technology is a private research university in Pasadena, California, United States of America. The university is known for its strength in science and engineering. Caltech is ranked among the best academic institutions in the world." specialisation="Science" />
          </Item>

        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="Imperial College London" image={require("../assets/imperial.jpg")} description="Imperial College London is a public research university in London. Imperial grew out of Prince Albert's vision for an area of culture, including the Royal Albert Hall, Victoria & Albert Museum, Natural History Museum, and several Royal Colleges." specialisation="Science" />
          </Item>

        </Grid>
        <Grid   item xs="auto">
        <Item style={{height:"100%",backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}>
          <GridCard  name="University of California" image={require("../assets/UCB.jpg")} description="The University of California, Berkeley is a public land-grant research university in Berkeley, California. Established in 1868 as the University of California, it is the state's first land-grant university and the first campus of the University of California system." specialisation="Science" />
          </Item>

        </Grid>
        
      </Grid>
    </Box>
      </React.Fragment>
   
  );
}


export default connect(mapStateToProps) (ComplexGrid);