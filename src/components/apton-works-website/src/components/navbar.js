import logo from '../logo.png';
import {Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar">
             <a href="/"><img className="logo" src={logo} alt="" /></a>

             <ul className="navlist">
                <li> <Link to="/services">Services</Link> </li>
                <li> <Link to="/practices">Practices</Link> </li>
               <li> <Link to="/about">About Us</Link> </li>
            </ul>
            <a href="/call" className="callbutton1">Schedule a call</a>
        </nav>
    )
}

export default Navbar;