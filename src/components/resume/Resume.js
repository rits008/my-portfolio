import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./Resumecontent";
import pdf from "../../Assets/RitikRajpoot.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  

  

  return (
    <Container fluid className="resume-section">
  
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech(CSE) [Indian Institute of Information Technology Vadodara, India] "
              date="2019 - Present"
              content={[`CGPA: 7.24  (Till 4th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Vinayak Academy Inter College , Orai]"
              date="2016 - 2018"
              content={["Precentage: 79.4%"]}
            />
            <Resumecontent
              title="10TH BOARD [Vinayak Academy Inter College , Orai] "
              date="2006 - 2016"
              content={["Precentage: 87.8%"]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
           
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Solved more than 300 DSA questions on various platforms`,
                `3 star Coder at Codechef `,
                "June-2021 Internshala Student Partner",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;