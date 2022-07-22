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

  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    flex-direction: column;
  }

  p {
    color: #fff;
    text-align: center;
    margin: 0 0.2rem;
  }
`;

export const Spacer = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    visibility: hidden;
    font-size: 0.5rem;
  }
`;
