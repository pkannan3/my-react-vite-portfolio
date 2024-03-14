import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1-landing.jpeg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
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

  const project2 = [
    {
      title: "Landing Page",
      description: "Project/Task Tracker",
      imgUrl: projImg1,
    },
    {
      title: "Dashboard",
      description: "Responsive Graph",
      imgUrl: projImg2,
    },
    {
      title: "Map",
      description: "Integrated API",
      imgUrl: projImg3,
    },
    {
      title: "Budget",
      description: "Responsive Expense Graph",
      imgUrl: projImg1,
    },
    {
      title: "Itinerary",
      description: "Sort by date",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
      imgUrl: projImg2,
    },
    {
      title: "Map",
      description: "Integrated API",
      imgUrl: projImg3,
    },
    {
      title: "Budget",
      description: "Responsive Expense Graph",
      imgUrl: projImg1,
    },
    {
      title: "Itinerary",
      description: "Sort by date",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
                  <Nav.Link eventKey="second">OrganizeMe</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Wardrobify</Nav.Link>
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
