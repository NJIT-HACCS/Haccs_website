import { Link } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => {
  return (
    <nav className="bullets">
    
    <p className="haccs"><Link to="/">NJIT HACCS</Link></p>
      
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
        
        {/*
        <li>
          <Link to="/GetInvolved">Get Involved</Link>
        </li>
  */}
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>

        <li>
          <Link to="/sponsors">Sponsors</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
