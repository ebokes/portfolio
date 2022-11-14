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
  padding: 3rem 2rem 2rem;
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

  &:hover::before {
    transform: scaleY(0);
    background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88));

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      transform: scaleY(1);
    }
  }
`;

export const Buttons = styled.span`
  flex-direction: row;
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1.5rem;

  a {
    padding: 0.5rem 1rem;
    background-color: #feb72b;
    color: #000;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      cursor: auto;
    }

    :hover {
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
      transform: translateY(-3px);

      @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
        transform: translateY(0);
      }
    }

    :active {
      transform: translateY(-0.1px);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
    margin-top: 0.5rem;
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
