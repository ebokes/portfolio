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
    <TechStackSection>
      <Container>
        <TechStackWrapper>
          <Stack>
            <PageHeading>Tech Stack</PageHeading>
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
            <PageHeading color="#00102e">Tools</PageHeading>
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
