import React from "react";
import "./Header.module.css";
import banner from "../../assets/space-news.png";

function Logo() {
    return(
        <div className="group">
        <section className="container_meio">
         <div className='container_banner'>
         <img src={banner}/>
            </div>
      </section>
      <hr className='line'/>
      </div>
      
    )
}

export default Logo;