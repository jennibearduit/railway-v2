import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation-bar.css';



const NavigationBar = () => (
  <nav className="navbar">
    <NavLink exact className="navbar__link" to="/">
      Home
    </NavLink>
    <NavLink className="navbar__link" to="/availability">
      Availability
    </NavLink>
    <NavLink className="navbar__link" to="/reservationlist">
      Reservation List
    </NavLink>
  </nav>
);

export default NavigationBar;