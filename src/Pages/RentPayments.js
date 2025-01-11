import React, { useState } from 'react';
import Sidebar from '../Component/Sidebar';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import './Dashboard.css';

const Dashboard = () => {
  const [payments, setPayments] = useState([
    // Sample payment data
    { id: 1, amount: 500, status: 'Paid', date: '2025-01-01' },
    { id: 2, amount: 300, status: 'Pending', date: '2025-01-10' },
  ]);

  const [newPayment, setNewPayment] = useState('');

  const handleMakePayment = () => {
    if (!newPayment) {
      alert('Enter a valid amount to proceed!');
      return;
    }
    const newPaymentData = {
      id: payments.length + 1,
      amount: parseFloat(newPayment),
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
    };
    setPayments([...payments, newPaymentData]);
    setNewPayment('');
    alert('Payment initiated successfully. It will be processed soon!');
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header />

        <div className="dashboard__content">
          <h1 className="dashboard__title">Tenant Payment Dashboard</h1>

          {/* Make Payment Section */}
          <div className="dashboard__section">
            <h2>Make a Payment</h2>
            <div className="dashboard__form">
              <label htmlFor="paymentAmount">Payment Amount:</label>
              <input
                id="paymentAmount"
                type="number"
                value={newPayment}
                onChange={(e) => setNewPayment(e.target.value)}
                className="dashboard__input"
                placeholder="Enter amount (e.g., 500)"
              />
              <button className="dashboard__button" onClick={handleMakePayment}>
                Pay Now
              </button>
            </div>
          </div>

          {/* View Payment History Section */}
          <div className="dashboard__section">
            <h2>Payment History</h2>
            <table className="dashboard__table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>${payment.amount}</td>
                    <td
                      className={
                        payment.status === 'Paid'
                          ? 'dashboard__status--paid'
                          : 'dashboard__status--pending'
                      }
                    >
                      {payment.status}
                    </td>
                    <td>{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
