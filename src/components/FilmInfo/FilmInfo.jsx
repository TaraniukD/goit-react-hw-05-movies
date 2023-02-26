import React from "react";
import { Ul, DivInfo } from "./Filminfo.styled";

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