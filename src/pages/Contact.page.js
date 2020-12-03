import React from "react";
import Contact from "../components/Contact";
import { contactObj } from "../data/contact";

const ContactPage = () => {
  return (
    <>
      <Contact {...contactObj} />
    </>
  );
};

export default ContactPage;
