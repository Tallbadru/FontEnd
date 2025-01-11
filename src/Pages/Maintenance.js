import React, { useState, useEffect } from 'react';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Footer from '../Component/Footer';
import axios from 'axios';

const Maintenance = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState('');

  // Fetch maintenance requests from the API
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/maintenance/');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching maintenance requests:', error);
      }
    };

    fetchRequests();
  }, []);

  // Handle posting a new maintenance request
  const handlePostRequest = async () => {
    if (!newRequest.trim()) {
      alert('Please enter a maintenance issue description!');
      return;
    }

    const newRequestData = {
      description: newRequest,
      status: 'Requested', // Default status for new requests
      tenant: 1, // Replace with the actual tenant ID
      property: 1, // Replace with the actual property ID
    };

    try {
      await axios.post('http://127.0.0.1:8000/api/maintenance/', newRequestData);
      setRequests([...requests, newRequestData]); // Add the new request to the state
      setNewRequest(''); // Clear the input field
      alert('Maintenance request submitted successfully!');
    } catch (error) {
      console.error('Error posting maintenance request:', error);
    }
  };

  return (
    <div className="maintenance">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="maintenance__content">
          <h1 className="maintenance__title">Maintenance Requests</h1>

          {/* Post Maintenance Request */}
          <div className="maintenance__section">
            <h2>Post a Maintenance Request</h2>
            <div className="maintenance__form">
              <textarea
                value={newRequest}
                onChange={(e) => setNewRequest(e.target.value)}
                className="maintenance__input"
                placeholder="Describe the issue (e.g., leaking faucet)..."
              ></textarea>
              <button className="maintenance__button" onClick={handlePostRequest}>
                Submit Request
              </button>
            </div>
          </div>

          {/* View Maintenance Progress */}
          <div className="maintenance__section">
            <h2>Maintenance Progress</h2>
            <table className="maintenance__table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.description}</td>
                    <td
                      className={
                        request.status === 'In Progress'
                          ? 'maintenance__status--in-progress'
                          : 'maintenance__status--requested'
                      }
                    >
                      {request.status}
                    </td>
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

export default Maintenance;
