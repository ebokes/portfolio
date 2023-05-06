import React from "react";
import {
  Container,
  PageHeading,
  PageHeadingContainer,
  Section,
} from "../reuseableComponents/contentStyle";
import {
  CodeIcon,
  Col1,
  Col2,
  LiveIcon,
  Bullet,
  ProjectImgWrapper,
  ProjectWrapper,
  Row,
  Buttons,
} from "./projectStyle";
import projectData from "./projectData";

const Project = () => {
  return (
    <Section id="projects" bgcolor="#183059">
      <Container>
        <ProjectWrapper>
          <PageHeadingContainer>
            <PageHeading data-aos="zoom-out" color="#fff">
              Projects
            </PageHeading>
          </PageHeadingContainer>
          {projectData.map((item) => (
            <Row
              data-aos="zoom-out"
              key={item.id}
              fd={item.id % 2 === 0 && "row-reverse"}
            >
              <Col1 data-aos="fade-right">
                <a target="_blank" rel="noreferrer" href={item.live}>
                  <ProjectImgWrapper>
                    <img src={item.img} alt="project-img" />
                  </ProjectImgWrapper>
                </a>
                <Buttons>
                  <a target="_blank" rel="noreferrer" href={item.code}>
                    <CodeIcon />
                    Code
                  </a>
                  <a target="_blank" rel="noreferrer" href={item.live}>
                    <LiveIcon />
                    Live
                  </a>
                </Buttons>
              </Col1>
              <Col2 data-aos="fade-left">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.intro}</p>
                </div>
                <div>
                  <h4>Features of this project</h4>
                  <ul>
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>
                    {item.stack.map((tech, index) => (
                      <p key={index}>
                        <Bullet />
                        {tech}
                      </p>
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
