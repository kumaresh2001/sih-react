import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function AboutContent() {
  return (
    <Box>
      
      <Paper variant="outlined">
        <Typography >
          <div style={{Height:"100%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
            
          <div style={{fontSize:"2.5rem",fontWeight:"bold",textAlign:"center",position:"absolute",zIndex:"10",marginTop:"10%",color:"#fff"}}>ABOUT US</div> 
          <img src={require("../assets/aboutimg.jpeg")} style={{width:"100%",position:"relative", zIndex:"2",height:"60%"}} />
          <p style={{alignText:"justify",width:"50%",marginTop:"32%",fontWeight:"100",fontSize:"1.3rem",zIndex:"10",fontFamily:"Merriweather",textAlign:"justify",position:"absolute" }}>
            Meraki is a non profitable organization which aims to provide students a clear  insight about the stream and career path they have to follow during their higher secondary , we also aim in eliminating  fear among parents about new emerging streams and professions that their wards have chosen . Thus creating a world full professional individuals who enjoy what they do.
          </p> 
          </div>
          </Typography>
      </Paper>
      
     
      
    </Box>
  );
}
