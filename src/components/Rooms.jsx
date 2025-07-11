import React from 'react'
import "./Rooms.css";

function Rooms() {
  const rooms = [
    {
      title: "Deluxe Double Room",
      description: "Comfort, Elegance, and Convenience",
      image: "https://www.pearlhotelnyc.com/hs-fs/hubfs/2.jpg?width=992&height=661&name=2.jpg"
    },
    {
      title: "Premium Suite",
      description: "Luxury and Spacious Living",
      image: "https://img.grandlisboa.com/assets/gl-presidential-suite-highlight-dt.jpg"
    },
    {
      title: "Executive Room",
      description: "Business Class Comfort",
      image: "https://www.admiralhotelmanila.com/wp-content/uploads/sites/224/2021/11/Executive-Suite.jpg"
    }
  ];

  return (
    <>
    <div className="container">
      <h2 className='room-title'>Types of Rooms</h2>
    <div className="rooms-container">
      {rooms.map((room, index) => (
        <div className="room-card" key={index}>
          <div className="room-image">
            <img src={room.image} alt={room.title} />
          </div>
          <div className="room-content">
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <button className="book-button">View Details</button>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Rooms
