import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login'
import Feeds from '../pages/Feed';

// import PatientDetail from './pages/PatientDetail';

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feeds />} />
    </Routes>
  </Router>
);

export default RoutesConfig;

 {/* <Route path="/patient/:id" element={<PatientDetail />} /> */}