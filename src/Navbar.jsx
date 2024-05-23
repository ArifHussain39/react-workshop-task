import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <h1>SpaceX</h1>
        
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/missions">Missions</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
