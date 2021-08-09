import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Projectcards";
//import Particle from "../Particle";


import chatify from "../../Assets/ChatApp.png";
import TicTacToe from "../../Assets/TicTacToe.png";
import TempApp from "../../Assets/TempApp.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
     {/*  <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatApp"
              description="Personal Chat Room or Workspace to share message with friends build with react.js, Material-UI, and Firebase."
              link="https://github.com/rits008/React-chatApp"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={TempApp}
              isBlog={false}
              title="TempApp"
              description="Basic web Application using ReactJs and OpenWeatherApi ,that allow us to know current temperature."
              link="https://github.com/rits008/TempApp"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="TicTacToe"
              description="Console based TicTacToe game using NodeJS"
              link="https://github.com/rits008/tictactoe"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;