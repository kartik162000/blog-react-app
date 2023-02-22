import React from "react";

import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_content">
        <div className="navbar_brand_name">
          <p>The Artifact</p>
          <p>Culture & Art blog</p>
        </div>
        <div className="navbar_links">
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
