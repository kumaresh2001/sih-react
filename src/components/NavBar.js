import  React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function NavBar() {
    const [state,setState] = useState(false);
    const [open,setOpen] = useState(false);
    const [firstSelectedValue,setFirstSelectedValue] = useState("");
    const [registerOpen,setRegisterOpen] = useState(false);
    const onRegisterOpen = () =>setRegisterOpen(true);
    const onRegisterClose = () =>setRegisterOpen(false);
    const onOpen = () =>setOpen(true);
    const onClose = () =>setOpen(false);
    const navigate = useNavigate();
    const routeChange = (path) =>{ 
      navigate(path);
    }
    const [signin,setSignin] = useState(false);

    const onChangeValue = (event)=>{
      setFirstSelectedValue(event.target.value);
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor:"white",
        border: '1px solid #000',
        borderRadius:"2px",
        paddingTop:"30px",
        paddingBottom:"30px",
        textAlign:"center",
        boxShadow: 24,
        p: 4,
      };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>

              <ListItem>
                <ListItemText style={{textAlign:"center"}}>
                    Meraki
                </ListItemText>
              </ListItem>

                <Divider />

              <ListItem style={{marginTop:"10px"}} button onClick={()=>{navigate("/")}} key={"Home"}>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>

            <ListItem style={{marginTop:"10px"}} button key={"Professions"}>
                <ListItemIcon>
                    <WorkIcon />
                </ListItemIcon>
                <ListItemText primary={"Professions"} />
              </ListItem>

              <ListItem style={{marginTop:"10px"}} button key={"About us"}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About Us"} />
              </ListItem>

              <ListItem style={{marginTop:"10px"}} button key={"Contact"}>
                <ListItemIcon>
                    <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary={"Contact"} />
              </ListItem>

              <ListItem style={{marginTop:"10px"}} button key={"Help"}>
                <ListItemIcon>
                    <HelpIcon />
                </ListItemIcon>
                <ListItemText primary={"Help"} />

              </ListItem>
          </List>
        </Box>
      );

      


  return (
    <React.Fragment>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{display:"flex"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography  style={{textAlign:"center"}} variant="h4" component="div" sx={{ flexGrow: 6 }}>
            Meraki
          </Typography>
          {
            signin==false?<React.Fragment>
            <Button color="inherit" style={{fontSize:"0.8rem"}} onClick={setOpen}>Login</Button>
            <Button color="inherit" style={{fontSize:"0.8rem"}} onClick={onRegisterOpen}>Register</Button>
            
            </React.Fragment>
            :<AccountCircleIcon />
          }
        </Toolbar>
        {/*hi */}
      </AppBar>
        
        <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
        </Drawer>

        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
          <Box style={style}>
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


      <Modal
        open={registerOpen}
        onClose={onRegisterClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box style={style}>
          <Typography  id="modal-modal-title" variant="h5" component="h2">
            Register
          </Typography>

            <br />

          <AccountCircleIcon sx={{ fontSize: 70 }} />

            <br />

          <TextField  style={{marginTop:"30px"}} id="outlined-basic" label="Username" variant="outlined" />

          <TextField  style={{marginTop:"30px"}} id="outlined-basic" label="Name" variant="outlined" />

            <br/>
        
        <TextField  style={{marginTop:"30px",marginBottom:"20px"}} id="outlined-basic" label="Password" variant="outlined" />

        <br />
        <FormControl>
          
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel  onChange={onChangeValue} value="student" control={<Radio />} label="Student" />
            <FormControlLabel  onChange={onChangeValue} value="parent" control={<Radio />} label="Parent" />
            
          </RadioGroup>
        
          {
            firstSelectedValue=="student"? <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="student" control={<Radio />} label="9/10" />
            &emsp;&emsp;
            <FormControlLabel value="parent" control={<Radio />} label="11/12" />
            
          </RadioGroup>:""
          }

          {
            firstSelectedValue=="parent"?<TextField  style={{marginTop:"20px",marginBottom:"20px"}} id="outlined-basic" label="Student Username" variant="outlined" />:""
          }
         


        </FormControl>

            <br /><br />
            <Button variant="contained" color="primary">Submit</Button>


        </Box>

      </Modal>


      
    </Box>

   
   

      

    </React.Fragment>


  );
}
