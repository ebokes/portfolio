import React from "react";
import {
  Container,
  PageHeading,
  PageHeadingContainer,
  Section,
} from "../reuseableComponents/contentStyle";
import servicesData from "./servicesData";
import { Card, CardWrapper, ServicesWrapper } from "./servicesStyle";

const Services = () => {
  return (
    <Section id="services" bgcolor="#183059">
      <ServicesWrapper>
        <Container>
          <PageHeadingContainer>
            <PageHeading data-aos="zoom-out" color="#fff">
              Services
            </PageHeading>
          </PageHeadingContainer>
          <CardWrapper>
            {servicesData.map(({ id, icon, title, body }) => (
              <Card data-aos="flip-right" key={id}>
                <div>{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </Card>
            ))}
          </CardWrapper>
        </Container>
      </ServicesWrapper>
    </Section>
  );
};

export default Services;
