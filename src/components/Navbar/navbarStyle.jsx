import styled from "styled-components";

const white = ({ theme }) => theme.color.white;
export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 7rem;
  background-color: #00102e;
  z-index: 10;
  color: white;
  box-shadow: 0 0 1rem #000000a9;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ navbar }) => navbar} {
    background-color: transparent;
    box-shadow: 0 0;
    border-bottom: 0.1rem solid #c4c4c4;
  }
`;

export const NavContainer = styled.div`
  max-width: 120rem;
  width: 90%;
  /* margin-left: 5%; */

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 95%;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: none;
  text-transform: uppercase;
  z-index: 20;
  margin-right: 5%;

  /* mobile */
  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 7rem;
    right: -0.5rem;
    background-color: rgb(0, 16, 46);
    padding-left: 2rem;
    height: 100vh;
    animation: slideOut 0.5s ease-in;
    margin-right: 0;
    opacity: 0.9;

    li {
      padding: 0;
      width: 22rem;
      line-height: 2.5rem;
      padding: 1rem;

      @keyframes slideOut {
        0% {
          width: 0rem;
          opacity: 0;
        }
        100% {
          width: 19rem;
          opacity: 1;
        }
      }
      &:not(:last-child) {
        border-bottom: 1px solid #999;
      }
    }
  }

  /* Desktop */
  ${({ isOpen }) => isOpen} {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      display: none;
    }

    li {
      &:not(:last-child) {
        padding-right: 2.5rem;
      }
    }
  }
`;

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 4.5rem;
  height: 3.5rem;
  color: #fff;
  border: 0.2rem solid #fff;

  h2 {
    text-transform: uppercase;
  }

  ${({ navbar }) => navbar} {
    /* border: 0.2rem solid #000; */
  }
`;

export const HamburgerStyle = styled.span`
  display: none;
  margin-right: 0;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: inline-block;
  }
`;

export const ButtonLink = styled.a`
  color: ${white};
  display: flex;
  transition: all 0.4s;
  position: relative;
  padding-bottom: 0.3rem;
  transition: all 0.5s ease-in-out;
  font-family: "Mulish", sans-serif;

  ${({ navbar }) => navbar} {
    color: #fff;
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
  }

  &:hover::before {
    transform: scaleX(1);
    background-color: #feb72b;

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      transform: scaleX(0);
    }
  }
`;
