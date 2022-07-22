import React from "react";
import {
  Container,
  PageHeading,
  Section,
} from "../reuseableComponents/contentStyle";
import servicesData from "./servicesData";
import { Card, CardWrapper, ServicesWrapper } from "./servicesStyle";

const Services = () => {
  return (
    <Section id="services" bgcolor="#183059">
      <ServicesWrapper>
        <Container>
          <PageHeading color="#fff">Services</PageHeading>
          <CardWrapper>
            {servicesData.map(({ id, icon, title, body }) => (
              <Card key={id}>
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
