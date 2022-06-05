import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiHtml5,
} from "react-icons/di";
import {
  SiGithub,
  SiFirebase,
  SiBootstrap,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiCss3,
} from "react-icons/si";


function Techstack() {
  return (
    
    <Container>
  
    <h1 className="project-heading">
          Professional <strong className="orange">Skillset </strong>
        </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} id="skills">
    <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 size="70px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 size="60px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size="70px"/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size="70px"/>
      </Col>
      
     
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap size="70px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery size="70px"/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size="70px"/>
      </Col>
      
    </Row>
    <h1 className="project-heading">
          <strong className="orange">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size="50px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <  SiGithub  size="60px"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit size="80px"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase size="60px"/>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman size="60px"/>
      </Col>
      
    </Row>
    </Container>
  
  );
}

export default Techstack;