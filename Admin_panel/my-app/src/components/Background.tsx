import React from "react";
import shoe1 from "../images/shoe1.jpg"
import shoe2 from "../images/shoe2.jpg"
import shoe3 from "../images/shoe3.jpg"

function Background() {
    return (
        <div className="background">
        <div className="background--block__back"></div>
        <div className="background--an background--image__first"><img  src={shoe1} alt="shoe" /></div>
        <div className="background--an background--image__second"><img  src={shoe2} alt="shoe" /></div>
        <div className="background--an background--image__third"><img  src={shoe3} alt="shoe"/></div>
        <div className="background--an background--block">Lorem ipsum, dolor sit amet <br/>consectetur adipisicing elit. <br/>Eveniet, atque.</div>
        
        </div>
    )
  }
  
  export default Background;
  