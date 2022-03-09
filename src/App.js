import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import HigherStudents from "./pages/HigherStudents";
import SecondaryStudents from "./pages/SecondaryStudents";
import ParentsPage from "./pages/ParentsPage";
import About from "./pages/About";
import ApiTest from "./components/ApiTest";
import Professions from "./pages/Professions"

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/higherstudents" element={<HigherStudents />}/>
      <Route path="/secondarystudents" element={<SecondaryStudents />}/>
      <Route path="/parentspage" element={<ParentsPage />}/>
      <Route path="/professions" element={<Professions />}/>
      <Route path="/about" element={<About />}/>
      {/* <Route path="/about" element={<About />} /> */}

      <Route path="/apitest" element={<ApiTest />} />

    </Routes>

    </Router>
  );
}

