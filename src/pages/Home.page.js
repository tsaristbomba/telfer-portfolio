import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import { profileObj } from "../data/profile";

const Home = () => {
  return (
    <>
      <Hero {...profileObj} />
      <Portfolio />
    </>
  );
};

export default Home;
