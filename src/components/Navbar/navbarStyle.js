import styled from "styled-components";

const green1 = ({ theme }) => theme.color.green1;
const white = ({ theme }) => theme.color.white;

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 7rem;
  background-color: #00102e;
  /* background-color: #060b23; */
  /* background-color: ${green1}; */
  /* border-bottom: 0.1rem solid #c4c4c4; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 1rem #000000a9;
  z-index: 10;

  ${({ navbar }) => navbar} {
    background-color: transparent;
    box-shadow: 0 0;
    border-bottom: 0.1rem solid #c4c4c4;
    /* border-bottom: 0.1rem solid #feb72b; */
  }
`;
export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 3.5rem;
  color: #fff;
  /* border: 0.2rem solid #000; */
  border: 0.2rem solid #fff;
  h2 {
    text-transform: uppercase;
  }

  ${({ navbar }) => navbar} {
    /* border: 0.2rem solid #000; */
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      &:not(:last-child) {
        padding-right: 2.5rem;
      }
    }
  }
`;

export const ButtonLink = styled.a`
  color: ${white};
  display: flex;
  transition: all 0.4s;
  position: relative;
  padding-bottom: 0.3rem;
  transition: all 0.5s ease-in-out;

  ${({ navbar }) => navbar} {
    color: #fff;
    /* color: #feb72b; */
  }

  :hover {
    color: #feb72b;
  }

  &::before {
    content: "";
    width: 100%;
    height: 0.2rem;
    background-color: #feb72b;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: transform 250ms ease-in;
    transform: scaleX(0);
    /* transform-origin: right; */
  }

  &:hover::before {
    transform: scaleX(1);
    background-color: #feb72b;
    /* transform-origin: left; */
    /* width: 6rem; */
  }
`;

export const Hire = styled.a`
  border: 1px solid #feb72b;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: white;
  border-radius: 1rem;
  transition: all 0.6s;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(254, 184, 43);
    /* background-color: rgba(0, 0, 0, 0.5); */
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 250ms ease-out;
    z-index: -1;
    border-radius: 0.9rem;
    overflow: hidden;

    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
    color: #000;
  }
`;
