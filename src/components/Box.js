import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function Variants() {
  return (
    <Box
      sx={{
        
          m: 1,
          width: '100%',
          height:"90vh",
          backgroundColor:"#D2D7D3"
        
      }}
      
    >
      
      <Paper variant="outlined">
        <Typography >
          <div style={{fontSize:"3rem",fontWeight:"bold",textAlign:"center"}}>ABOUT US</div> 
          <img src={require("../assets/aboutus.png")} style={{width:"50%",marginLeft:"25%"}} />
          <p style={{alignText:"justify",width:"80%",textJustify:"inter-word",marginLeft:"10%",fontWeight:"bold",fontSize:"2rem"}}>
            "Meraki is not profitable organisation which aims to provide students a clear  insight about the stream and career path they have to follow during their higher secondary , it’s also aims in eradicating fear about new emerging streams and professions that their wards have choose . Thus creating a world full of inverters and  developers."
          </p> 

          </Typography>
      </Paper>
      
     
      
    </Box>
  );
}
