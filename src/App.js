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
import HigherStudents from "./pages/HigherSecondaryStudents";


export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/highersecondarystudents" element={<HigherStudents />}/>
    </Routes>

    </Router>
  );
}

