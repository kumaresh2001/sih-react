import { Component } from "react";
import Button from '@mui/material/Button';
import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import { Checkbox } from "@mui/material";
import GridCard from "./GridCard";
import { Paper } from "@mui/material";

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

export class SuitableProfessions extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <React.Fragment>
          <Box>
          <Grid>
                       
                       {
                           this.props.professions.map((item,index)=>{
                            <Grid item xs="auto">
                            <Item>
                              <GridCard  name="Massachusetts Institute of Technology" image={require("../assets/MIT.png")} description="The Massachusetts Institute of Technology is a private land-grant research university in Cambridge, Massachusetts. MIT has since played a key role in the development of modern technology and science, ranking it among the top academic institutions in the world." specialisation="Science" />
                              </Item>
                            </Grid>
                           })
                       }
                    </Grid>

          </Box>
         
        
      </React.Fragment>
    )
  }
}

export default SuitableProfessions