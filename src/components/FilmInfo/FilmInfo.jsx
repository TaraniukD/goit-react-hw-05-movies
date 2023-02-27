import React from "react";
import { Ul, DivInfo } from "./Filminfo.styled";
import PropTypes from "prop-types";

export const FilmInfo = ({ title, popularity, overview, genres }) => {
  return <DivInfo>
    <h1>{title}</h1>
    <p>Rating: {popularity}%</p>
    <h2>Overview</h2>
    <p>{overview}</p>
    <h2>Genres</h2>
    <Ul>
      {genres.map(movie => {
        return <li key={movie.id}>{movie.name}</li>
      })}
    </Ul>
  </DivInfo>
};


FilmInfo.propTypes = {
  title: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
}