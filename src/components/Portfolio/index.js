import React from "react";
import {
  boxObjFive,
  boxObjFour,
  boxObjOne,
  boxObjSeven,
  boxObjSix,
  boxObjThree,
  boxObjTwo,
} from "../../data/boxes";
import Box from "./Box";
import {
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioTitle,
  Title,
} from "./Portfolio.styles";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioWrapper id="work">
        <PortfolioTitle>
          <Title>Selected Work.</Title>
        </PortfolioTitle>
        <Box {...boxObjFour} />
        <Box {...boxObjTwo} />
        <Box {...boxObjThree} />
        <Box {...boxObjFive} />
        <Box {...boxObjSix} />
        <Box {...boxObjOne} />
        <Box {...boxObjSeven} />
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
