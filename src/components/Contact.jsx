import React from 'react';
import './Contact.css';
import Footer from '../Footer';

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  }

  return (
    <>
    <div className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We're here to help and answer any question you might have. Feel free to reach out to us!</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;

