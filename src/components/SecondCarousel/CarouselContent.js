import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function CarouselContent(props) {
   

    // const style = {
    //     position: 'absolute',
    //     height: 'max-content',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
        
    //     backgroundColor:"white",
    //     border: '1px solid #000',
    //     borderRadius:"10px",
    //     paddingTop:"30px",
    //     paddingBottom:"30px",
    //     textAlign:"center",
    //     boxShadow: 24,
    //     p: 4,
    //   };


  return (
      <React.Fragment>
        <Card style={{border:"none",boxShadow:"none",paddingTop:"25px",backgroundColor:"inherit"}}  sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="image"
        
      />
      <CardContent>
        <Typography style={{textAlign:"center",textJustify: "interWord"}} variant="body2" color="text.primary">
          {props.description}
        </Typography>
      </CardContent>
      
    </Card>

      </React.Fragment>
   
  );
}
