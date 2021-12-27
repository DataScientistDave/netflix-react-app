import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  // Created state called show to handle showing the navbar
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  // Function to change show state
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // Using useEffect to addEventListener to call transitionNavBar and remove the function as well
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    // Clean up
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    // Only renders nav_black if show is true
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt="Netflix Logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Netflix user"
        />
      </div>
    </div>
  );
}

export default Nav;
