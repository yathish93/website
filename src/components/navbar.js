import logo from "../logo.png";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import {  MenuItem, ControlledMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const ref = useRef(null);
  const [isOpen, setOpen] = useState();
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
          <Link to="/practices" className="nav-links">
            Practices
          </Link>{" "}
        </li>
        <li className="nav-item">
         
          <div ref={ref} to="/services" className="nav-links services-button" onMouseEnter={() => setOpen(true)}>
            Services
          </div>

          <ControlledMenu
            state={isOpen ? "open" : "closed"}
            anchorRef={ref}
            onMouseLeave={() => setOpen(false)}
            onClose={() => setOpen(false)}
            offsetY={15}
          >
            <MenuItem><Link to="/services" className="Blockchain-and-Web3-menu-item">Blockchain and Web3 </Link></MenuItem>
            <MenuItem>Data Analytics </MenuItem>
           
          </ControlledMenu>
         
        </li>

        <li className="nav-item">
          {" "}
          <Link to="/about" className="nav-links">
            About Us
          </Link>{" "}
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
