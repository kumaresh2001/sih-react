import  React,{useEffect, useState} from 'react';
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
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import Brightness5RoundedIcon from '@mui/icons-material/Brightness5Rounded';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios  from 'axios';
import { Switch } from '@mui/material';
import Canvas from './canvas/Canvas';
import { Store } from './store/Store';
import { toggleTheme } from './store/Actions';
import { connect } from 'react-redux/es/exports';
import { mapStateToProps } from "./store/Reducers"





function NavBar(props) {

   

    const [state,setState] = useState(false);
    const [open,setOpen] = useState(false);
    const [firstSelectedValue,setFirstSelectedValue] = useState("");
    const [registerOpen,setRegisterOpen] = useState(false);
    const onRegisterOpen = () =>setRegisterOpen(true);
    const onRegisterClose = () =>setRegisterOpen(false);
    const onOpen = () =>setOpen(true);
    const onClose = () =>setOpen(false);
    const navigate = useNavigate();
    const [path,setPath] = useState();


    const [loginName,setLoginName] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const [registerUserName,setRegisterUserName] = useState("");
    const [registerName,setRegisterName] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [registerType,setRegisterType] = useState("");
    const [studentGrade,setStudentGrade] = useState("");
    const [parentsWardUserName,setParentsWardUserName] = useState("");

    const [themeChecked,setThemeChecked] = useState(false);

    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect = () =>{
     function resize(){
      setWindowWidth(window.innerWidth);
     }
     window.addEventListener('resize',resize);
     console.log(windowWidth)
    }
    

    const routeChange = async (path) =>{ 
      navigate(path);
    }
    const [signin,setSignin] = useState(props.signIn);

    const onChangeValue = (event)=>{
      setFirstSelectedValue(event.target.value);
      setRegisterType(event.target.value);
    }

    const handleSubmit = ()=>{
      axios.post(process.env.REACT_APP_LOGIN,{"username":loginName,"password":loginPassword})
      .then(res=>
        {
          console.log(res.data)
          if(!res.data.loginStatus){
            alert("Login Failed! Invalid username and password")
          }
          else{
            localStorage.setItem("accessToken",res.data.token)
            navigate("/secondarystudents");
            return;
          }
          // if(res.data.notFound)
          // {
          //   alert("Invalid Username and Password")
          //   return;
          // }
          // if(res.data.password)
          // {
          //   if(loginPassword===res.data.password)
          //   {
          //     navigate("/higherstudents");
          //     return;
          //   }
          //   alert("Invalid Username and Password")
          // }
        }
      )
    }

    const handleRegisterSubmit =()=>{
      let submitInfo = {};
      submitInfo.name = registerName;
      submitInfo.userName = registerUserName;
      submitInfo.password = registerPassword;
      submitInfo.type = registerType;
      if(registerType==="student")
      {
        submitInfo.studentGrade = studentGrade;
      }
      else{
        submitInfo.parentsWardUserName = parentsWardUserName;
      }
      console.log(submitInfo)
      axios.post("http://127.0.0.1:5000/register",submitInfo)
      .then(res=>{console.log(res.data)})
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor:props.backgroundColor,
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
          onClick={toggleDrawer(anchor, true)}
          onKeyDown={toggleDrawer(anchor, false)}
          
          style={{backgroundColor:props.backgroundColor,height:"100% "}}
        >
          <List style={{backgroundColor:props?.backgroundColor}}>

              <ListItem>
                <ListItemText>
                    Meraki
                </ListItemText>
              </ListItem>

                <Divider />

              <ListItem style={{marginTop:"10px"}} button onClick={()=>{window.location.replace("/")}} key={"Home"}>
                <ListItemIcon>
                    <HomeIcon  color="icon" />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>

            <ListItem style={{marginTop:"10px"}} button onClick={()=>{window.location.replace("/professions")}} key={"Professions"}>
                <ListItemIcon>
                    <WorkIcon  color="icon" />
                </ListItemIcon>
                <ListItemText primary={"Professions"} />
              </ListItem>

              <ListItem style={{marginTop:"10px"}}  onClick={()=>{window.location.replace("/about")}} button key={"About us"}>
                <ListItemIcon>
                  <InfoIcon  color="icon" />
                </ListItemIcon>
                <ListItemText primary={"About Us"} />
              </ListItem>

              <ListItem style={{marginTop:"10px"}} onClick={()=>{window.location.replace("/contact")}}  button key={"Contact"}>
                <ListItemIcon>
                    <PhoneIcon  color="icon" />
                </ListItemIcon>
                <ListItemText primary={"Contact"} />
              </ListItem>

              <ListItem style={{marginTop:"10px"}} onClick={()=>{window.location.replace("/help")}} button key={"Help"}>
                <ListItemIcon>
                    <HelpIcon  color="icon" />
                </ListItemIcon>
                <ListItemText primary={"Help"} />

              </ListItem>

              <ListItem style={{position:"fixed",bottom:"0px"}}>
                <ListItemIcon>
                  <Brightness7RoundedIcon  color="icon" />
                </ListItemIcon>
                <ListItemText primary={"Theme"} />
                <ListItem style={{float:"right",marginRight:"0px"}} > 
                  <Switch  color="icon" checked={themeChecked} onChange={()=>{setThemeChecked(!themeChecked);Store.dispatch(toggleTheme())}}/>
                </ListItem>
              </ListItem>
          </List>
        </Box>
      );

      


  return (
    <React.Fragment
    
    >

    <Box sx={{ flexGrow: 1 }}>
      <AppBar  color="primary" position="static" style={{display:"flex",position:"fixed",marginBottom:"40px",top:"0px",zIndex:"3"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            {
              windowWidth<1000 ? <MenuIcon /> : ""
            }
          
          </IconButton>

          <img src={require("../assets/meraki-logo.png") } style={{maxWidth:"40px"}} alt="not loaded" />

          <Typography onClick={()=>routeChange("/")} style={{marginLeft:"15px",cursor:"pointer"}} variant="h4" component="div" sx={{ flexGrow: 6 }}>
            Meraki
          </Typography>

          
            {
             
              windowWidth>=1000?
                <>
                  <Button color="inherit" onClick={()=>window.location.replace("/professions")} style={{fontSize:"1rem",marginRight:"30px"}} >Professions</Button>
                  <Button color="inherit" onClick={()=>window.location.replace("/about")} style={{fontSize:"1rem",marginRight:"30px"}} >About</Button>
                  <Button color="inherit" onClick={()=>window.location.replace("/contact")} style={{fontSize:"1rem",marginRight:"30px"}} >Contact</Button>
                  <Button color="inherit" onClick={()=>window.location.replace("/help")} style={{fontSize:"1rem",marginRight:"30px"}} >Help</Button>
                </>
                :""
            }{
                
                signin===false&&windowWidth>=1000?<React.Fragment>
                <Button color="inherit" style={{fontSize:"1rem",marginRight:"30px"}} onClick={setOpen}>Login</Button>
                <Button color="inherit" style={{fontSize:"1rem",marginRight:"30px"}} onClick={onRegisterOpen}>Register</Button>
                
                </React.Fragment>
                :
                signin===true?<AccountCircleIcon onClick={()=>{localStorage.removeItem("accessToken");navigate("/")}} />:""
            }
            {         
                themeChecked===true&&windowWidth>=1000?
                  <Brightness7RoundedIcon onClick={()=>{setThemeChecked(!themeChecked);Store.dispatch(toggleTheme())}}  color="icon" /> 
                    :windowWidth>=1000?
                  <Brightness5RoundedIcon onClick={()=>{setThemeChecked(!themeChecked);Store.dispatch(toggleTheme())}}  color="white" />:""
            }
            


          
        </Toolbar>
      </AppBar>
        <div style={{height:"65px",width:"100vw"}}>

        </div>

          {/* <Canvas /> */}


        <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            color="primary"
            
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
          <Typography color={props.contrastColor} id="modal-modal-title" variant="h5" component="h2">
            Login
          </Typography>

            <br />

          <AccountCircleIcon color="icon" sx={{ fontSize: 90 }} />

            <br />

          <TextField focused color="field"  value={loginName} onChange={(event)=>{setLoginName(event.target.value)}} style={{marginTop:"30px"}} id="outlined-basic" label="Username" variant="outlined" />

            <br/>
        
          <TextField focused color="field" value={loginPassword} type={"password"} onChange={event=>{setLoginPassword(event.target.value)}} style={{marginTop:"30px",marginBottom:"20px"}} id="outlined-basic" label="Password" variant="outlined" />

            <br />
            <Button variant="contained" onClick={handleSubmit} color="icon">Submit</Button>


        </Box>

      </Modal>


      <Modal
        open={registerOpen}
        onClose={onRegisterClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box style={style}>
          <Typography color={props.contrastColor}  id="modal-modal-title" variant="h5" component="h2">
            Register
          </Typography>

            <br />

          <AccountCircleIcon color="icon" sx={{ fontSize: 70 }} />

            <br />

          <TextField focused color="field"  onChange={event=>{setRegisterUserName(event.target.value)}} style={{marginTop:"30px"}} id="outlined-basic" label="Username" variant="outlined" />

          <TextField focused color="field" onChange={event=>{setRegisterName(event.target.value)}} style={{marginTop:"30px"}} id="outlined-basic" label="Name" variant="outlined" />

            <br/>
        
          <TextField focused color="field"  required type="password" onChange={event=>{setRegisterPassword(event.target.value)}} style={{marginTop:"30px",marginBottom:"20px",color:props.contrastColor}} id="outlined-basic" label="Password" variant="outlined" />

          <br />
          <FormControl >
            
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              color="field"
            >
              <FormControlLabel style={{color:props.contrastColor}}  onChange={onChangeValue} value="student" control={<Radio />} label="Student" />
              <FormControlLabel style={{color:props.contrastColor}}  onChange={onChangeValue} value="parent" control={<Radio />} label="Parent" />
              
            </RadioGroup>
          
            {
              firstSelectedValue==="student"? <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  
                >
              <FormControlLabel  style={{color:props.contrastColor}} color="field" onChange={event=>setStudentGrade(event.target.value)} value="9/10" control={<Radio />} label="9/10" />
              &emsp;&emsp;
              <FormControlLabel  style={{color:props.contrastColor}} color="field" onChange={event=>setStudentGrade(event.target.value)} value="11/12" control={<Radio />} label="11/12" />
              
            </RadioGroup>:""
            }

            {
              firstSelectedValue==="parent"?<TextField focused color="field" onChange={event=>setParentsWardUserName(event.target.value)} style={{marginTop:"20px",marginBottom:"20px"}} id="outlined-basic" label="Student Username" variant="outlined" />:""
            }
          
          </FormControl>

            <br /><br />

            <Button onClick={handleRegisterSubmit} variant="contained" color="primary">Submit</Button>

        </Box>

      </Modal>
      
    </Box>

    </React.Fragment>

  );
}

export default connect(mapStateToProps) (NavBar);