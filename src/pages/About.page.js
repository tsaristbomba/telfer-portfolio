import React from "react";
import Profile from "../components/Profile";
import { profileObj } from "../data/profile";

const AboutPage = () => {
  return (
    <>
      <Profile {...profileObj} />
    </>
  );
};

export default AboutPage;
