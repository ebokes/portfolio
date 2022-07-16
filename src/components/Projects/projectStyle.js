import styled from "styled-components";
import { HiCode } from "react-icons/hi";
import { CgScreen } from "react-icons/cg";

export const ProjectWrapper = styled.div`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  max-width: 100%;
  width: 100%;
  z-index: 1;
  transition: all 0.6s;

  img {
    max-width: 50%;
  }
`;

export const Project1 = styled.div`
  background: linear-gradient(
      to left,
      rgba(0, 31, 88, 0.3),
      rgba(0, 31, 88, 0.3)
    ),
    url(${({ pic }) => pic});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 60%;
  height: 39rem;
  position: relative;
  z-index: 1;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    transition: transform 0.6s ease-in-out;
    background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88));
    font-size: 9rem;
    text-align: end;
    font-family: "Sarabun", sans-serif;
    color: #fff;
    /* opacity: 0.9; */
    transform: scaleY(0);
    z-index: -1;
    transform-origin: bottom;
  }

  &:hover::before {
    transform: scaleY(1);
    /* transform-origin: top;
    background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88)); */
    /* background-color: #0ba4e0; */
  }
`;

export const CodeIcon = styled(HiCode)`
  margin-right: 0.5rem;
`;

export const LiveIcon = styled(CgScreen)`
  margin-right: 0.5rem;
`;

export const Text = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;

  flex-direction: column;
  justify-content: center;
  transition: 0.5s ease-in-out;
  position: absolute;
  padding-left: 10rem;
  opacity: 0;

  p {
    width: 70%;
  }

  h4 {
    margin: 1rem 0;
  }

  h1 {
    position: absolute;
    top: -2rem;

    right: 1rem;
    /* font-style: italic; */
    font-size: 10rem;
    font-weight: 900;
    color: #ccc;
    font-family: "Sarabun", sans-serif;
    display: flex;
    /* flex-direction: row-reverse; */
  }

  &:hover {
    opacity: 1;
  }
`;
export const ButtonGroup = styled.span`
  width: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 1rem;
  bottom: 0rem;
  left: 0rem;

  a {
    padding: 0.5rem 1rem;
    background-color: #feb72b;
    color: #000;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
  }
`;
