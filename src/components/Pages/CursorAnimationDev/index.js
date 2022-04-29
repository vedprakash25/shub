import React, { useEffect, useRef, useState } from "react";
import useMightyMouse from "react-hook-mighty-mouse";
import Nav from "../../Molecule/Nav";

import "./styles.css";

const CursorAnimationDev = () => {

  let cusRef = useRef(null)

  useEffect(() => {
    var balls = document.getElementsByClassName("ball");

    document.onmousemove = function (e) {
      const { clientX, clientY } = e

      var x = clientX * 100 / window.innerWidth + "%";
      var y = clientY * 100 / window.innerHeight + "%";

      console.log(x,y)
      for (var i = 0; i < 10; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = `translate(-${x},-${y})`;
      }
    }


    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e

      const mouseX = clientX - cusRef.current.clientWidth / 2;
      const mouseY = clientY - cusRef.current.clientHeight / 2;

      cusRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;

  })
  },[])


  return (
    <>
    <Nav/>
      <div className="eyes-follow-tired" >

        <div className="eyes">
          <div className="eye">
            <div className="ball"></div>
          </div>
          <div className="eye">
            <div className="ball"></div>
          </div>
         
        </div>


      </div>
      <div className="header">
        <input
          type="range"
          min="0.0"
          max="2.0"
          step="0.001"
        />
      </div>
          <div className="">
            <div className="cursor" id="cursor" ref={cusRef}></div>
          </div>
    </>
  );
}
export default CursorAnimation
