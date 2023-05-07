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
                I am a highly skilled frontend developer with over 3 years of
                experience in HTML5, CSS3, JavaScript, TypeScript, ReactJS, and
                VueJS. I enjoy creating user-friendly interfaces that are
                visually appealing and easy to use. My strong collaborative
                skills enable me to work efficiently with other developers,
                designers, and stakeholders.
              </p>
              <p>
                I am committed to constantly improving my skills and staying
                up-to-date with the latest front-end development trends to
                deliver exceptional code and user experiences.
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
