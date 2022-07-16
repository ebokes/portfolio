import React from "react";
import {
  Container,
  PageHeading,
  Section,
} from "../reuseableComponents/contentStyle";
import {
  ButtonGroup,
  CodeIcon,
  ImgWrapper,
  LiveIcon,
  Project1,
  ProjectWrapper,
  Text,
} from "./projectStyle";
import projectData from "./projectData";

const Project = () => {
  return (
    <Section>
      <Container>
        <ProjectWrapper>
          <PageHeading>Projects</PageHeading>
          <ImgWrapper>
            {projectData.map((item) => (
              <Project1 key={item.id} pic={item.img}>
                <Text>
                  {/* <div> */}
                  <h3>{item.title}</h3>
                  <h4>Challenge this project solves</h4>
                  <p>{item.text}</p>
                  <h1>0{item.id}</h1>
                  <ButtonGroup>
                    <a href={item.code}>
                      <CodeIcon />
                      Code
                    </a>
                    <a href={item.live}>
                      <LiveIcon />
                      Live
                    </a>
                  </ButtonGroup>
                  {/* </div> */}
                </Text>
              </Project1>
            ))}
          </ImgWrapper>
        </ProjectWrapper>
      </Container>
    </Section>
  );
};

export default Project;
