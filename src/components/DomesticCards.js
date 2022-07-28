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



export default function DomesticCards() {
   

  return (
      <React.Fragment>
         <Box style = {style} sx={{ border:"none", marginTop:"20px",width:'100%',boxSizing:"border-box" }}>
      <Grid  container justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        <Grid  item xs="auto">
          <Item style={{height:"100%"}} >
          <GridCard name="Sri Venkateswara College of Engineering" image={require("../assets/svce.jpg")} description="Sri Venkateswara College of Engineering is an engineering institute in Tamil Nadu, at Pennalur, Sriperumbudur near Chennai. SVCE was found in the year 1985. The college was established by the Southern Petrochemical Industries Corporation group." specialisation="Science"/>
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item style={{height:"100%"}}>
          <GridCard  name="Indian Institute of Science" image={require("../assets/IITBanglore.jpg")} description="The Indian Institute of Science is a public, deemed, research university for higher education and research in science, engineering, design, and management. It is located in Bengaluru, in the Indian state of Karnataka. It is ranked among the most prestigious academic institutions in India." specialisation="Science" />
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item style={{height:"100%"}}>
          <GridCard   name="University of Delhi" image={require("../assets/delhi.jpg")} description="The University of Delhi, informally known as Delhi University, is a collegiate public central university located in New Delhi, India. It was founded in 1922 by an Act of the Central Legislative Assembly and is recognized as an Institute of Eminence by the University Grants Commission." specialisation="Science"/>
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item style={{height:"100%"}}>
          <GridCard  name="Jawaharlal Nehru University" image={require("../assets/JNU.jpg")} description="Jawaharlal Nehru University is a public central major research university located in New Delhi, India. It was established in 1969 and named after Jawaharlal Nehru, India's first Prime Minister. The university is known for leading faculties and research emphasis on liberal arts and applied sciences." specialisation="Science" />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item style={{height:"100%"}}>
          <GridCard  name="Indian Institute of Technology Bombay" image={require("../assets/IITBombay.jpg")} description="Indian Institute of Technology Bombay is a prestigious public technical and research university located in Powai, Mumbai, Maharashtra, India. IIT Bombay was founded in 1958. In 1961, the Parliament decreed IITs as Institutes of National Importance. " specialisation="Science" />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item style={{height:"100%"}}>
          <GridCard  name="Jamia Millia Islamia University" image={require("../assets/JMI.jpg")} description="Jamia Millia Islamia is a central university located in New Delhi, India. Originally established at Aligarh, United Provinces during the British Raj in 1920, it moved to its current location in Okhla in 1935. It was given the deemed status by University Grants Commission in 1962." specialisation="Science" />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item style={{height:"100%"}}>
          <GridCard  name="Vellore Institute of Technology" image={require("../assets/VIT.jpg")} description="Vellore Institute of Technology is a private deemed university located in Vellore, India. Founded in 1984 as Vellore Engineering College by G. Viswanathan, the institution offers 64 Undergraduate, 35 Postgraduate, 16 Integrated, 2 Research and 2 M.Tech Industrial Programmes." specialisation="Science" />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item style={{height:"100%"}}>
          <GridCard  name="Indian Institute of Technology Madras" image={require("../assets/IITMadras.jpg")} description="Indian Institute of Technology Madras is a public technical university located in Chennai (formerly named as Madras), Tamil Nadu, India. As one of the Indian Institutes of Technology, it is recognized as an Institute of National Importance, and has been consistently rated as one of India's most prestigious universities." specialisation="Science" />
          </Item>

        </Grid>
        
      </Grid>
    </Box>
      </React.Fragment>
   
  );
}
