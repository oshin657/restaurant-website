import React from 'react';
import './Hero.css';

function Hero() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your room has been successfully booked!");
  };

  return (
    <>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Paradise Resort</h1>
          <p>Experience luxury like never before</p>
        </div>
      </section>

     
      <section className="booking-section">
        <div className="booking-container">
          <h2>Book Your Stay</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label>Check In</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>Check Out</label>
                <input type="date" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Guests</label>
                <select defaultValue="2">
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                </select>
              </div>
              <div className="form-group">
                <label>Room Type</label>
                <select defaultValue="deluxe">
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
            </div>
            
            <button type="submit" className="book-button">
              Check Availability
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Hero;