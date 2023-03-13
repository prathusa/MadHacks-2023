import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Doctor from "./pages/doctor";
import Patient from "./pages/patient";
import Home from "./pages/home";
import PatientInfo from "./pages/doctor_patient";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <BrowserRouter > */}
        <Router basename="/MadHacks-2023">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/doctor_patient" element={<PatientInfo />} />
          </Routes>
        </Router>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
