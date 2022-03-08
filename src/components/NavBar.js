import  React,{useState} from 'react';
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


export default function NavBar() {
    const [state,setState] = useState(false);
    const [open,setOpen] = useState(false);

    const onOpen = () =>setOpen(true);
    const onClose = () =>setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor:"white",
        border: '1px solid #000',
        borderRadius:"20px",
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


              <ListItem style={{marginTop:"10px"}} button key={"Home"}>
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
          <Button color="inherit" style={{fontSize:"1.2rem"}} onClick={setOpen}>Login</Button>
        </Toolbar>
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

      
    </Box>

   
   

      

    </React.Fragment>


  );
}
