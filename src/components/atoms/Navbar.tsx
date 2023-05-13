import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <NavLink to="/main">Jokes</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
        <NavLink to="/customJokes">My Jokes</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
