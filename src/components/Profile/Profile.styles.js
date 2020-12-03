import styled from "styled-components";
import { primary, secondary, tertiary } from "../../data/colors";
import { Link } from "react-router-dom";
// import { BiWinkSmile } from "react-icons/bi";

export const ProfileContainer = styled.div`
  background: ${primary};
  height: calc(100vh - 160px);
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
  padding: 1rem 1rem 0 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 1rem;
  }
`;
export const Picture = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
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
export const ProfileLink = styled(Link)`
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
