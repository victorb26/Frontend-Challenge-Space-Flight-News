import React from "react";
import banner from "../../assets/rocket.gif";
import "../Header/header.css";

function Logo() {
  return (
    <>
    <div className="group">
      <h1>SPACE FLIGHT NEWS</h1>
      <div className="container_banner">
        <img src={banner} />
      </div>
      </div>

      <hr className="line" />
    </>
  );
}

export default Logo;
