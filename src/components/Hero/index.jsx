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
  HeroContentsWrapper,
} from "./heroStyle";

const Hero = () => {
  return (
    <HeroSection id="home">
      <Container>
        <HeroContentsWrapper>
          <HeroContents>
            <h1 data-aos="fade-right">
              Hi 👋, I'm <span>Chibuokem</span>
            </h1>
            <h2 data-aos="fade-right">Front End Developer</h2>
            <IntroBody data-aos="fade-right">
              <p>
                I build websites that focus on responsive design, accessibility
                and scalability. I am passionate about bringing the technical
                and visual aspects of digital products to life.
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
                      "HTML",
                      "CSS",
                      "Javascript",
                      "ReactJs",
                      "Sass",
                      "TailwindCSS",
                      "Styled-Components",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </TypewriterText>
            </IntroBody>
            <ButtonWrapper data-aos="fade-up">
              <GetInTouchBtn href="#contact">Get in touch</GetInTouchBtn>
              <ProjectBtn href="#projects">Projects</ProjectBtn>
            </ButtonWrapper>
          </HeroContents>
        </HeroContentsWrapper>
      </Container>
      <MouseDownWrapper href="#about">
        <div>
          <Mouse />
          <Arrow />
        </div>
      </MouseDownWrapper>
    </HeroSection>
  );
};

export default Hero;
