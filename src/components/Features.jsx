import React from 'react';
import "./Features.css";
import { FaStar, FaUtensils, FaWifi, FaSwimmingPool, FaConciergeBell, FaParking } from 'react-icons/fa';

function Features() {
  return (
    <div className="features-container">
      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Our Hotel</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaStar className="feature-icon" />
            <h3>Luxury Accommodations</h3>
            <p>Elegantly designed rooms with premium amenities for your ultimate comfort.</p>
          </div>
          <div className="feature-card">
            <FaUtensils className="feature-icon" />
            <h3>Gourmet Dining</h3>
            <p>Experience world-class cuisine from our award-winning restaurants.</p>
          </div>
          <div className="feature-card">
            <FaWifi className="feature-icon" />
            <h3>High-Speed WiFi</h3>
            <p>Stay connected with complimentary high-speed internet throughout the hotel.</p>
          </div>
          <div className="feature-card">
            <FaSwimmingPool className="feature-icon" />
            <h3>Infinity Pool</h3>
            <p>Relax in our stunning rooftop pool with panoramic city views.</p>
          </div>
          <div className="feature-card">
            <FaConciergeBell className="feature-icon" />
            <h3>24/7 Concierge</h3>
            <p>Our dedicated staff is always available to assist with your needs.</p>
          </div>
          <div className="feature-card">
            <FaParking className="feature-icon" />
            <h3>Secure Parking</h3>
            <p>Complimentary valet parking for all our guests.</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="customer-reviews">
        <h2>What Our Guests Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah J." />
                <div>
                  <h4>Sarah J.</h4>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <span className="review-date">March 2023</span>
            </div>
            <p className="review-text">
              "Absolutely stunning hotel with exceptional service. The room was spacious and clean, 
              and the pool area was breathtaking. Will definitely return!"
            </p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael T." />
                <div>
                  <h4>Michael T.</h4>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <span className="review-date">January 2023</span>
            </div>
            <p className="review-text">
              "The best hotel experience I've had in years. The staff went above and beyond to make 
              our anniversary special. The restaurant food was exceptional!"
            </p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma K." />
                <div>
                  <h4>Emma K.</h4>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <span className="review-date">December 2022</span>
            </div>
            <p className="review-text">
              "Perfect location, beautiful rooms, and amazing amenities. The spa services were 
              top-notch. Can't wait to come back for another relaxing getaway!"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features;
