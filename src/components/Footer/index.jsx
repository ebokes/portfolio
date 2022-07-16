import React from "react";
import { SiCodewars } from "react-icons/si";
import { Container, Section } from "../reuseableComponents/contentStyle";
import { FooterWrapper } from "./footerStyle";

const green1 = ({ theme }) => theme.color.green1;

const Footer = () => {
  return (
    <Section bgcolor={green1}>
      <Container>
        <FooterWrapper>
          <p>Copyright &copy; 2022</p>
          <p>&nbsp;</p>
          <p>|</p>
          <p>&nbsp;</p>
          <p>Designed & Built by Chibuokem Egbuchulam</p>
        </FooterWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
