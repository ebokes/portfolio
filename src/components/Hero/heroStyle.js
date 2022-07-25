import { BsMouse } from "react-icons/bs";
import styled from "styled-components";
import study from "../../images/back10.jpg";
import { LinkButton } from "../reuseableComponents/Button";
import { VscArrowSmallDown } from "react-icons/vsc";
import { Section } from "../reuseableComponents/contentStyle";

export const HeroSection = styled(Section)`
  background: url(${study});
  height: 100vh;
  background-color: #00102e;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
  box-shadow: inset 0 0 0 1000px #00102ecc;
  position: relative;
`;

export const HeroContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 85vh;
`;

export const HeroContents = styled.div`
  h1,
  h2,
  p {
    color: #ddd;
  }

  h1 {
    font-family: "Noto Sans", sans-serif;
  }

  h1 span {
    font-size: 2.5rem;
    color: #feb72b;
  }

  h2 {
    font-size: 6rem;
    margin: 1rem 0 3rem 0;

    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      font-size: 5rem;
    }

    @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
      font-size: 4rem;
    }
  }
`;

export const IntroBody = styled.div`
  & > p {
    font-size: 1.9rem;
    display: flex;
    width: 83rem;
    font-family: "Poppins", sans-serif;

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      width: 80%;
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      width: 87%;
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
      width: 98%;
    }
  }
`;

export const TypewriterText = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4rem;
  font-size: 1.9rem;
  font-family: "Poppins", sans-serif;

  p {
  }

  span {
    color: #feb72b;

    @media screen and (max-width: 293px) {
      display: block;
    }
  }
`;

export const ButtonWrapper = styled.div`
  height: 5rem;

  @media screen and (max-width: 293px) {
    display: flex;
    width: fit-content;
    justify-content: center;
    justify-self: center;
    flex-direction: column;
  }
`;

export const GetInTouchBtn = styled(LinkButton)`
  margin-right: 5rem;
  font-family: "Ubuntu", sans-serif;

  @media screen and (max-width: 293px) {
    width: 100%;
    margin-top: 2rem;
  }
  &:hover {
    color: #000;
  }
`;
export const ProjectBtn = styled(LinkButton)`
  border: 0.1rem solid #feb72b;
  color: #feb72b;
  font-family: "Ubuntu", sans-serif;

  @media screen and (max-width: 293px) {
    width: 100%;
    margin-top: 2rem;
  }

  &:hover {
    color: #000;
    border: 0.1rem solid #ea9e05;
  }

  &::before {
    background-color: #feb72b;
  }

  &:hover::before {
    background-color: #ea9e05;
    border: 0.1rem solid #ea9e05;
  }
`;

export const MouseDownWrapper = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0.1rem;
    transform: translateX(-50%);
    color: #fff;
    font-size: 4rem;
    opacity: 0.2;
    animation: bounce 1.5s infinite ease-out;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Mouse = styled(BsMouse)``;
export const Arrow = styled(VscArrowSmallDown)`
  font-size: 2rem;
`;
