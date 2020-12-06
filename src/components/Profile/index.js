import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileTitle,
  Title,
  ProfilePicture,
  Picture,
  PicturePlaceholder,
  ProfileText,
  ProfileP,
  ProfileAnchor,
  EmojiIcon,
  ProfileLink,
  ProfileSkills,
  ProfileSkillX,
  ProfileSkill,
  ProfileContent,
  SkillsTitle,
  Skills,
  Socials,
  SocialIcons,
  SocialLink,
} from "./Profile.styles";
import { Spinner } from "../../GlobalStyles";

const Profile = ({ picture, alt, skillX, skill, socials, contact }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <ProfileContainer id="about">
      <ProfileWrapper>
        <ProfileTitle>
          <Title>About.</Title>
        </ProfileTitle>
        <ProfileContent>
          <ProfilePicture data-aos="fade-right">
            <Picture
              onLoad={() => setImgLoaded(true)}
              src={picture}
              alt={alt}
            />
            {!imgLoaded && (
              <PicturePlaceholder>
                <Spinner />
              </PicturePlaceholder>
            )}
          </ProfilePicture>
          <ProfileText data-aos="fade-up">
            <ProfileP>
              I was born and grew up in Brazil, in a small town at the exact
              center of{" "}
              <ProfileAnchor
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandeira_da_Bahia.svg/1920px-Bandeira_da_Bahia.svg.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                the great state of Bahia
              </ProfileAnchor>
              <EmojiIcon> 😁</EmojiIcon>. My experience with computers started
              when my parents, both high school teachers, needed a computer to
              work. They bought a white IBM Windows 98 PC, which I played games
              and learned a lot from, enjoyed every second of it. Knowing that I
              would end up working in tech wasn't a stretch{" "}
              <EmojiIcon>😉</EmojiIcon>.
            </ProfileP>
            <ProfileP>
              As time passes I started to study Computer Engineering to after
              find out that coding itself is what suits me more, so I made the
              change to Computer Science. In the meantime I was learning Web
              Development and started making games and websites for fun, to
              later decide to do this professionally, and here I am{" "}
              <EmojiIcon>🖐️</EmojiIcon>.
            </ProfileP>
            <ProfileP>
              My other big passions are Music, Crypto and Games. As described
              before, I started coding building games as well as websites, and
              to this day gaming is a big passion of mine. While doing anything
              I like to listen to a lot of music, and this are some of my
              favorite <ProfileLink to="/playlists#top">Playlists</ProfileLink>{" "}
              at the moment.
            </ProfileP>
            <ProfileSkills>
              <SkillsTitle>
                <Title>My Skills:</Title>
              </SkillsTitle>
              <Skills>
                {skillX.map((data, key) => {
                  return <ProfileSkillX key={key}>{data}</ProfileSkillX>;
                })}
                {skill.map((data, key) => {
                  return <ProfileSkill key={key}>{data}</ProfileSkill>;
                })}
              </Skills>
              <Socials>
                <SkillsTitle>
                  <Title>Contact:</Title>
                </SkillsTitle>
                <ProfileP>{contact}</ProfileP>
                <SocialIcons>
                  {socials.map((data, key) => {
                    return (
                      <SocialLink
                        key={key}
                        href={data.href}
                        aria-label={data.name}
                        rel="noopener noreferrer"
                      >
                        {data.icon}
                      </SocialLink>
                    );
                  })}
                </SocialIcons>
              </Socials>
            </ProfileSkills>
          </ProfileText>
        </ProfileContent>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  picture: PropTypes.string,
  alt: PropTypes.string,
  skillX: PropTypes.array,
  skill: PropTypes.array,
  socials: PropTypes.array,
  contact: PropTypes.string,
};

export default Profile;
