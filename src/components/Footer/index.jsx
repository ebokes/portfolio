import React from "react";
import { Container } from "../reuseableComponents/contentStyle";
import { FooterSection, FooterWrapper, Spacer } from "./footerStyle";

const green1 = ({ theme }) => theme.color.green1;

const Footer = () => {
  return (
    <FooterSection id="footer" bgcolor={green1}>
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
    </FooterSection>
  );
};

export default Footer;
