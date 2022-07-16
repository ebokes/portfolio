import { BsMouse } from "react-icons/bs";
import styled from "styled-components";
import study from "../../images/back10.jpg";
import { LinkButton } from "../reuseableComponents/Button";
import { VscArrowSmallDown } from "react-icons/vsc";

// const green1 = ({ theme }) => theme.color.green1;
// const green2 = ({ theme }) => theme.color.green2;
// const green3 = ({ theme }) => theme.color.green3;

export const HeroSection = styled.section`
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

export const HeroContents = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  color: #fff;
  position: absolute;

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
  }
`;

export const IntroBody = styled.div`
  & > p {
    font-size: 1.9rem;
    display: flex;
    width: 83rem;
    font-family: "Poppins", sans-serif;
  }
`;

export const TypewriterText = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4rem;
  font-size: 1.9rem;
  font-family: "Poppins", sans-serif;

  span {
    color: #feb72b;
  }
`;

export const ButtonWrapper = styled.div`
  height: 5rem;
  width: 100%;
`;

export const GetInTouchBtn = styled(LinkButton)`
  margin-right: 5rem;

  &:hover {
    color: #000;
  }
`;
export const ProjectBtn = styled(LinkButton)`
  border: 0.1rem solid #feb72b;
  color: #feb72b;

  &:hover {
    color: #fff;
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

// c="#fff" bgc="transparent"

export const Mouse = styled(BsMouse)``;
export const Arrow = styled(VscArrowSmallDown)`
  font-size: 2rem;
  /* margin-top: 0.1rem; */
`;

export const MouseDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 48%;
  /* transform: translateX(-50%); */
  color: #fff;
  font-size: 4rem;
  opacity: 0.2;
  animation: bounce 1.5s infinite ease-out;

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
    /* 100% {
      transform: translateY(2px);
    } */
  }
`;
