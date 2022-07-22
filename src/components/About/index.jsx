import React from "react";
import {
  Container,
  PageHeading,
  PageHeadingContainer,
} from "../reuseableComponents/contentStyle";
import avatar from "../../images/development-web-development-svgrepo-com.svg";
import resume from "../../images/Chibuokem Egbuchulam Resume.pdf";
import {
  AboutSection,
  AboutWrapper,
  Cta,
  Left,
  ResumeBtn,
  Right,
  Text,
} from "./aboutStyle";

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <PageHeadingContainer>
          <PageHeading
            color="#fff"
            data-aos="zoom-out"
            data-aos-easing="ease-in-sine"
          >
            About Me
          </PageHeading>
        </PageHeadingContainer>
        <AboutWrapper>
          <Left data-aos="fade-right">
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
                styled-components, JavaScript (ES6+), Reactjs to build
                accessible component-based web pages and systems. I am a
                passionate person willing to learn more technologies to become a
                better developer, I'm determined and result oriented.
              </p>
              <p>
                I have achieved a good understanding of relational databases, as
                well as solid computer science foundations such as complex
                algorithms and code challenge type problem solving
              </p>
            </Text>
            <Cta>
              <ResumeBtn href={resume} target="_blank">
                Resume
              </ResumeBtn>
            </Cta>
          </Left>
          <Right width="50%" data-aos="fade-left">
            <img src={avatar} alt="avatar" />
          </Right>
        </AboutWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
