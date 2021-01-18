import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";


function BabyHog(hog) {
  const [ weight, setWeight] = useState(0)
  
  function handleChangeWeight(e) {
    if (e.target.name === "+") {
      return setWeight(weight + 1)
    } else return setWeight(weight - 1)

  }

  const eyeColorMapper = {
    blue: BlueBaby,
    sun: SunBaby,
    glowing: GlowingBaby
  }

  return (
    <li className="hogbabies">
      <h1>{hog.name}</h1>
      <h3>{weight} Lbs</h3>
      <h3>{hog.hobby}</h3>
      <h4>{hog.eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        
        <img
          src={eyeColorMapper[hog.eyeColor]}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
