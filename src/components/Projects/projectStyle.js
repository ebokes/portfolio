import styled from "styled-components";
import { HiCode, HiBadgeCheck } from "react-icons/hi";
import { CgScreen } from "react-icons/cg";

export const ProjectWrapper = styled.div`
  width: 100%;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3%;
  background-color: #e3e3e6;
  width: 80%;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 0 15px 3px #0000006a;
  align-items: flex-start;
  margin: 0rem auto 5rem auto;

  flex-direction: ${({ fd }) => fd || "row"};

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
    height: 80%;
    margin-bottom: 2rem;
  }
`;

export const ProjectImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
  }

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
    transform: scaleY(1);
    z-index: 1;
    transform-origin: bottom;
    opacity: 0.6;
  }
`;

export const Overlay = styled.div`
  color: #fff;
  display: flex;
  align-self: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.5s ease-out 0.3s;

  &:hover {
    opacity: 1;
  }

  h1 {
    top: 0;
    right: 1rem;
    font-size: 10rem;
    font-weight: 900;
    color: #ccc;
    font-family: "Sarabun", sans-serif;
    z-index: 2;
  }

  span {
    position: absolute;
    bottom: -4rem;
    width: 10rem;
    flex-direction: row;
    display: flex;
    gap: 2rem;
    justify-content: center;

    :hover {
      opacity: 1;
    }

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
  }
`;

export const CodeIcon = styled(HiCode)`
  margin-right: 0.5rem;
`;

export const LiveIcon = styled(CgScreen)`
  margin-right: 0.5rem;
`;

export const Col2 = styled.div`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
    margin-top: 4rem;
  }

  div {
    margin-bottom: 2rem;
  }
  span p {
    display: inline-flex;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0.3rem 1.2rem 0.5rem 1.2rem;
    background: #064797;
    border-radius: 0.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 1.4rem;
  }
`;

export const Bullet = styled(HiBadgeCheck)`
  color: #feb72b;
  margin-right: 0.3rem;
`;
