import styled from "styled-components";
import { Section } from "../reuseableComponents/contentStyle";

export const TechStackSection = styled(Section)`
  background-color: #2b2d4221;
  /* background-color: #2b2d425b; */
`;

export const TechStackWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 4%;
  /* flex-direction: column; */
  /* padding-top: 6rem; */

  /* Still needs tweaking */
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
  background-color: #fff;
  box-shadow: 0rem 0rem 0.7rem 0.1rem rgba(0, 0, 0, 0.237);

  /* Still needs tweaking */
  /* @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    width: fit-content;
  } */

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    margin-bottom: 4rem;

    img {
      width: 8rem;
      display: flex;
      flex: 1;
    }
  }
`;
