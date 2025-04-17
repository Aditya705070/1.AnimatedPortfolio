import React from 'react';
import './Contact.css';
import con from "../../assets/contact.png";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    // Ensure the animation targets valid elements
    gsap.from(".leftcontact img", {
      x: -100, // Move from -100px on the x-axis
      duration: 1, // Animation duration
      opacity: 0, // Start with opacity 0
      scrollTrigger: {
        trigger: ".leftcontact img", // Element that triggers the animation
        start: "top 80%", // Start when the top of the element is 80% down the viewport
        end: "top 20%", // End when the top of the element is 20% down the viewport
        scrub: true, // Smooth scrubbing effect

      },
    });
    gsap.from("form", {
      x: 100, // Move from -100px on the x-axis
      duration: 1, // Animation duration
      opacity: 0, // Start with opacity 0
      scrollTrigger: {
        trigger: "form", // Changed trigger to the form element
        start: "top 80%", // Start when the top of the element is 80% down the viewport
        end: "top 20%", // End when the top of the element is 20% down the viewport
        scrub: true, // Smooth scrubbing effect
     
      },
    });
  });

  return (
    <>
      <div id="contact">
        <div className="leftcontact">
          <img src={con} alt="Contact" />
        </div>
        <div className="rightcontact">
          <form action="https://formspree.io/f/xkgjarlj" method="POST">
            <input name="Username" type="text" placeholder="Name" />
            <input name="Email" type="email" placeholder="Email" />
            <input name="Mobile No" type="tel" placeholder="Enter your no..." />
            <textarea name="Message" id="textarea" placeholder="Your message..."></textarea>
            <input type="submit" value="Submit" id="btn" />
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Aditya Kumar. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> {/* GitHub icon */}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;