import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firstImage from '/public/assets/contact/cbackground.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    userMessage: '',
    selectedDate: null,
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // Handle input field changes with validation
  const handleChange = (e) => {
    const { name, value } = e.target
    let localErrors = { ...errors }

    switch (name) {
      case 'fullName':
        if (!/^[a-zA-Z\s]*$/.test(value)) {
          localErrors[name] = 'Please enter only letters and spaces.'
        } else {
          delete localErrors[name]
        }
        break
      case 'phoneNumber':
        if (!/^\d*$/.test(value)) {
          localErrors[name] = 'Please enter only numbers.'
        } else {
          delete localErrors[name]
        }
        break
      default:
        break
    }

    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
    setErrors(localErrors)
  }

  // Handle date picker changes
  const handleDateChange = (date) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      selectedDate: date,
    }))
    if (!date) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedDate: 'Please select a date.',
      }))
    } else {
      let updatedErrors = { ...errors }
      delete updatedErrors.selectedDate
      setErrors(updatedErrors)
    }
  }

  const formSubmit = () => {
    setIsLoading(true) // Set loading to true
    const data = {
      name: formDetails?.fullName,
      phone: formDetails?.phoneNumber,
      email: formDetails?.emailAddress,
      message: formDetails?.userMessage,
      date: formDetails?.selectedDate,
    }

    fetch('http://localhost:3001/groove/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(() => {
        setFormDetails({
          fullName: '',
          emailAddress: '',
          phoneNumber: '',
          userMessage: '',
          selectedDate: null,
        })
        toast.success('Successfully Submitted')
      })
      .catch((error) => {
        console.error('There was a problem saving the message:', error)
        toast.error('Submission Failed')
      })
      .finally(() => {
        setIsLoading(false) // Reset loading state
      })
  }

  // Check if all fields are filled and valid
  const isFormValid = () => {
    return (
      formDetails.fullName &&
      formDetails.emailAddress &&
      formDetails.phoneNumber &&
      formDetails.userMessage &&
      formDetails.selectedDate &&
      Object.keys(errors).length === 0
    )
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${firstImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ToastContainer />
      <div
        className="row justify-content-center"
        style={{ padding: '20px 0px' }}
      >
        <div className="col-lg-6">
          <div className="contact-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h4 className="heading">Contact Us</h4>
              <p>Stay In the Loop with GrooveON exclusive Newsletter!</p>

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
                  disabled={isLoading}
                />
                {errors.fullName && (
                  <p className="text-danger">{errors.fullName}</p>
                )}
              </div>

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
                  disabled={isLoading}
                />
              </div>

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
                  disabled={isLoading}
max={10}
maxLength={10}
                />
                {errors.phoneNumber && (
                  <p className="text-danger">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="userMessage">Message:</label>
                <textarea
                  id="userMessage"
                  name="userMessage"
                  value={formDetails.userMessage}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="datepicker">Select Date:</label>
                <DatePicker
                  id="datepicker"
                  selected={formDetails.selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Select a date"
                  dateFormat="MM/dd/yyyy"
                  required
                  disabled={isLoading}
                />
                {errors.selectedDate && (
                  <p className="text-danger">{errors.selectedDate}</p>
                )}
              </div>

              <button
                className="btn btn-primary"
                onClick={formSubmit}
                disabled={!isFormValid() || isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
