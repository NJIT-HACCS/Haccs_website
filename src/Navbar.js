import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="bullets">
      <img class="haccs_logo" src="Haccs_logo.png" alt="HACCS Logo" />
        <ul>
            <li> 
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/Events">Events</Link>
            </li>

            <li>
              <Link to="/Eboard">Meet Our E-board</Link>
            </li>  
    
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
    </nav>
  );
};

export default NavBar;
