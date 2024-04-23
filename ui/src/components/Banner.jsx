import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import headerImg from "../assets/img/plant.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  // 'loopNum' represents the current loop number in the animation, initialized to 0
  const [loopNum, setLoopNum] = useState(0);

  // 'isDeleting' is a boolean indicating whether characters are being deleted in the animation, initialized to false
  const [isDeleting, setIsDeleting] = useState(false);

  // 'text' represents the current text displayed in the animation, initialized as an empty string
  const [text, setText] = useState('');

  // 'delta' is a variable controlling the interval between animation updates,
  // initialized to a random value between 200 and 300 milliseconds
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // 'index' represents the current index in the animation, initialized to 1
  const [index, setIndex] = useState(1);

  // Array of strings representing different roles
  const toRotate = ["Backend Developer", "Web Designer", "Full-Stack Engineer"];

  // Time period for the text rotation animation
  const period = 2000;

  // State variable to track Navbar collapse state
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  // Effect to update navbarCollapsed state based on window width
  useEffect(() => {
    const updateNavbarCollapse = () => {
      setNavbarCollapsed(window.innerWidth <= 991); // Adjust the breakpoint as needed
    };

    // Attach event listener to window resize
    window.addEventListener("resize", updateNavbarCollapse);

    // Initial update
    updateNavbarCollapse();

    // Cleanup: Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateNavbarCollapse);
    };
  }, []);

  // Use the 'useEffect' hook to perform side effects in the component
  useEffect(() => {
    // Set up a ticker interval for the text rotation
    let ticker = setInterval(() => {
      // Call the 'tick' function on each interval
      tick();
    }, delta);

    // Cleanup: Clear the interval when the component unmounts or when 'text' changes
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  // Define the 'tick' function responsible for the text rotation animation
  const tick = () => {
    // Calculate the current index in the 'toRotate' array
    let i = loopNum % toRotate.length;
    // Get the full text for the current role
    let fullText = toRotate[i];
    // Update the displayed text based on whether it is deleting or adding characters
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    // Update the state with the new text
    setText(updatedText);

    // Adjust the delta (interval) based on whether characters are being deleted
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    // Check if the animation should switch to deleting characters
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      // Check if the animation should switch to adding characters
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      // Continue updating the index if neither adding nor deleting is complete
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Return a section element (actual content is missing in the provided code)
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        {navbarCollapsed ? (
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <p className='mobile-message'>Mobile friendly site in progress</p>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Priyanka`}
                    <br />
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  As a passionate and dedicated full-stack engineer, I bring a wealth of technical expertise honed through rigorous boot camp training and hands-on project experience. Proficient in a versatile array of programming languages including Python, JavaScript, and SQL, I specialize in crafting dynamic and responsive applications from front to back end.
                  </p>
                  <Nav.Link href="#connect">
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </Nav.Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
        ) : (
          <>
            <Col xs={12} s={10} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi! I'm Priyanka`}
                      <br />
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                    As a passionate and dedicated full-stack engineer, I bring a wealth of technical expertise honed through rigorous boot camp training and hands-on project experience. Proficient in a versatile array of programming languages including Python, JavaScript, and SQL, I specialize in crafting dynamic and responsive applications from front to back end.
                    </p>
                    <Nav.Link href="#connect">
                      <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                    </Nav.Link>
                  </div>
                )}
              </TrackVisibility>
            </Col>

            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div>
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </>
        )}
        </Row>
      </Container>
    </section>
  );
};
