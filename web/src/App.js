import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Doctor from "./pages/doctor";
import Patient from "./pages/patient";
import Home from "./pages/home"
import PatientInfo from "./pages/doctor_patient";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <BrowserRouter 
        // basename={'MadHacks-2023/'}
      > */}
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/MadHacks-2023/" element={<Home />} />
          <Route path="/MadHacks-2023/doctor" element={<Doctor />} />
          <Route path="/MadHacks-2023/patient" element={<Patient />} />
          <Route path="/MadHacks-2023/doctor_patient" element={<PatientInfo />} />
        </Routes>
      </Router>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
