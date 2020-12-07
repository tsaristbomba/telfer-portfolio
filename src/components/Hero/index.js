import React from "react";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroH1,
  HeroH2,
} from "./Hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent data-aos="fade-up">
          <HeroH1>Hi, I'm Andrei, a </HeroH1>
          <HeroH2>
            <Typewriter
              options={{
                strings: ["React.js"],
                autoStart: true,
                pauseFor: 15000000,
                loop: true,
                delay: 50,
                deleteSpeed: 35,
              }}
            />
          </HeroH2>
          <HeroH1>Developer.</HeroH1>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

Hero.propTypes = {
  content: PropTypes.string,
};

export default Hero;
