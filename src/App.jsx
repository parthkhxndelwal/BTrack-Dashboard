import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage.jsx';

export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/dashboard/Home" />} />
      </Routes>
    </Router>
  );
}
