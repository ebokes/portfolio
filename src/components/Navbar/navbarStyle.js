import styled from "styled-components";

const white = ({ theme }) => theme.color.white;

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 7rem;
  background-color: #00102e;
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
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 95%;
  }
`;

export const Menu = styled.ul`
  display: none;
  /* mobile */
  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 7rem;
    right: 0;
    background-color: #00102e;
    padding-left: 2rem;
    height: 100rem;

    li {
      padding: 0;
      width: 19rem;
      line-height: 2.5rem;
      padding: 1rem;

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

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      display: none;
    }

    li {
      &:not(:last-child) {
        padding-right: 2.5rem;
      }
      text-transform: uppercase;
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
