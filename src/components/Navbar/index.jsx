import React, { useState } from "react";
import {
  Header,
  NavContainer,
  Logo,
  ButtonLink,
  Hire,
  HamburgerStyle,
} from "./navbarStyle";
import { Sling as Hamburger } from "hamburger-react";

const green1 = ({ theme }) => theme.color.green1;
// const green2 = ({ theme }) => theme.color.green2;
// const green3 = ({ theme }) => theme.color.green3;

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const changeNavColorOnScroll = () =>
    window.scrollY >= 7 ? setNavColor(true) : setNavColor(false);
  window.addEventListener("scroll", changeNavColorOnScroll);
  return (
    <Header navbar={navColor}>
      <NavContainer>
        {/* <ButtonLink navbar={navColor} href="#home"> */}
        <Logo href="#home" navbar={navColor}>
          <h2>ce</h2>
        </Logo>
        {/* </ButtonLink> */}
        <HamburgerStyle>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={26}
            rounded
            label="Show menu"
            padding={0}
          />
        </HamburgerStyle>
        <ul>
          <li>
            <ButtonLink navbar={navColor} href="#home">
              Home
            </ButtonLink>
          </li>
          <li>
            <ButtonLink navbar={navColor} href="#about">
              About
            </ButtonLink>
          </li>
          <li>
            <ButtonLink navbar={navColor} href="#tech-stack">
              Tech Stack
            </ButtonLink>
          </li>
          <li>
            <ButtonLink navbar={navColor} href="#projects">
              Projects
            </ButtonLink>
          </li>
          <li>
            <ButtonLink navbar={navColor} href="#contact">
              Contact
            </ButtonLink>
          </li>
          {/* <li>
            <Hire navbar={navColor} href="#contact">
              Hire me
            </Hire>
          </li> */}
        </ul>
      </NavContainer>
    </Header>
  );
};

export default Navbar;
