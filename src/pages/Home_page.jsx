import React, { lazy } from "react";

const Navbar_component = lazy(() =>
  import("../components/header_components/Navbar_component")
);

const Hero_component = lazy(() =>
  import("../components/home_components/Hero_component")
);

function Home_page() {
  return (
    <>
      <div className="Home_page">
        <Hero_component />
      </div>
    </>
  );
}

export default Home_page;
