import styled from "styled-components";
import { LinkButton } from "../reuseableComponents/Button";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  width: 55rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 1px #00000029;
  background-color: #222;
  font-family: "Poppins", sans-serif;
  color: #ccc;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
  }
`;

export const Text = styled.div`
  padding: 2rem;

  p {
    line-height: 2.8rem;
    font-family: "Nunito", sans-serif;
    font-size: 1.8rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      padding: 1rem 0;
    }
  }
`;

export const Cta = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ResumeBtn = styled(LinkButton)`
  font-family: "Ubuntu", sans-serif;
  &:hover {
    color: #000;
    border: 1px solid #feb72b;
  }

  &::before {
    transform-origin: right;
    background-color: #feb72b;
    border-radius: 5px;
  }

  &:hover::before {
    transform-origin: left;
    background-color: #feb72b;
  }
`;

export const Right = styled.div`
  width: 33rem;

  img {
    border-radius: 0.5rem;
    width: 100%;
  }
`;
