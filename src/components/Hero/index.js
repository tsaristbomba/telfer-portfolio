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

const Hero = ({ skillX }) => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent data-aos="fade-up">
          <HeroH1>Hello! I'm John and I work with</HeroH1>
          <HeroH2>
            <Typewriter
              options={{
                strings: skillX,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 35,
              }}
            />
          </HeroH2>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

Hero.propTypes = {
  content: PropTypes.string,
};

export default Hero;
