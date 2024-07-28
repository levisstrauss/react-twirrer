import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/Login"
// import PatientDetail from './pages/PatientDetail';

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/patient/:id" element={<PatientDetail />} /> */}
    </Routes>
  </Router>
);

export default RoutesConfig;