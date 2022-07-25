import React from "react";
import {
  TechStackWrapper,
  TechStackSection,
  Tech,
  Tools,
  Languages,
  Libraries,
} from "./techStackStyle";
import { LibrariesData, TechData, ToolData } from "./techStackData";
import {
  Container,
  PageHeadingContainer,
  SubHeading,
} from "../reuseableComponents/contentStyle";

const TechStack = () => {
  return (
    <TechStackSection id="tech-stack">
      <Container>
        <TechStackWrapper>
          <Languages>
            <PageHeadingContainer>
              <SubHeading data-aos="zoom-out">Languages</SubHeading>
            </PageHeadingContainer>
            <Tech data-aos="zoom-in">
              {TechData.map((tech) => (
                <figure key={tech.id}>
                  <img src={tech.src} alt={tech.alt} />
                  <figcaption>{tech.caption}</figcaption>
                </figure>
              ))}
            </Tech>
          </Languages>
          <Libraries>
            <PageHeadingContainer>
              <SubHeading data-aos="zoom-out">
                Libraries and Frameworks
              </SubHeading>
            </PageHeadingContainer>
            <Tech data-aos="zoom-in">
              {LibrariesData.map((tech) => (
                <figure key={tech.id}>
                  <img src={tech.src} alt={tech.alt} />
                  <figcaption>{tech.caption}</figcaption>
                </figure>
              ))}
            </Tech>
          </Libraries>
          <Tools>
            <PageHeadingContainer>
              <SubHeading data-aos="zoom-out">Tools</SubHeading>
            </PageHeadingContainer>
            <Tech data-aos="zoom-in">
              {ToolData.map((tech) => (
                <figure key={tech.id}>
                  <img src={tech.src} alt={tech.alt} />
                  <figcaption>{tech.caption}</figcaption>
                </figure>
              ))}
            </Tech>
          </Tools>
        </TechStackWrapper>
      </Container>
    </TechStackSection>
  );
};

export default TechStack;
