import React, { useState } from 'react';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Footer from '../Component/Footer';


const Profile = () => {
  const [tenant, setTenant] = useState({
    name: 'John Doe',
    contactInfo: 'john.doe@example.com',
    leaseDetails: '1-year lease, starts Jan 2025',
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(tenant);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setFormData(tenant);
  };

  const handleSaveEdit = () => {
    setTenant(formData);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="profile">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="profile__content">
          <h1 className="profile__header">Tenant Profile</h1>

          <div className="profile__details">
            <div className="profile__info">
              <label>Name</label>
              {editing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="profile__input"
                />
              ) : (
                <span>{tenant.name}</span>
              )}
            </div>

            <div className="profile__info">
              <label>Contact Info</label>
              {editing ? (
                <input
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  className="profile__input"
                />
              ) : (
                <span>{tenant.contactInfo}</span>
              )}
            </div>

            <div className="profile__info">
              <label>Lease Details</label>
              {editing ? (
                <textarea
                  name="leaseDetails"
                  value={formData.leaseDetails}
                  onChange={handleChange}
                  className="profile__input"
                />
              ) : (
                <span>{tenant.leaseDetails}</span>
              )}
            </div>
          </div>

          <div className="profile__buttons">
            {editing ? (
              <>
                <button onClick={handleSaveEdit} className="profile__button save">
                  Save
                </button>
                <button onClick={handleCancelEdit} className="profile__button cancel">
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={handleEditClick} className="profile__button edit">
                Edit Profile
              </button>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;

    // import React from 'react'
    // import './Dashboard.css'
    // import Header from '../Component/Header'
    // import MainContent from '../Component/MainContent'
    // import Sidebar from '../Component/Sidebar'
    // import Footer from '../Component/Footer'
    // const Home = () => {
    //   return (
    
    //     <div className="dashboard">
    //     <Sidebar />
    //     <div className="main">0
    //       <Header />
    //       <MainContent />
    //       <Footer />
    //     </div>
    //   </div>
    //   )
    // }
    // export default Home
