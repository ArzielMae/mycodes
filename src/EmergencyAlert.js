import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SubmitReportForm from './SubmitReportForm';
import EmergencyAlertList from './EmergencyAlertList';

const EmergencyAlert = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button1" element={<SubmitReportForm />} />
        <Route path="/button2" element={<EmergencyAlertList />} />
      </Routes>
    </Router>
  );
};

export default EmergencyAlert;
