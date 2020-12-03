import React from "react";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoSpan,
  MobileIcon,
  NavMenu,
  NavItem,
  NavHashLink,
} from "./Navbar.styles";

const Navbar = ({ handleMenu }) => {
  // scroll offset function
  const scrollOffset = (e) => {
    const yCordinate = e.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCordinate + yOffset, behavior: "smooth" });
  };
  //

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo smooth to="/#">
          JOHN<LogoSpan>SMITH.</LogoSpan>
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavHashLink smooth exact to="/#work" scroll={scrollOffset}>
              Selected Work
            </NavHashLink>
          </NavItem>
          <NavItem>
            <NavHashLink to="/about">About</NavHashLink>
          </NavItem>
          <NavItem>
            <NavHashLink to="/contact">Contact</NavHashLink>
          </NavItem>
          <NavItem>
            <NavHashLink to="/playlists#top">Playlists</NavHashLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

Navbar.propTypes = {
  handleMenu: PropTypes.func,
};

export default Navbar;
