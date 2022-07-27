import React from "react";
import {
  Container,
  PageHeading,
  PageHeadingContainer,
  Section,
} from "../reuseableComponents/contentStyle";
import avatar from "../../assets/development-web-development-svgrepo-com.svg";
import resume from "../../assets/Chibuokem Egbuchulam Resume.pdf";
import { AboutWrapper, Cta, Left, ResumeBtn, Right, Text } from "./aboutStyle";

const About = () => {
  return (
    <Section bgcolor="#2b2d42e3" id="about">
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
              <p>
                I'm a success-driven and determined Frontend developer. I have
                experience using HTML, CSS, Sass, TailwindCSS,
                styled-components, JavaScript, Reactjs to build accessible
                component-based web pages and systems. I am a passionate and
                enthusiastic learner, determined and result oriented.
              </p>
              <p>
                I have achieved a good understanding of relational databases, as
                well as solid computer science foundations such as complex
                algorithms and code challenge type problem solving.
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
    </Section>
  );
};

export default About;
