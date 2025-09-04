import React, { useState } from 'react';
import './Home.css';
import man from "../../assets/man.png";
import { Typewriter } from 'react-simple-typewriter';
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
function Home() {
  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from(".line1", { y: 80, duration: 1, opacity: 0 })
    tl.from(".line2", { y: 80, duration: 1, opacity: 0 })
    tl.from(".line3", { y: 80, duration: 1, opacity: 0 })
    tl.from(".homedetails button", { y: 100, duration: 1, opacity: 0 })  
    tl.from(".righthome img", { x: 1000, duration: 1, opacity: 0 })
  })
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["WEB DEVELOPER", "REACT DEVELOPER", "APP DEVELOPER"];
  const colors = ["orange", "aqua", "lime"]; // Define colors for each word

  const handleType = (wordIndex) => {
    // Update the current word index to change the color
    setCurrentWordIndex(wordIndex % colors.length);
  };

  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">ADITYA KUMAR</div>
          <div className="line3">
            <span style={{ color: colors[currentWordIndex] }}> {/* Dynamically change color */}
              <Typewriter
                words={words}
                loop={true} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={500}
                onType={handleType} // Update the current word index
              />
            </span>
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
