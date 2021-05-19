import React from "react";
import "./Home.css";

import background from "./images/bags/homepage.jpg";

export default function Home() {
    return (
      <div
        class="home"
        style={{

      
      }}>
        <div className="homepage_image" style={{ backgroundImage: `url($background)`,
      backgroundSize: `contain`,
      maxWidth: `100%`,
      backgroundRepeat: 'no-repeat'}}>
          <img src={background}></img>
        </div>
        <button >Shop Now</button>``


      </div>

    );
  }


  /*

          <button >Shop Now</button>
          */