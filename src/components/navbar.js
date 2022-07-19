// import logo from '../logo.png';
// import {Link } from 'react-router-dom';

// function Navbar() {

//     return (
//         <nav className="navbar">
//              <a href="/"><img className="logo" src={logo} alt="" /></a>

//              <ul className="navlist">
//                 <li> <Link to="/services">Services</Link> </li>
//                 <li> <Link to="/practices">Practices</Link> </li>
//                <li> <Link to="/about">About Us</Link> </li>
//             </ul>
//             <a href="/call" className="callbutton1">Schedule a call</a>
//         </nav>
//     )
// }

// export default Navbar;
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div>
        <a href="/">
          <img className="logo" src={logo} alt="" />
        </a>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/services"  className="nav-links">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/practices"  className="nav-links">Practices</Link>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <Link to="/about"  className="nav-links">About Us</Link>{" "}
        </li>
        <li className="nav-item">
        <a href="/call" className="callbutton1">
          Schedule a call
        </a>
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Navbar;