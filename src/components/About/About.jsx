import React, { use } from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";
import app from "../../assets/app.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100, // Move from -100px on the x-axis
      duration: 1, // Animation duration
      opacity: 0, // Start with opacity 0
      stagger: 1, 
      scrollTrigger: {
        trigger: ".circle", // Element that triggers the animation
        start: "top 80%", // Start when the top of the element is 80% down the viewport
        end: "top 20%", // End when the top of the element is 20% down the viewport
        scrub: true, // Smooth scrubbing effect
      
      },
    });
      gsap.from(".line", {
        x: -100, // Move from -100px on the x-axis
        duration: 1, // Animation duration
        opacity: 0, // Start with opacity 0
        stagger: 1, // Stagger the animation for each line
        scrollTrigger: {
          trigger: ".line", // Element that triggers the animation
          start: "top 80%", // Start when the top of the element is 80% down the viewport
          end: "top 20%", // End when the top of the element is 20% down the viewport
          scrub: true, // Smooth scrubbing effect
         
        },
      });
      gsap.from(".aboutdetails h1", {
        x: -100, // Move from -100px on the x-axis
        duration: 1, // Animation duration
        opacity: 0, // Start with opacity 0
        stagger: 1, // Stagger the animation for each line
        scrollTrigger: {
          trigger: ".aboutdetails h1", // Element that triggers the animation
          start: "top 80%", // Start when the top of the element is 80% down the viewport
          end: "top 20%", // End when the top of the element is 20% down the viewport
          scrub: true, // Smooth scrubbing effect
          
        },
      });
      gsap.from(".aboutdetails ul", {
        y: 100, // Move from -100px on the x-axis
        duration: 1, // Animation duration
        opacity: 0, // Start with opacity 0
        stagger: 1, // Stagger the animation for each line
        scrollTrigger: {
          trigger: ".aboutdetails ul", // Element that triggers the animation
          start: "top 80%", // Start when the top of the element is 80% down the viewport
          end: "top 20%", // End when the top of the element is 20% down the viewport
          scrub: true, // Smooth scrubbing effect
        
        },
      });
      gsap.from(".rightabout", {
        x: 100, // Move from -100px on the x-axis
        duration: 1, // Animation duration
        opacity: 0, // Start with opacity 0
        stagger: 1, // Stagger the animation for each line
        scrollTrigger: {
          trigger: ".rightabout", // Element that triggers the animation
          start: "top 80%", // Start when the top of the element is 80% down the viewport
          end: "top 20%", // End when the top of the element is 20% down the viewport
          scrub: true, // Smooth scrubbing effect
      
        },
      });
  });
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="perssonalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : ADITYA KUMAR
              </li>
              <li>
                <span>AGE</span> : 25 YEARS
              </li>
              <li>
                <span>LOCATION</span> : PATNA
              </li>
              <li>
                <span>LANGUAGES</span> : HINDI,ENGLISH
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>EDUCATION</h1>
            <ul>
              <li>
                <span>DEGREE</span> : BSC-IT
              </li>
              <li>
                <span>BRANCH</span> : INFORMATION TECHNOLOGY
              </li>
              <li>
                <span>PERCENT</span> : 70%
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN STACK DEVELOPER</li>
              <li>APP DEVELOPER</li>
              <li>JAVA</li>
              <li>DSA</li>
            </ul>
          </div>
          <div className="resume">
            <h1>Resume</h1>
            <button>
              <a
                href="https://docs.google.com/document/d/1TQTUvynit7oqDbKegGSVaW3vq-kYxGGn/edit?usp=sharing&ouid=107387585227980985808&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="JAVA" image={java} />
        <Card title="DSA" image={dsa} />
        <Card title="APP DEVELOPER" image={app} />
      </div>
    </div>
  );
}

export default About;
