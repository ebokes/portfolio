import styled from "styled-components";
import { Section } from "../reuseableComponents/contentStyle";

export const FooterSection = styled(Section)`
  padding: 2rem 0;
`;
export const FooterWrapper = styled.footer`
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.5;

  p {
    color: #fff;
    text-align: center;
    margin: 0 0.2rem;

    span {
      color: #feb72b;
    }
  }
`;
