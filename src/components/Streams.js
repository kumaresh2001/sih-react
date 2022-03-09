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


export default function Streams() {
   

  return (
      <React.Fragment>
         <Box style = {style} sx={{ border:"none", marginTop:"20px",width:'100%',boxSizing:"border-box" }}>
      <Grid  container justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        <Grid  item xs="auto">
          <Item >
          <GridCard show={true} name="Bio-Maths" image={require("../assets/bio-maths.jpg")} description="Biology is the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field. For instance, all organisms are made up of cells that process hereditary information encoded in genes, which can be transmitted to future generations.  "/>
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard show={true} name="Computer Science" image={require("../assets/cs.jpg")} description="Computer science is the study of computation, automation, and information. Computer science spans theoretical disciplines to practical disciplines. Computer science is generally considered an area of academic research and distinct from computer programming. Computer science is generally considered an area of academic research."/>
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard show={true}  name="Arts & Humanities" image={require("../assets/arts-humanities.jpg")} description="Arts and humanities are considered as two of the oldest fields of knowledge available to man. The difference between the two is often seen with ambiguity. While art is seen as a more all-inclusive field, humanities, on the other hand, takes into consideration a diverse and oftentimes unrelated set of disciplines from literature to political history. "/>
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard show={true} name="Commerce with Computer Science" image={require("../assets/commCS.jpg")} description="Commerce is the conduct of trade among economic agents. Generally, commerce refers to the exchange of goods, services, or something of value, between businesses or entities. E-commerce is a variant of commerce in which goods are sold electronically via the Internet." />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard show={true} name="Commerce with Business Maths" image={require("../assets/commBM.jpg")} description="Business mathematics are mathematics used by commercial enterprises to record and manage business operations. Commercial organizations use mathematics in accounting, inventory management, marketing, sales forecasting, and financial analysis."/>
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard show={true} name="Engineering Graphics" image={require("../assets/eg.jpg")} description="An engineering drawing is a type of technical drawing that is used to convey information about an object. A common use is to specify the geometry necessary for the construction of a component and is called a detail drawing. Usually, a number of drawings are necessary to completely specify even a simple component. "/>
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard show={true} name="Pure Science" image={require("../assets/pureScience.jpg")} description="Pure Science is a science that derives theories and predictions. Pure Science can also known as natural Science, basic science or fundamental science. Pure sciences deals with the study of natural phenomena through observation, experimentation and use of scientific methods." />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard show={true} name="Diploma" image={require("../assets/diploma.jpg")} description="A diploma is a certification, deed, or document awarded by an educational institution testifying the recipient has graduated by successfully completing their courses of studies. Historically, it has also referred to a charter or official document of diplomacy." />
          </Item>

        </Grid>
        
      </Grid>
    </Box>
      </React.Fragment>
   
  );
}
