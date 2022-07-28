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
import Streams from '../components/Streams';
import ComplexGrid from '../components/Cards';
import Quiz from "../components/Quiz";
import Footer from '../components/Footer';
import Professions from '../components/Professions';



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

export default function SecondaryStudents() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
      <React.Fragment>
          <NavBar />
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
                    <Tab wrapped label="Streams"  {...a11yProps(0)} />
                    <Tab wrapped label="Professions "  {...a11yProps(1)} />
                    <Tab wrapped label="Personality Test"  {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <p style= {{width:"100%", textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>STREAMS</p>                      
                        <Streams />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                       <p style= {{width:"100%", textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>PROFESSIONS</p>                      
                        <Professions />
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
