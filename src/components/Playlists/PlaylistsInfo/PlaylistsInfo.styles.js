import styled from "styled-components";
import { secondary, tertiary } from "../../../data/colors";

export const PlaylistsInfoContainer = styled.div`
  display: grid;
  max-width: 1100px;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: ${({ $reverse }) =>
    $reverse ? "'col2 col1'" : "'col1 col2'"};
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  grid-gap: 1rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
    margin: 1.5rem 0;
    grid-gap: 0.2rem;
  }
`;
export const ImageWrapper = styled.div`
  grid-area: col1;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;
export const TextWrapper = styled.div`
  grid-area: col2;
  text-align: ${({ $reverse }) => ($reverse ? "end" : "start")};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const PlaylistH2 = styled.h2`
  font-size: 22px;
  color: ${secondary};
`;
export const PlaylistP = styled.p`
  color: ${tertiary};
  margin-bottom: 8px;
`;
export const PlaylistButton = styled.a`
  color: ${secondary};
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${tertiary};
  }
`;
