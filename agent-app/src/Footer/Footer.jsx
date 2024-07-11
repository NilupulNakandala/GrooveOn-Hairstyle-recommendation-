import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'
import { toast, ToastContainer } from 'react-toastify'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const formSubmit = () => {
    setIsLoading(true) // Set loading to true
    const data = {
      email,
    }

    fetch('http://localhost:3001/groove/email', {
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
        setEmail('')
        toast.success(`Subscribed with email: ${email}`)
      })
      .catch((error) => {
        console.error('There was a problem saving the message:', error)
        toast.error('Email already exists try with different email')
      })
      .finally(() => {
        setIsLoading(false) // Reset loading state
      })
  }

  return (
    <div className="container">
      <ToastContainer />
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61553568625908"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://twitter.com/chenuwik55301"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.instagram.com"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Contact Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="text-muted">GrooveON.com</span>
              </li>
              <li className="nav-item mb-2">
                <span className="text-muted">0777619245</span>
              </li>
              <li className="nav-item mb-2">
                <span className="text-muted">0712114556</span>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Address</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="text-muted">
                  32 Halanduruwa Road / Malabe/ Ragama 10115
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form onSubmit={(e) => e.preventDefault()}>
              <p>Stay Updated with GrooveON Newsletter!</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isLoading}
                />

                <button
                  type="button"
                  disabled={isLoading}
                  style={{ height: '40px', marginTop: '4px' }}
                  className="btn btn-primary"
                  onClick={formSubmit}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
