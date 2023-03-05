import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Doctor from "./pages/doctor";
import Patient from "./pages/patient";
import Home from "./pages/home"
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
