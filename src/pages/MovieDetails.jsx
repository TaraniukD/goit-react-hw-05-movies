
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { getInfoByFilm } from "../Api/Api";
import { Loader } from "components/Loader/Loader";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
 
    setLoading(true);

    const apiDetailsMovie = async () => {
      const results = await getInfoByFilm(id);

      if (results === 0) {
        Notiflix.Notify.info('No movies with that name:(');
        setLoading(false);
        return;
      }
      setMovies( results  );
      setLoading(false);
    }

    apiDetailsMovie().catch((error) => {
      Notiflix.Notify.warning(`Something went wrong! ${error}`);
    });
    
  }, [id])

  if (movies) {
 console.log(movies)
    console.log(movies.genres.sort());
  
  return (
    <>
      {loading && <Loader />}
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title} />
         <h1>{movies.title}</h1>
        <p>{movies.overview}</p>
        <ul>
        { movies.genres.map(movie => {
      return <li key={movie.id}>{movie.name}</li>
    })}
        </ul>
     </div>
       
    
    </>
    );
     }
};