import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import ComplexGrid from '../components/Cards';
import Quiz from "../components/Quiz"
import DomesticCards from "../components/DomesticCards"
import Professions from "../components/Professions"
import Footer from '../components/Footer';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default class HigherStudents extends React.Component{
  componentDidMount(){
    if(localStorage.getItem("accessToken")==null){
      console.log("hehes")
      window.location.replace("http://127.0.0.1:3000/")
    }
    else{
      console.log("hehe")
    }
  }
  render(){
    return <HigherStudentsFunction />
  }
}

export  function HigherStudentsFunction(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [value2,setValue2] = React.useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleNewChange = (event,newValue) =>{
    setValue2(newValue);
  }

  const handleNewChangeIndex = (index) => {
    setValue2(index);
  };


  return (
      <React.Fragment>
           <NavBar signIn="true" />
            <Box sx={{ width: "100%" }}>
                <AppBar color="transparent" boxShadow="none" position="static">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="#000"
                    aria-label="full width tabs example"
                    centered
                    >
                    <Tab wrapped label="Professions"  {...a11yProps(0)} />
                    <Tab wrapped label="Universities"  {...a11yProps(1)} />
                    <Tab wrapped label="Personality Test"  {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                    <p style= {{width:"100%", textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>PROFESSIONS</p>

                        <Professions />
                    </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                        
                    <AppBar color="transparent" boxShadow="none" position="static">
                      <Tabs
                      value={value2}
                      onChange={handleNewChange}
                      indicatorColor="primary"
                      textColor="#000"
                      aria-label="full width tabs example"
                      variant="fullWidth"
                      >
                        <Tab wrapped label="Domestic"  {...a11yProps(0)} />
                        <Tab wrapped label="Abroad"  {...a11yProps(1)} />
                      </Tabs>
                    </AppBar>
                
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value2}
                        onChangeIndex={handleNewChangeIndex}
                    >

                      <TabPanel value={value2} index={0} dir={theme.direction}>
                      <p style= {{width:"100%", textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>DOMESTIC UNIVERSITIES</p>

                          <DomesticCards />
                      </TabPanel>
                      <TabPanel value={value2} index={1} dir={theme.direction}>
                      <p style= {{width:"100%", textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>ABROAD UNIVERSITIES</p>

                          <ComplexGrid />
                      </TabPanel>

                    </SwipeableViews>

                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <Quiz />
                    </TabPanel>
                </SwipeableViews>
            </Box>
            <Footer />
            
      </React.Fragment>
  

    
  );
}
