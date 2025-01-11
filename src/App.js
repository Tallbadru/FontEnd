import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Tenants from './Pages/Tenants';
import Properties from './Pages/Properties';
import RentPayments from './Pages/RentPayments';
import Reports from './Pages/Reports';
import Maintenance from './Pages/Maintenance'
import Dashboard from './Pages/Dashboard';


const App = () => {
  return (
    // <Properties/>
    // <login/>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/properties" element={<Properties />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/rentPayments" element={<RentPayments />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default App;
