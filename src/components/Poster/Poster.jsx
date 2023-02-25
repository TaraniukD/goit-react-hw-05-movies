import React from "react";

export const Poster = ({ poster, title }) => {

  return <>
    {poster ?
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={title}
        width="100%"
        height="100%"
      /> :
      <img src="https://www.co.eureka.nv.us/fair/photos/Eureka%20Fair%202017/res/movie.png"
        alt={title}
        width="100%"
        height="100%"
      />}
  </>
};