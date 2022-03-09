import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function Variants() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: '60%',
          marginLeft: '20%',
          height: 128,
          marginTop:"30px",
          backgroundColor:"#D2D7D3"

        },
      }}
      
    >
      <Paper variant="outlined"><Typography >  Meraki is not profitable organisation which aims to provide students a clear  insight about the stream and career path they have to follow during their higher secondary , it’s also aims in eradicating fear about new emerging streams and professions that their wards have choose . Thus creating a world full of inverters and  developers .</Typography>
      </Paper>
    </Box>
  );
}
