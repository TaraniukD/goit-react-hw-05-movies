
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { getInfoByFilm } from "../../Api/Api";
import { Loader } from "components/Loader/Loader";
import { Poster } from "components/Poster/Poster";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ status, setStatus ] = useState('idle');

  useEffect(() => {
 
    setLoading(true);
    setStatus('loading');

    const apiDetailsMovie = async () => {
      const results = await getInfoByFilm(id);

      if (results === 0) {
        Notiflix.Notify.info('Sorry, No video list :(');
        // setLoading(false);
        return;
      }
      setMovies( results  );
      // setLoading(false);
      setStatus('fulfilled');
    }

    apiDetailsMovie()
    .catch((error) => {
      Notiflix.Notify.warning(`Something went wrong! ${error}`);
      setStatus('error');
    })
    .finally(() => {
      setLoading(false);
    });
    
  }, [id]);

  if (status === 'idle' || loading) {
    return <Loader />
  }

  if ( status === 'error') {
    return <> Error, Something went wrong!</>
  }

  const { poster_path, title, overview, genres } = movies;

  return (
      <div>
        <div>
        <Poster poster={poster_path} title={title} />
        </div>
        <h1>{title}</h1>
        <p>{overview}</p>
        <ul>
        { genres.map(movie => {
          return <li key={movie.id}>{movie.name}</li>
         })}
        </ul>
     </div>
    );   
};