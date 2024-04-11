import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo-flower3.png';
import logo2 from '../assets/img/logo-flower4.png';
// import navIcon1 from '../assets/img/nav-icon1.svg';
import navIconLinkedIn1 from '../assets/img/nav-icon-linkedIn1.svg';
import navIconLinkedIn2 from '../assets/img/nav-icon-linkedIn2.svg';
import navIconGitHub1 from '../assets/img/nav-icon-github1.svg';
import navIconGitHub2 from '../assets/img/nav-icon-github2.svg';
import navIconGitLab1 from '../assets/img/nav-icon-gitlab1.svg';
import navIconGitLab2 from '../assets/img/nav-icon-gitlab2.svg';
import resume from '../assets/img/resume.pdf';

//NavBar functional component
export const NavBar = () => {
  //'activeLink' is a state variable. Tracks the current active link.
  //'setActiveLink' is a setter function. Used to update the 'activeLink' state variable.
  const [activeLink, setActiveLink] = useState('home');

  //'scrolled' is a state variable. Tracks wheather user has scrolled.
  //'setScrolled' is a setter function. Used to update the 'scrolled' state variable.
  const [scrolled, setScrolled] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  //Handles side effects (aka anything beyond rendering UI)
  useEffect(() => {
    //Function executes when mounting or when dependencies change (second array)
    const onScroll = () => {
      //Checks if vertical scroll position is greater than 50px
      if (window.scrollY > 50) {
        //If greater than 50px, set 'scrolled' to true
        setScrolled(true);
      } else {
        //Else set 'scrolled' to false
        setScrolled(false);
      }
    }

    //Attach event listener to action scroll, awaits 'scroll' event
    window.addEventListener("scroll", onScroll);

    //Remove event listener once component is unmounted
    return () => window.removeEventListener("scroll", onScroll);

    //[] would hold the dependency array
    //Since it's empty the effect will only run once after intial render
  }, [])

  //Track active link using user interaction
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setDropdownVisible(false);
  }


  return (
    // Navbar component with expanded functionality and dynamic styling based on the 'scrolled' state
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={scrolled ? logo2 : logo} alt="logo" className="logo" />
        {/* <img src={logo} alt="greenFlowerLogo" className='logo' /> */}
        </Navbar.Brand>
        {/* Toggle (Pancake) for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setDropdownVisible(!dropdownVisible)} >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        {/* Components to collapse on smaller screens */}
        <Navbar.Collapse id="basic-navbar-nav" className={dropdownVisible ? 'show' : ''}>
          <Nav className="me-auto">
            {/* Home, Skills, Projects links with conditional styling based on whether it's the active link */}
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href={resume} target="_blank" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}>Resume</Nav.Link>
          </Nav>
          {/* Additional content aligned to the right of the Navbar */}
          <span className='navbar-text'>
            <div className='social-icon linkedIn'>
              <a href="https://www.linkedin.com/in/priyanka-dfw/" target='_blank'> <img src={scrolled ? navIconLinkedIn2 : navIconLinkedIn1} alt=""/> </a>
            </div>
            <div className='social-icon github'>
              <a href="https://www.github.com/pkannan3" target='_blank'> <img src={scrolled ? navIconGitHub2 : navIconGitHub1} alt=""/> </a>
            </div>
            <div className='social-icon gitlab'>
              <a href="https://gitlab.com/pkannan3" target='_blank'> <img src={scrolled ? navIconGitLab2 : navIconGitLab1} alt=""/> </a>
            </div>
            <Nav.Link href="#connect">
              <button className={`vvd ${scrolled ? 'scrolled-button' : ''}`}>
                <span>Let's Connect</span>
              </button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
