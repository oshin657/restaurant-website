import React, { useState } from 'react';
import './Menu.css';
import { FaHeart } from 'react-icons/fa';
import Footer from '../Footer';

const menuItems = [
  {
    name: "Grilled Chicken Platter",
    description: "Juicy grilled chicken served with sautéed veggies and mashed potatoes.",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Spicy Nepali Momo",
    description: "Steamed dumplings filled with meat or vegetables served with tangy achar.",
    price: "$7.50",
    image: "https://travelandmunchies.com/wp-content/uploads/2023/03/IMG_2733-scaled.jpg"
  },
  {
    name: "Veggie Delight Pizza",
    description: "Loaded with fresh vegetables, mozzarella, and homemade tomato sauce.",
    price: "$9.99",
    image: "https://recipefund.com/wp-content/uploads/jet-form-builder/f133c249d4a29961d2fd87ee9713e9c1/2023/08/Vegie-Deight-Pizza.png"
  },
  {
    name: "Butter Chicken with Naan",
    description: "Creamy butter chicken served with garlic naan and basmati rice.",
    price: "$11.99",
    image: "https://www.missionfoods.com/wp-content/uploads/2022/06/easy-butter-chicken-naan.jpg"
  },
  {
    name: "Sizzler Steak",
    description: "Premium steak served on a hot sizzler plate with fries and pepper sauce.",
    price: "$15.50",
    image: "https://mariosmeatmarket.com/wp-content/uploads/Untitled-1-1.jpg"
  }
];

function Menu() {
  const [liked, setLiked] = useState(Array(menuItems.length).fill(false));

  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <>
    <div className="menu-section">
      <h2>🍽️ Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <div className="menu-image">
              <img src={item.image} alt={item.name} loading='lazy'/>
            </div>
            <div className="menu-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-bottom">
                <span className="price">{item.price}</span>
                <button className="order-btn">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Menu;

