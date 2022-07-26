import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import HigherStudents from "./pages/HigherStudents";
import SecondaryStudents from "./pages/SecondaryStudents";
import ParentsPage from "./pages/ParentsPage";
import About from "./pages/About";
import Professions from "./pages/Professions";
import Entrepreneur from "./components/Entrepreneur";
import Writer from "./components/Writer";
import { ThemeProvider } from '@mui/material';
import {theme,darkTheme} from "./utils/theme";
import ChatbotComponent from './components/chatbot/ChatbotComponent';

import {connect} from "react-redux";
import {mapStateToProps} from './components/store/Reducers'
import { useEffect, } from 'react';
import Contact from './pages/Contact';
import Help from './pages/Help';



function Application(props) {
 
    useEffect(()=>{
        console.log(props)
    })
    
    return (
      <>
            <ThemeProvider theme={props.dark===true?darkTheme:theme}>
            <Router>
              <Routes>
  
                <Route path="/" element={<Home />}/>
                <Route path="/higherstudents" element={<HigherStudents />}/>
                <Route path="/secondarystudents" element={<SecondaryStudents />}/>
                <Route path="/parentspage" element={<ParentsPage />}/>
                <Route path="/professions" element={<Professions />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/Entrepreneur" element={<Entrepreneur />} />
                <Route path="/Writer" element={< Writer/>} />
                <Route path="/help" element={<Help />} />
                <Route path="/contact" element={<Contact />} /> 
  
              </Routes>
  
            </Router>
            <ChatbotComponent />

            </ThemeProvider>
          
      </> 
    );
  }
  
  // export default connect(mapStateToProps) (App);
  export default connect(mapStateToProps) (Application);