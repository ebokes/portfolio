import * as React from "react";
import { useState } from "react";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
import { ClickAwayListener } from "@material-ui/core";
import {
  Header,
  NavContainer,
  Logo,
  ButtonLink,
  HamburgerStyle,
  Menu,
} from "./navbarStyle";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const changeNavColorOnScroll = () =>
    window.scrollY >= 7 ? setNavColor(true) : setNavColor(false);
  window.addEventListener("scroll", changeNavColorOnScroll);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Header navbar={navColor}>
        <NavContainer
        // data-aos="zoom-out"
        >
          <Logo href="#home" navbar={navColor}>
            <h2>ce</h2>
          </Logo>
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
          <Menu isOpen={isOpen} id="navbar">
            <li>
              <ButtonLink onClick={handleClose} navbar={navColor} href="#home">
                Home
              </ButtonLink>
            </li>
            <li>
              <ButtonLink onClick={handleClose} navbar={navColor} href="#about">
                About
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                onClick={handleClose}
                navbar={navColor}
                href="#services"
              >
                Services
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                onClick={handleClose}
                navbar={navColor}
                href="#tech-stack"
              >
                Tech Stack
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                onClick={handleClose}
                navbar={navColor}
                href="#projects"
              >
                Projects
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                onClick={handleClose}
                navbar={navColor}
                href="#contact"
              >
                Contact
              </ButtonLink>
            </li>
          </Menu>
        </NavContainer>
      </Header>
    </ClickAwayListener>
  );
};

export default Navbar;
