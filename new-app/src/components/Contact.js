import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
            <nav className="navbar">
                <div className="nav-left">
                    <a href="/">Home</a>
                    
                    <a href="/Recommendation">Recommendations</a>
                    <a href="/PopularHairstyles">Popular Hairstyles</a>
                </div>
                <div className="nav-center">
                    <a href="Home">GrooveOn</a>
                </div>
                <div className="nav-right">
                    <a href="/About">About US</a>
                    <a href="/Contact">Contact US</a>
                    <a href="/Review">Review</a>
                </div>
            </nav>
      <form>
        <h2>Contact US</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder='Enter your name' required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder='Enter your email' required />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="" id="" className='field mess' placeholder='Enter your message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact