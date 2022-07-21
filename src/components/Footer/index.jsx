import React from "react";
import { SiCodewars } from "react-icons/si";
import { Container, Section } from "../reuseableComponents/contentStyle";
import { FooterWrapper, Spacer } from "./footerStyle";

const green1 = ({ theme }) => theme.color.green1;

const Footer = () => {
  return (
    <Section bgcolor={green1}>
      <Container>
        <FooterWrapper>
          <span>
            <p>Copyright &copy; 2022</p>
          </span>
          <Spacer>
            <p>|</p>
          </Spacer>
          <span>
            <p>Designed & Built by Chibuokem Egbuchulam</p>
          </span>
        </FooterWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
