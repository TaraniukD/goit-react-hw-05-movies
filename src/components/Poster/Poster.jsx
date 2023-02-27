import React from "react";
import PropType from "prop-types";

export const Poster = ({ poster, title }) => {

  return <>
    {poster ?
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={title}
        width="100%"
        height="100%"
      /> :
      <img src="https://p.kindpng.com/picc/s/736-7369205_play-button-png-pic-video-default-transparent-png.png"
        alt={title}
        width="100%"
        height="100%"
      />}
  </>
};

Poster.propTypes = {
  poster: PropType.string,
  title: PropType.string.isRequired
};