// import React from 'react' - no longer needed with React17
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({click}) => {
  return (
    <div className="navbar">
      {/* Logo Here */}
      <div className="navbar_logo">
        <h2>Your Logo Here</h2>
      </div>

      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
