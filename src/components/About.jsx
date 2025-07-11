import React from 'react';
import './About.css';
import Footer from '../Footer';

function About() {
  return (
    <>
      <div className="about-wrapper">

        {/* Hotel History */}
        <div className="about-section">
          <div className="about-image">
            <img
              src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
              alt="Hotel Exterior"
            />
          </div>
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 1995, Luxury Hotel has become a symbol of comfort, class, and Nepali hospitality.
              Located in the heart of Kathmandu, we’ve hosted over 1 million satisfied guests across the globe.
              From a small boutique inn, we've grown into a luxury haven offering unforgettable views,
              personalized service, and a legacy of trust.
            </p>
          </div>
        </div>

        {/* About the Chef */}
        <div className="about-section reverse">
          <div className="about-image">
            <img
              src="https://img.freepik.com/premium-photo/chef-cooking-food-restaurant-kitchen_889227-15009.jpg"
              alt="Head Chef"
            />
          </div>
          <div className="about-content">
            <h2>Meet Our Chef</h2>
            <p>
              Chef Anil Gurung leads our award-winning kitchen. With over 20 years of international experience,
              he combines traditional Nepali flavors with modern techniques to craft truly unique dining experiences.
              His signature dishes like Himalayan Grilled Trout and Nepali-Fusion Biryani attract foodies from around the world.
            </p>
          </div>
        </div>

        {/* Hotel Environment */}
        <div className="about-section">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
              alt="Hotel Environment"
            />
          </div>
          <div className="about-content">
            <h2>Peaceful Environment</h2>
            <p>
              Nestled among greenery and mountain views, our hotel offers a peaceful escape from the busy city.
              Guests enjoy garden walks, poolside relaxation, and eco-friendly rooms designed for ultimate comfort.
              Whether you're here for work or leisure, you'll find serenity around every corner.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default About;
