import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JobListings from './pages/JobListings';
import Tracker from './pages/Tracker';

function App() {
  return (
    <Router>
      <div className="header">
        <div className="container">
          <h1>Job Board</h1>
          <nav className="nav">
            <Link to="/">Job Listings</Link>
            <Link to="/tracker">Application Tracker</Link>
          </nav>
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<JobListings />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
