import * as React from "react";
import { useState } from "react";
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
import navData from "./navbarData";

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
        <NavContainer data-aos="zoom-out">
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
            {navData.map(({ id, title, link }) => (
              <li key={id}>
                <ButtonLink onClick={handleClose} navbar={navColor} href={link}>
                  {title}
                </ButtonLink>
              </li>
            ))}
          </Menu>
        </NavContainer>
      </Header>
    </ClickAwayListener>
  );
};

export default Navbar;
