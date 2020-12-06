import React, { useState } from "react";
import PropTypes from "prop-types";
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
  ImagePlaceholder,
  ContactRow,
} from "./Contact.styles";
import { Spinner } from "../../GlobalStyles";

const Contact = ({ text }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactContent>
          <Title>
            <ContactH2>Contact.</ContactH2>
          </Title>
          <ContactRow>
            <ImageWrapper data-aos="fade-right">
              <ContactImage
                onLoad={() => setImgLoaded(true)}
                src={contactImage}
                alt="Contact me"
              />
              {!imgLoaded && (
                <ImagePlaceholder>
                  <Spinner />
                </ImagePlaceholder>
              )}
            </ImageWrapper>
            <ContactText data-aos="fade-up">
              {text.map((data, key) => {
                return <ContactP key={key}>{data}</ContactP>;
              })}
              <ContactSocials>
                <SocialsLink
                  href="https://twitter.com/andreitelfer"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
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

Contact.propTypes = {
  text: PropTypes.array,
};

export default Contact;
