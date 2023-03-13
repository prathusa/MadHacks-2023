import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Doctor from "./pages/MadHacks-2023/doctor";
import Patient from "./pages/MadHacks-2023/patient";
import Home from "./pages/MadHacks-2023/home"
import PatientInfo from "./pages/MadHacks-2023/doctor_patient";
import Navbar from "./components/Navbar";
// import './index.css'
// import { useState, useEffect } from 'react'
// import { supabase } from './supabaseClient'
// import Auth from './Auth'
// import Account from './Account'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/MadHacks-2023/" element={<Home />} />
          <Route path="/MadHacks-2023/doctor" element={<Doctor />} />
          <Route path="/MadHacks-2023/patient" element={<Patient />} />
          <Route path="/MadHacks-2023/doctor_patient" element={<PatientInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
