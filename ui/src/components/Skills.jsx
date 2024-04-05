import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import python from '../assets/img/skills-python.svg';
import sql from '../assets/img/skills-sql.png';
import js from '../assets/img/skills-js.svg';
import html5 from '../assets/img/skills-html5.svg';
import css from '../assets/img/skills-css.svg';
import postgresql from '../assets/img/skills-postgresql.svg';
import pgadmin from '../assets/img/skills-pgadmin.png';
import django from '../assets/img/skills-django.svg';
import fastapi from '../assets/img/skills-fastapi.png';
import react from '../assets/img/skills-react.svg';
import reacthooks from '../assets/img/skills-reacthooks.png';
import microservices from '../assets/img/skills-microservices1.png';
import ddd from '../assets/img/skills-ddd.png';
import message from '../assets/img/skills-message.png';
import event from '../assets/img/skills-event.png';
import "animate.css";

import Carousel from 'react-multi-carousel';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const skillsData = [
    { icon: python, label: 'Python' },
    { icon: sql, label: 'SQL' },
    { icon: js, label: 'JavaScript' },
    { icon: html5, label: 'HTML5' },
    { icon: css, label: 'CSS' },
    { icon: postgresql, label: 'PostgresSQL' },
    { icon: pgadmin, label: 'pgAdmin' },
    { icon: django, label: 'Django 4' },
    { icon: fastapi, label: 'FastAPI' },
    { icon: react, label: 'React' },
    { icon: reacthooks, label: 'React Hooks' },
    { icon: microservices, label: 'Microservices' },
    { icon: ddd, label: 'Domain-driven design' },
    { icon: message, label: 'Message passing' },
    { icon: event, label: 'Event sourcing' },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const [isBrowserCollapsed, setIsBrowserCollapsed] = useState(window.innerWidth <= 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsBrowserCollapsed(window.innerWidth <= 1300);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""}>
                  <div className="skill-bx" id="skills">
                    <h2>Skills</h2>
                    <p>Expertise in diverse programming languages, specializing in both back-end and front-end development. Skilled in crafting efficient system designs for optimal performance in web development.</p>
                    {isBrowserCollapsed ? (
                      <Carousel responsive={responsive} infinite={true} className='carousel'>
                        {skillsData.map((skill, index) => (
                          <div className="item" key={index}>
                            <img src={skill.icon} alt="Image" />
                            <h5>{skill.label}</h5>
                          </div>
                        ))}
                      </Carousel>
                    ) : (
                      <div className="skill-grid">
                        {skillsData.map((skill, index) => (
                          <div className="item" key={index}>
                            <img src={skill.icon} alt="Image" />
                            <h5>{skill.label}</h5>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
