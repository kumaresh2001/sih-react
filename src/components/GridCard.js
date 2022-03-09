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

export default function GridCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
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
        <Card sx={{ maxWidth: 345 }} onClick={handleOpen} >
      <CardMedia
        component="img"
        height="140"
        image={require("../assets/img1.jpg")}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Meraki
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A system independent system for the best career and academic guidance
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Institute Name
          </Typography>
          <Paper>
            <img style={{margin:"20px",width:"50vw"}}  src={require("../assets/img5.jpg")} />
          </Paper>
            
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is the description about the college<br />
            Location: This is location of college<br />
            Qualification: This is qualification for this college<br />

          </Typography>
        </Box>
      </Modal>
      </React.Fragment>
   
  );
}
