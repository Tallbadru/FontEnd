import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Footer from '../Component/Footer';

const Profile = () => {
  const [tenant, setTenant] = useState({
    name: '',
    contact_info: '', // Make sure the field names match the API response
    lease_details: '',
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(tenant);

  // Fetch tenant information when the component mounts
  useEffect(() => {
    const fetchTenant = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tenant/1'); // Assuming tenant ID is 1
        setTenant(response.data); // Directly set tenant data (no need for [0])
        setFormData(response.data); // Set formData as well
      } catch (error) {
        console.error('Error fetching tenant data:', error);
      }
    };

    fetchTenant();
  }, []);

  // Handle editing mode toggle
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setFormData(tenant); // Reset to original tenant data
  };

  const handleSaveEdit = async () => {
    try {
      // Save the updated data
      await axios.put(`http://127.0.0.1:8000/api/tenant/1`, formData); // Assuming tenant ID is 1
      setTenant(formData);
      setEditing(false);
    } catch (error) {
      console.error('Error saving tenant data:', error);
    }
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
                  name="contact_info" // Ensure you're using the correct API field
                  value={formData.contact_info}
                  onChange={handleChange}
                  className="profile__input"
                />
              ) : (
                <span>{tenant.contact_info}</span> // Display the correct API field
              )}
            </div>

            <div className="profile__info">
              <label>Lease Details</label>
              {editing ? (
                <textarea
                  name="lease_details" // Ensure you're using the correct API field
                  value={formData.lease_details}
                  onChange={handleChange}
                  className="profile__input"
                />
              ) : (
                <span>{tenant.lease_details}</span> // Display the correct API field
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
