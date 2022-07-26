import React from "react";
import { Container } from "../reuseableComponents/contentStyle";
import { FooterSection, FooterWrapper } from "./footerStyle";

const green1 = ({ theme }) => theme.color.green1;

const Footer = () => {
  return (
    <FooterSection id="footer" bgcolor={green1}>
      <Container>
        <FooterWrapper>
          <div>
            <p>&copy; 2022. All Rights Reserved</p>
          </div>
          <div>
            <p>
              Designed & Built by <span>Chibuokem Egbuchulam</span>
            </p>
          </div>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
