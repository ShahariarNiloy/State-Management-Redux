import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link mx-4">
        Home
      </Link>
      <Link to="/counter" className="nav-link mx-4">
        Counter
      </Link>
      <Link to="/crud" className="nav-link">
        CRUD
      </Link>
    </nav>
  );
};

export default Navbar;
