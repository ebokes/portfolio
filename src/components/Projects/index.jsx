import React from "react";
import {
  Container,
  PageHeading,
  Section,
} from "../reuseableComponents/contentStyle";
import {
  ButtonGroup,
  CodeIcon,
  Col1,
  Col2,
  ImgWrapper,
  LiveIcon,
  Overlay,
  ProjectImgWrapper,
  ProjectWrapper,
  Row,
  Text,
} from "./projectStyle";
import projectData from "./projectData";

const Project = () => {
  return (
    <Section bgcolor="#183059">
      <Container>
        <ProjectWrapper>
          <PageHeading color="#fff">Projects</PageHeading>
          {/* <ImgWrapper> */}
          {projectData.map((item) => (
            <Row
              key={item.id}
              style={{ flexDirection: item.id % 2 === 0 && "row-reverse" }}
            >
              <Col1>
                <ProjectImgWrapper>
                  <img src={item.img} alt="" />
                  <Overlay>
                    <h1>0{item.id}</h1>
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
                  <h4>Features</h4>
                  <p>{item.text2}</p>
                </div>
                <span>
                  {item.stack.map((tech) => (
                    <p>{tech}</p>
                  ))}
                </span>
              </Col2>
            </Row>
          ))}
          {/* </ImgWrapper> */}
        </ProjectWrapper>
      </Container>
    </Section>
  );
};

export default Project;
