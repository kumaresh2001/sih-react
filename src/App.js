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

import ChatbotComponent from './components/chatbot/ChatbotComponent';
import { Provider } from 'react-redux';
import { Store } from './components/store/Store';
import {connect} from "react-redux";
import {mapStateToProps} from './components/store/Reducers'
import { useEffect } from 'react';
import Application from './Application'

function App(props) {
 
  return (
    <>
    <Provider store={Store}>

          {/* <Router>
            <Routes>

              <Route path="/" element={<Home />}/>
              <Route path="/higherstudents" element={<HigherStudents />}/>
              <Route path="/secondarystudents" element={<SecondaryStudents />}/>
              <Route path="/parentspage" element={<ParentsPage />}/>
              <Route path="/professions" element={<Professions />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/Entrepreneur" element={<Entrepreneur />} />
              <Route path="/Writer" element={< Writer/>} />

            </Routes>

          </Router> */}

          <Application />
          <ChatbotComponent />

    </Provider>
      
    </> 
  );
}

export default App;

