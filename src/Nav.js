import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  // Created state called show to handle showing the navbar
  const [show, handleShow] = useState(false);

  // Function to change show state
  const transitioNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // Using useEffect to addEventListener to call transitionNavBar and remove the function as well
  useEffect(() => {
    window.addEventListener("scroll", transitioNavBar);
    // Clean up
    return () => window.removeEventListener("scroll", transitioNavBar);
  }, []);

  return (
    // Only renders nav_black if show is true
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Netflix user"
        />
      </div>
    </div>
  );
}

export default Nav;
