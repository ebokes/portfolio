import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Container } from "../reuseableComponents/contentStyle";
import {
  HeroSection,
  HeroContents,
  ButtonWrapper,
  TypewriterText,
  IntroBody,
  GetInTouchBtn,
  ProjectBtn,
  Mouse,
  MouseDownWrapper,
  Arrow,
} from "./heroStyle";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContents>
          <h1>
            Hi 👋, I'm <span>Chibuokem</span>
          </h1>
          <h2>Front End Developer</h2>
          <IntroBody>
            <p>
              I build websites that focus on responsive design, accessibility
              and scalability. I am passionate about bringing the technical and
              visual aspects of digital products to life.
            </p>
            <br />
            <TypewriterText>
              <p>
                I am proficient in&nbsp;<span>{"<"}</span>
                &nbsp;
              </p>
              <TypewriterComponent
                options={{
                  cursor: " />",
                  strings: [
                    "html",
                    "css",
                    "javascript",
                    "reactjs",
                    "sass",
                    "tailwindcss",
                    "styled-components",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </TypewriterText>
          </IntroBody>
          <ButtonWrapper>
            <GetInTouchBtn href="#contact">Get in touch</GetInTouchBtn>
            <ProjectBtn href="#projects">Projects</ProjectBtn>
          </ButtonWrapper>
        </HeroContents>
      </Container>
      <MouseDownWrapper>
        <Mouse />
        <Arrow />
      </MouseDownWrapper>
    </HeroSection>
  );
};

export default Hero;
