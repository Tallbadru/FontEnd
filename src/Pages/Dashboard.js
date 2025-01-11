import React from 'react';
import Sidebar from '../Component/Sidebar';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header />

        <div className="dashboard__content">
          <h1 className="dashboard__title">Dashboard Overview</h1>
          <div className="dashboard__summary">
            {/* Property Summary Card */}
            <div className="dashboard__card">
              <h2>Properties</h2>
              <p>Total Properties: <strong>20</strong></p>
              <p>Occupied Properties: <strong>15</strong></p>
              <p>Vacant Properties: <strong>5</strong></p>
            </div>

            {/* Payment Summary Card */}
            <div className="dashboard__card">
              <h2>Payments</h2>
              <p>Total Payments Collected: <strong>$50,000</strong></p>
              <p>Pending Payments: <strong>$10,000</strong></p>
              <p>Overdue Payments: <strong>$2,500</strong></p>
            </div>

            {/* Maintenance Summary Card */}
            <div className="dashboard__card">
              <h2>Maintenance</h2>
              <p>Pending Requests: <strong>8</strong></p>
              <p>Completed Requests: <strong>12</strong></p>
              <p>High Priority Requests: <strong>3</strong></p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
