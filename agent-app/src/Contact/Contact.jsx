
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";


// Functional component for the Contact page
const Contact = () => {
  // State to manage form details
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    userMessage: "",
    selectedDate: null,
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle date picker changes
  const handleDateChange = (date) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      selectedDate: date,
    }));
  };

  // Render the Contact component
  return (
    
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="contact-container">
            {/* Contact Form */}
            <form className="contact-form">
              <h3 className="headding">Contact Us</h3>
              <p>
                Stay In the Loop with  GrooveON exclusive Newsletter!
                
              </p>

              {/* Full Name Input */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formDetails.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Address Input */}
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address:</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formDetails.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formDetails.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label htmlFor="userMessage">Message:</label>
                <textarea
                  id="userMessage"
                  name="userMessage"
                  value={formDetails.userMessage}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>

              {/* Date Picker Input */}
              <div className="form-group">
                <label htmlFor="datepicker">Select Date:</label>
                <DatePicker
                  id="datepicker"
                  selected={formDetails.selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Select a date"
                  dateFormat="MM/dd/yyyy"
                />
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
