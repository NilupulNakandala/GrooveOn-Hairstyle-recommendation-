import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4f0fccf5-7b35-48e0-8cc0-a845abdfa57e");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Email Sent Successfully",
        icon: "success"
      });
    } else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <section className="contact">
            <nav className="navbar">
                <div className="nav-left">
                    <a href="/">Home</a>
                    
                    <a href="/Recommendation">Recommendations</a>
                    <a href="/PopularHairstyles">Popular Hairstyles</a>
                </div>
                <div className="nav-center">
                    <a href="/">GrooveOn</a>
                </div>
                <div className="nav-right">
                    <a href="/About">About US</a>
                    <a href="/Contact">Contact US</a>
                </div>
            </nav>
      <form onSubmit={onSubmit}>
        <h2>Contact US</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder='Enter your name' name='name' required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder='Enter your email' name='email' required />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message" className='field mess' placeholder='Enter your message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
    
  )
}

export default Contact