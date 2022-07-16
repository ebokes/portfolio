import React from "react";
import { Container, PageHeading } from "../reuseableComponents/contentStyle";
import avatar from "../../images/development-web-development-svgrepo-com.svg";
import resume from "../../images/Chibuokem Egbuchulam Resume.pdf";
import {
  AboutSection,
  AboutWrapper,
  Cta,
  Left,
  ProjectBtn,
  ResumeBtn,
  Right,
  Text,
} from "./aboutStyle";

const About = () => {
  return (
    <AboutSection id="contact">
      <Container>
        <PageHeading color="#fff">About Me</PageHeading>
        <AboutWrapper>
          <Left>
            <Text>
              <p>
                I am gifted at translating basic client requirements into
                technical development plans. I communicate productively with
                both technical and non-technical personnel and clients.
              </p>
              <p>
                I am proficient in React, Sass, Styled-components to design any
                template within a specified timeline.
              </p>
              <p>I am an enthusiastic learner</p>
            </Text>
            <Cta>
              <ProjectBtn href="#projects">Projects</ProjectBtn>
              <ResumeBtn href={resume} target="_blank">
                Resume
              </ResumeBtn>
            </Cta>
          </Left>
          <Right width="50%">
            <img src={avatar} alt="avatar" />
          </Right>
        </AboutWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
