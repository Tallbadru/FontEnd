import React from 'react';
import '../CSS/Modal.css';

const Modal = ({ show, onClose, onSubmit, properties }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        <h2>Book a Property</h2>
        <form onSubmit={onSubmit}>
          <div className="modal__form-group">
            <label htmlFor="property_id">Room No</label>
            <select name="property_id" id="property_id" required>
              <option value="">Select a property</option>
              {properties.map((property) => (
                <option key={property.id} value={property.id}>
                  {property.room_no} - {property.type}
                </option>
              ))}
            </select>
          </div>
          <div className="modal__form-group">
            <label htmlFor="tenant_name">Tenant Name</label>
            <input type="text" name="tenant_name" id="tenant_name" required />
          </div>
          <div className="modal__form-group">
            <label htmlFor="booking_date">Booking Date</label>
            <input type="date" name="booking_date" id="booking_date" required />
          </div>
          <div className="modal__footer">
            <button type="submit" className="modal__button">
              Submit
            </button>
            <button
              type="button"
              className="modal__button modal__button--close"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
    