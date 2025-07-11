import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
   
    <header className="navbar">
      <div className="logo">
        <Link to="/"><img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/luxury-hotel-logo-design-template-ac37aa5c02927f6720bc68c71247b69c_screen.jpg?ts=1660122253"
          alt="logo"
        /></Link>
      </div>

      
      <button 
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar