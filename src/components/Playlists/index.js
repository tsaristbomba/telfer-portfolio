import React from "react";
import {
  playlistsObjOne,
  playlistsObjThree,
  playlistsObjTwo,
} from "../../data/playlists";
import PlaylistsInfo from "./PlaylistsInfo";
import {
  PlaylistsContainer,
  PlaylistsWrapper,
  PlaylistsTextWrapper,
  PlaylistsH1,
  PlaylistsP,
} from "./Playlists.styles";

const Playlists = () => {
  return (
    <PlaylistsContainer id="playlists">
      <PlaylistsWrapper>
        <PlaylistsTextWrapper>
          <PlaylistsH1>Playlists.</PlaylistsH1>
          <PlaylistsP>Music that inspires me.</PlaylistsP>
        </PlaylistsTextWrapper>
        <PlaylistsInfo {...playlistsObjOne} />
        <PlaylistsInfo {...playlistsObjTwo} />
        <PlaylistsInfo {...playlistsObjThree} />
      </PlaylistsWrapper>
    </PlaylistsContainer>
  );
};

export default Playlists;
