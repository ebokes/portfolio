import React from "react";
import {
  TechStackWrapper,
  Stack,
  TechStackSection,
  Tech,
  Tools,
} from "./techStackStyle";
import { TechData, ToolData } from "./techStackData";
import { Container, PageHeading } from "../reuseableComponents/contentStyle";

const TechStack = () => {
  return (
    <TechStackSection id="tech-stack">
      <Container>
        <TechStackWrapper>
          <Stack>
            <PageHeading color="#fff">Tech Stack</PageHeading>
            <Tech>
              {TechData.map((tech) => (
                <figure key={tech.id}>
                  <img src={tech.src} alt={tech.alt} />
                  <figcaption>{tech.caption}</figcaption>
                </figure>
              ))}
            </Tech>
          </Stack>
          <Tools>
            <PageHeading color="#fff">Tools</PageHeading>
            <Tech>
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
