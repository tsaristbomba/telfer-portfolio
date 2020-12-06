import styled from "styled-components";
import { primary, secondary, tertiary } from "../../data/colors";
import { HashLink } from "react-router-hash-link";

export const ProfileContainer = styled.div`
  background: ${primary};
  min-height: calc(100vh - 160px);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
    margin: 0;
  }
`;
export const ProfileWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const ProfileTitle = styled.div`
  width: 100%;
`;
export const Title = styled.h3`
  color: ${secondary};
  font-size: 18px;
`;
export const ProfileContent = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ProfilePicture = styled.div`
  width: 40%;
  height: 100%;
  margin: 1rem 1rem 0 0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 480px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 1rem;
  }
`;
export const Picture = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export const PicturePlaceholder = styled.div`
  width: 100%;
  background: ${tertiary};
  position: absolute;
  border-radius: 8px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const ProfileText = styled.div`
  width: 60%;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ProfileP = styled.p`
  color: ${secondary};
  margin-bottom: 1rem;
`;
export const ProfileAnchor = styled.a`
  color: ${secondary};
  text-decoration: none;
  border-bottom: 2px solid ${secondary};
  transition: all 0.2s ease;

  &:hover {
    color: ${tertiary};
    border-color: ${tertiary};
  }
`;
export const EmojiIcon = styled.span``;
export const ProfileLink = styled(HashLink)`
  color: ${secondary};
  text-decoration: none;
  border-bottom: 2px solid ${secondary};
  transition: all 0.2s ease;

  &:hover {
    color: ${tertiary};
    border-color: ${tertiary};
  }
`;
export const ProfileSkills = styled.div`
  margin-top: 2rem;
`;
export const SkillsTitle = styled.div``;
export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ProfileSkillX = styled.div`
  margin-right: 4px;
  margin-top: 8px;
  background: ${secondary};
  color: ${primary};
  margin-right: 8px;
  padding: 6px;
  border-radius: 8px;
`;
export const ProfileSkill = styled.div`
  margin-top: 8px;
  margin-right: 4px;
  background: ${tertiary};
  color: ${primary};
  margin-right: 8px;
  padding: 6px;
  border-radius: 8px;
`;
export const Socials = styled.div`
  margin-top: 2rem;
`;
export const SocialIcons = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;
export const SocialLink = styled.a`
  color: ${secondary};
  font-size: 2rem;
  margin-right: 1rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${tertiary};
  }
`;
