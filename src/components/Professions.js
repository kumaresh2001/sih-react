import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import GridCard from "./GridCard"


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



export default function ComplexGrid() {
   

  return (
      <React.Fragment>
         <Box style = {style} sx={{ border:"none", marginTop:"20px",width:'100%',boxSizing:"border-box" }}>
      <Grid  container justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        <Grid  item xs="auto">
          <Item >
          <GridCard name="Doctor" image={require("../assets/doctor.jpg")} description="The job of a doctor is to diagnose and treat illness and injury. Doctors examine patients and arrive upon diagnosis, perform surgeries, prescribe medications, educate patients and their family members, check patients' records, and keep an eye on their recovery."/>
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard  name="Engineer" image={require("../assets/engineer.jpg")} description="Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures, gadgets and materials to fulfill functional objectives and requirements while considering the limitations imposed by practicality, regulation, safety and cost."/>
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard   name="Lawyer" image={require("../assets/lawyer.jpg")} description="A lawyer is a person who is qualified to advise people about the law and represent them in court. Prosecution and defense lawyers are expected to deliver closing arguments next week. Synonyms: legal adviser, attorney, solicitor, counsel More Synonyms of lawyer. "/>
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard  name="Designer" image={require("../assets/designer.jpg")} description="A designer is a person who plans the form or structure of something before it is made, by preparing drawings or plans. In practice, anyone who creates tangible or intangible objects, products, processes, laws, games, graphics, services, or experiences can be referred to as a designer." />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard  name="Scientist" image={require("../assets/scientist.jpg")} description="A scientist is a person who conducts scientific research to advance knowledge in an area of interest. In classical antiquity, there was no real ancient analog of a modern scientist. Instead, philosophers engaged in the philosophical study of nature called natural philosophy, a precursor of natural science."/>
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard  name="Entrepreneur" image={require("../assets/entrepreneur.jpg")} description="An entrepreneur is an individual who creates a new business, bearing most of the risks and enjoying most of the rewards. The process of setting up a business is known as entrepreneurship. In this sense, entrepreneurship describes activities on the part of both established firms and new businesses." />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard  name="Psychatrist" image={require("../assets/psychatrist.jpg")} description="A psychiatrist is a physician who specializes in psychiatry, the branch of medicine devoted to the diagnosis, prevention, study, and treatment of mental disorders. Psychiatrists have broad training in a bio-psycho-social approach to assessment and management of mental illness."/>
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard  name="Literature" image={require("../assets/literature.jpg")} description="Literature broadly is any collection of written work, but it is also used more narrowly for writings specifically considered to be an art form, especially prose fiction, drama, and poetry. In recent times, the definition has expanded to include oral literature, much of which has been transcribed." />
          </Item>

        </Grid>
        
      </Grid>
    </Box>
      </React.Fragment>
   
  );
}
