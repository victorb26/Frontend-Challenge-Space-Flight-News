import React from "react";
import banner from "../../assets/space-news.png";

function Logo() {
  return (
    <div className="group">
      <div className="container_banner">
        <img src={banner} />
      </div>

      <hr className="line" />
    </div>
  );
}

export default Logo;
