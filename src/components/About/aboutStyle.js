import styled from "styled-components";
import { LinkButton } from "../reuseableComponents/Button";
import { Section } from "../reuseableComponents/contentStyle";

export const AboutSection = styled(Section)`
  background-color: #2b2d42e3;
`;

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

export const Right = styled.div`
  width: 33rem;

  img {
    border-radius: 0.5rem;
    width: 100%;
  }
`;

export const Text = styled.div`
  padding: 2rem;

  p {
    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      padding: 1rem 0;
    }
  }
`;

export const Cta = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ProjectBtn = styled(LinkButton)`
  &:hover {
    color: #fff;
    border: 1px solid #0ba4e0;
  }

  &::before {
    transform-origin: right;
    background-color: #0ba4e0;
    border-radius: 5px;
  }

  &:hover::before {
    transform-origin: left;
    background-color: #0ba4e0;
  }
`;
export const ResumeBtn = styled(ProjectBtn)``;
