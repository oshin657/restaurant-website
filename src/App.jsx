import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {}
      <Routes>
        <Route path="/" element={<Home />} /> {}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  )
}

export default App