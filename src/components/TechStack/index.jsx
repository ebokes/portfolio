import React from "react";
import {
  TechStackWrapper,
  Stack,
  TechStackSection,
  Tech,
  Tools,
} from "./techStackStyle";
import { TechData, ToolData } from "./techStackData";
import {
  Container,
  PageHeading,
  PageHeadingContainer,
} from "../reuseableComponents/contentStyle";

const TechStack = () => {
  return (
    <TechStackSection id="tech-stack">
      <Container>
        <TechStackWrapper>
          <Stack>
            <PageHeadingContainer>
              <PageHeading data-aos="zoom-out" color="#fff">
                Tech Stack
              </PageHeading>
            </PageHeadingContainer>
            <Tech data-aos="zoom-in">
              {TechData.map((tech) => (
                <figure key={tech.id}>
                  <img src={tech.src} alt={tech.alt} />
                  <figcaption>{tech.caption}</figcaption>
                </figure>
              ))}
            </Tech>
          </Stack>
          <Tools>
            <PageHeadingContainer>
              <PageHeading data-aos="zoom-out" color="#fff">
                Tools
              </PageHeading>
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
