import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1-landing.png";
import projImg2 from "../assets/img/project1-signup.png";
import projImg3 from "../assets/img/project1-trips.png";
import projImg4 from "../assets/img/project1-create.png";
// import colorSharp1 from "../assets/img/color-sharp.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = [
    {
      title: "Landing Page",
      description: "Travel Planner",
      imgUrl: projImg1,
    },
    {
      title: "Signup",
      description: "Create Account",
      imgUrl: projImg2,
    },
    {
      title: "Trips",
      description: "Trips Gallery",
      imgUrl: projImg3,
    },
    {
      title: "Create Trip",
      description: "Integrated API",
      imgUrl: projImg4,
    },
    {
      title: "Budget",
      description: "Responsive Expense Graph",
      imgUrl: projImg1,
    },
    {
      title: "Itinerary",
      description: "Sort by date",
      imgUrl: projImg1,
    },
  ];

  const project2 = [
    {
      title: "Landing Page",
      description: "Travel Planner",
      imgUrl: projImg1,
    },
    {
      title: "Trips",
      description: "Trips Gallery",
      imgUrl: projImg1,
    },
    {
      title: "Map",
      description: "Integrated API",
      imgUrl: projImg1,
    },
    {
      title: "Budget",
      description: "Responsive Expense Graph",
      imgUrl: projImg1,
    },
    {
      title: "Itinerary",
      description: "Sort by date",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  const project3 = [
    {
      title: "Landing Page",
      description: "Travel Planner",
      imgUrl: projImg1,
    },
    {
      title: "Trips",
      description: "Trips Gallery",
      imgUrl: projImg1,
    },
    {
      title: "Map",
      description: "Integrated API",
      imgUrl: projImg1,
    },
    {
      title: "Budget",
      description: "Responsive Expense Graph",
      imgUrl: projImg1,
    },
    {
      title: "Itinerary",
      description: "Sort by date",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce": ""}>
                  <h2>Projects</h2>
                  <p>Explore my diverse portfolio showcasing expertise in Python, JS, React, Django, FastAPI, and PostgresSQL. These projects exemplify efficient solutions, spanning backend and frontend development.</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">GuideMe</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Wardrobify</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">OrganizeMe</Nav.Link>
                </Nav.Item>
              </Nav>
              {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      project1.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      project2.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      project3.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp1}></img> */}
    </section>
  )
}
