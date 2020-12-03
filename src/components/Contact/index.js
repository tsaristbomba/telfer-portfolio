import React from "react";
import contactImage from "../../images/contact.jpg";
import {
  ContactContainer,
  ContactWrapper,
  ContactContent,
  Title,
  ContactH2,
  ContactText,
  ContactP,
  ContactSocials,
  SocialsLink,
  TwitterIcon,
  EmailIcon,
  SocialsText,
  ImageWrapper,
  ContactImage,
  ContactRow,
} from "./Contact.styles";

const Contact = ({ text }) => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactContent>
          <Title>
            <ContactH2>Contact.</ContactH2>
          </Title>
          <ContactRow>
            <ImageWrapper data-aos="fade-right">
              <ContactImage src={contactImage} alt="Contact me" />
            </ImageWrapper>
            <ContactText data-aos="fade-up">
              {text.map((data) => {
                return <ContactP>{data}</ContactP>;
              })}
              <ContactSocials>
                {/* <SocialsLink>Linkedin</SocialsLink> */}
                <SocialsLink href="" target="_blank" aria-label="Twitter">
                  <SocialsText>
                    DM me <TwitterIcon />
                  </SocialsText>
                </SocialsLink>
                <SocialsLink
                  href="mailto:andreitelfer@gmail.com"
                  aria-label="Email"
                >
                  <SocialsText>
                    Email me <EmailIcon />
                  </SocialsText>
                </SocialsLink>
              </ContactSocials>
            </ContactText>
          </ContactRow>
        </ContactContent>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
