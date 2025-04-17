import React, { use } from 'react'
import './Nav.css'
import {Link} from 'react-scroll'
import { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
function Nav ()  {
  const menu = useRef();
  const mobile = useRef();
  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from("nav h1", { y: -100, duration: 0.7,opacity: 0, })
    tl.from("nav ul li",{y: -100, duration: 0.7,opacity: 0, stagger: 0.3,})
  }) 
   const handleClick = () => {
   mobile.current.classList.toggle("activemobile")
   menu.current.classList.toggle("activeham")
  }
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className='desktopmenu'>
        <Link to="home" smooth={true} activeClass='active' spy={true} duration={500}><li>Home</li></Link>
        <Link to="about" smooth={true} activeClass='active' spy={true}  duration={500}><li>About</li></Link>
        <Link to="projects" smooth={true} activeClass='active' spy={true} duration={500}><li>Projects</li></Link>  
        <Link to="contact" smooth={true} activeClass='active' spy={true}  duration={500}><li>Contact</li></Link>
     
      </ul> 
      <div className="hamburger" onClick={handleClick} ref={menu}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div> 
      <ul className='mobilemenu'  ref={mobile}>
        <Link to="home" smooth={true} activeClass='active' spy={true} duration={500}><li>Home</li></Link>
        <Link to="about" smooth={true} activeClass='active' spy={true}  duration={500}><li>About</li></Link>
        <Link to="projects" smooth={true} activeClass='active' spy={true} duration={500}><li>Projects</li></Link>  
        <Link to="contact" smooth={true} activeClass='active' spy={true}  duration={500}><li>Contact</li></Link>
      </ul>
      </nav>  
  )
}

export default Nav