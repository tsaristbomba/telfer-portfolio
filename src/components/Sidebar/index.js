import React from "react";
import PropTypes from "prop-types";
import {
  SidebarContainer,
  IconWrapper,
  CloseIcon,
  SidebarMenu,
  SidebarHashLink,
} from "./Sidebar.styles";

const Sidebar = ({ handleMenu, isOpen }) => {
  // scroll offset function
  const scrollOffset = (e) => {
    const yCordinate = e.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCordinate + yOffset, behavior: "smooth" });
  };
  //

  return (
    <SidebarContainer $isOpen={isOpen}>
      <IconWrapper onClick={handleMenu}>
        <CloseIcon />
      </IconWrapper>
      <SidebarMenu>
        <SidebarHashLink
          onClick={handleMenu}
          to="/#work"
          smooth
          scroll={scrollOffset}
        >
          Selected Work
        </SidebarHashLink>
        <SidebarHashLink onClick={handleMenu} to="/about#">
          About
        </SidebarHashLink>
        <SidebarHashLink onClick={handleMenu} to="/contact#">
          Contact
        </SidebarHashLink>
        <SidebarHashLink onClick={handleMenu} to="/playlists#">
          Playlists
        </SidebarHashLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  handleMenu: PropTypes.func,
  home: PropTypes.bool,
  isOpen: PropTypes.bool,
};

export default Sidebar;
