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
    <Box style = {style} sx={{ border:"none", marginTop:"20px",width:'100%',boxSizing:"border-box" }}>
      <Grid  container justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        <Grid  item xs="auto">
          <Item >
          <GridCard />
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard />
          </Item>
        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard />
          </Item>

        </Grid>
        <Grid item xs="auto">
        <Item>
          <GridCard />
          </Item>

        </Grid>
        
      </Grid>
    </Box>
  );
}
