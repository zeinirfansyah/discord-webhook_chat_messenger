import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar_component() {
  // change navbar background after scrolling
  function navbarScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      navbar.style.backgroundColor = "#fff";
      navbar.style.transition = "0.5s";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.color = "var(--color1)";
    }
  }
  // -----------------------------------------

  useEffect(() => {
    // change navbar background after scrolling
    window.onscroll = function () {
      navbarScroll();
    };
    // -----------------------------------------
  }, []);

  return (
    <>
      <div className="Navbar_component">
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-light fixed-top w-100 mx-auto p-lg-4 "
        >
          <div className="container">
            <a className="navbar-brand fw-bold me-5" href="/#hero">
              PIXIHIVE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto me-0 text-end">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/SendMessage">
                  Announcement
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar_component;
