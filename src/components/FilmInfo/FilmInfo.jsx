import React from "react";
import { Ul } from "./Filminfo.styled";

export const FilmInfo = ({title, popularity, overview, genres}) => {
    return <div>
        <h1>{title}</h1>
        <p>Rating: {popularity}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <Ul>
        { genres.map(movie => {
          return <li key={movie.id}>{movie.name}</li>
         })}
        </Ul>
      </div>
}