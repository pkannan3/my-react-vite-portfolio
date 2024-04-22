import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1Img1 from "../assets/img/project1-landing.png";
import proj1Img2 from "../assets/img/project1-signup.png";
import proj1Img3 from "../assets/img/project1-trips.png";
import proj1Img4 from "../assets/img/project1-create.png";
import underConstruction from "../assets/img/under-construction.png";
import proj3Img1 from "../assets/img/project3-login.png";
// import proj3Img2 from "../assets/img/project3-signup.png";
import proj3Img2 from "../assets/img/project3-dashboard.png";
import proj3Img3 from "../assets/img/project3-create-task.png";
import proj3Img4 from "../assets/img/project3-project-task.png";
import proj3Img5 from "../assets/img/project3-all-tasks.png";
import proj3Img6 from "../assets/img/project3-upload.png";


import projectBlank from "../assets/img/project-blank.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project3 = [
    {
      title: "Landing Page",
      description: "Travel Planner",
      imgUrl: proj1Img1,
    },
    {
      title: "Signup",
      description: "Create Account",
      imgUrl: proj1Img2,
    },
    {
      title: "Trips",
      description: "Trips Gallery",
      imgUrl: proj1Img3,
    },
    {
      title: "Create Trip",
      description: "Integrated API",
      imgUrl: proj1Img4,
    },
    {
      title: "Budget",
      description: "Responsive Expense Graph",
      imgUrl: underConstruction,
    },
    {
      title: "Itinerary",
      description: "Sort by date",
      imgUrl: underConstruction,
    },
  ];

  const project2 = [
    {
      title: "Landing Page",
      description: "Clothing Inventory",
      imgUrl: underConstruction,
    },
    {
      title: "Shoes",
      description: "Trips Gallery",
      imgUrl: underConstruction,
    },
    {
      title: "Hats",
      description: "Integrated API",
      imgUrl: underConstruction,
    },
    {
      title: "Hats",
      description: "GET hat(s), Create hat(s), Update and Delete hat(s)",
      imgUrl: underConstruction,
    },
    {
      title: "Shoes",
      description: "GET bin(s), Create bin(s), Update and Delete bin(s)",
      imgUrl: underConstruction,
    },
    {
      title: "",
      description: "",
      imgUrl: underConstruction,
    },
  ];

  const project1 = [
    {
      title: "Landing Page",
      description: "Login/Signup",
      imgUrl: proj3Img1,
    },
    {
      title: "Dashboard",
      description: "GET, PUT, POST, DELETE project(s)",
      imgUrl: proj3Img2,
    },
    {
      title: "Projects",
      description: "GET, PUT, POST, DELETE project(s)",
      imgUrl: proj3Img4,
    },
    {
      title: "Tasks",
      description: "GET, PUT, POST, DELETE tasks(s)",
      imgUrl: proj3Img3,
    },
    {
      title: "All Tasks",
      description: "Assign project(s)/task(s) to dept/team members",
      imgUrl: proj3Img5,
    },
    {
      title: "Upload Documents",
      description: "Attach files to tasks/project",
      imgUrl: proj3Img6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
                {({ isVisible }) =>
                <div>
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
                  <Nav.Link eventKey="third">TaskTracker</Nav.Link>
                </Nav.Item>
              </Nav>
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
