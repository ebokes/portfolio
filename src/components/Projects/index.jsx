import React from "react";
import {
  Container,
  PageHeading,
  Section,
} from "../reuseableComponents/contentStyle";
import {
  CodeIcon,
  Col1,
  Col2,
  LiveIcon,
  Overlay,
  ProjectImgWrapper,
  ProjectWrapper,
  Row,
} from "./projectStyle";
import projectData from "./projectData";

const Project = () => {
  return (
    <Section id="projects" bgcolor="#183059">
      <Container>
        <ProjectWrapper>
          <PageHeading color="#fff">Projects</PageHeading>
          {projectData.map((item) => (
            <Row key={item.id} fd={item.id % 2 === 0 && "row-reverse"}>
              <Col1>
                <ProjectImgWrapper>
                  <img src={item.img} alt="" />
                  <Overlay>
                    <span>
                      <a href={item.code}>
                        <CodeIcon />
                        Code
                      </a>
                      <a href={item.live}>
                        <LiveIcon />
                        Live
                      </a>
                    </span>
                  </Overlay>
                </ProjectImgWrapper>
              </Col1>
              <Col2>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div>
                  <h4>Challenge this project solves</h4>
                  <p>{item.text1}</p>
                </div>
                <div>
                  <h4>Tech stack</h4>
                  <span>
                    {item.stack.map((tech, index) => (
                      <p key={index}>{tech}</p>
                    ))}
                  </span>
                </div>
              </Col2>
            </Row>
          ))}
        </ProjectWrapper>
      </Container>
    </Section>
  );
};

export default Project;
