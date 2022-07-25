import styled from "styled-components";
import { Section } from "../reuseableComponents/contentStyle";
import bg from "../../images/back6.jpg";

export const TechStackSection = styled(Section)`
  background: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: inset 0 0 0 1000px #00102ecc;
`;

export const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  column-gap: 4%;

  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
  }
`;

export const Stack = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Languages = styled(Stack)``;
export const Libraries = styled(Stack)``;
export const Tools = styled(Stack)``;

export const Tech = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  padding-top: 2rem;
  margin-bottom: 4rem;
  font-size: 1.5rem;
  box-shadow: 0rem 0rem 0.7rem 0.1rem rgba(0, 0, 0, 0.237);

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 13rem;
    font-weight: 600;
    border: 1px solid #fff;
    color: #fff;
    margin: 0 0.5rem 1rem 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    transition: 0.4s;

    &:hover {
      transform: scale(1.05);
      border: 1px solid #feb72b;
    }

    img {
      width: 4rem;
      display: flex;
      flex: 1;
    }
  }
`;
