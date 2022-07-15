import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';


export default function GridCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        height: 'max-content',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
        backgroundColor:"white",
        border: '1px solid #000',
        borderRadius:"10px",
        paddingTop:"30px",
        paddingBottom:"30px",
        textAlign:"center",
        boxShadow: 24,
        p: 4,
      };


  return (
      <React.Fragment>
        <Card  sx={{ maxWidth: 345 }} onClick={handleOpen} >
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="image"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography style={{textAlign:"justify",textJustify: "interWord"}} variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      
    </Card>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div style={{fontWeight:"bold"}}>
            {props.name}
            </div>
          </Typography>
          <Paper>
            <img style={{margin:"20px",width:"50vw"}}  src={props.image} />
          </Paper>
            
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {props?.description}<br />
           {props?.requirements}
           <div style={{fontWeight:"bold"}}>
             {props.specialisation?
             <React.Fragment>
                Speciality - {props.specialisation}<br />
             </React.Fragment>:""}
            </div>

          </Typography>
        </Box>
      </Modal>
      </React.Fragment>
   
  );
}
