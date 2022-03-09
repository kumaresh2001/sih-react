import React, { Component } from 'react';
import { Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export class SigninModal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         open:this.props.open,
         style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor:"white",
            border: '1px solid #000',
            borderRadius:"5px",
            paddingTop:"30px",
            paddingBottom:"30px",
            textAlign:"center",
            boxShadow: 24,
            p: 4,
          },
      }
    }
    onClose=()=>{
        this.setState({open:false})
    }
  render() {
    return (
      <React.Fragment>
           <Modal
        open={this.state.open}
        onClose={this.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box style={this.state.style}>
          <Typography  id="modal-modal-title" variant="h5" component="h2">
            Login
          </Typography>

            <br />

          <AccountCircleIcon sx={{ fontSize: 90 }} />

            <br />

          <TextField  style={{marginTop:"30px"}} id="outlined-basic" label="Username" variant="outlined" />

            <br/>
        
        <TextField  style={{marginTop:"30px",marginBottom:"20px"}} id="outlined-basic" label="Password" variant="outlined" />

            <br />
            <Button variant="contained" color="primary">Submit</Button>


        </Box>

      </Modal>
      </React.Fragment>
    )
  }
}

export default SigninModal