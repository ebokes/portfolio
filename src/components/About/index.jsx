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
              {/* <p>
                I am gifted at translating basic client requirements into
                technical development plans. I communicate productively with
                both technical and non-technical personnel and clients.
              </p>
              <p>
                I am proficient in React, Sass, Styled-components to design any
                template within a specified timeline.
              </p>
              <p>I am an enthusiastic learner</p> */}
              <p>
                I'm a success-driven and determined Frontend developer. I have
                experience using HTML, CSS, Sass, TailwindCSS,
                styled-components, javascript (ES6+) and Reactjs to build
                accessible component-based web pages and systems. I am a
                passionate person willing to learn more technologies to become a
                better developer, I'm determined and result orietend.
              </p>
              <p>
                I have achieved a good understanding of relational databases, as
                well as solid computer science foundations such as complex
                algorithms and code challenge type problem solving
              </p>
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
