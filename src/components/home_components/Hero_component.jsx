import React from "react";
import { Link } from "react-router-dom";

function Hero_component() {
  return (
    <>
      <div className="Hero_component">
        <div className="container">
          <h1>Welcome to PixiHive Dashboard</h1>
          <Link className="btn btn-primary px-5 py-3 mt-3" to="/SendMessage">
            Announcement
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero_component;
