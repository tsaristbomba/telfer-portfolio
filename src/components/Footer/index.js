import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterRights,
  FooterMaker,
  CodeIcon,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRights>ⓒ {new Date().getFullYear()} John Smith</FooterRights>
        <FooterMaker>
          <CodeIcon /> with React.js
        </FooterMaker>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
