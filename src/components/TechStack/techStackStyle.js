import styled from "styled-components";
import { Section } from "../reuseableComponents/contentStyle";

export const TechStackSection = styled(Section)`
  background-color: #2b2d4221;
`;

export const TechStackWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 4%;

  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
  }
`;

export const Stack = styled.div`
  width: 60%;

  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Tools = styled.div`
  width: 30%;

  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Tech = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  padding-top: 2rem;
  margin-bottom: 4rem;
  font-size: 1.5rem;
  box-shadow: 0rem 0rem 0.7rem 0.1rem rgba(0, 0, 0, 0.237);
  background-color: #e3e3e6;

  /* @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
    width: 100%;
  } */

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    margin-bottom: 4rem;
    font-weight: 600;

    img {
      width: 8rem;
      display: flex;
      flex: 1;
    }
  }
`;
