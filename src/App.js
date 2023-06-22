import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presell from '../src/parts/Presell/Presell';
import AppSecond from './AppSecond';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presell />} />
        <Route path="/second" element={<AppSecond />} />
      </Routes>
    </Router>
  );
}

export default App;
