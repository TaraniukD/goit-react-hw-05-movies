
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { getInfoByFilm } from "../../Api/Api";
import { Loader } from "components/Loader/Loader";
import { Poster } from "components/Poster/Poster";
import { FilmInfo } from "components/FilmInfo/FilmInfo";
import { PosterDiv, Div, PageLink } from "./MovieDetails.styled";


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

  const { poster_path, title, overview, genres, popularity } = movies;

  return <>
      <Div>
        <PosterDiv>
        <Poster
          poster={poster_path}
          title={title} />
      </PosterDiv>
      <FilmInfo
        title={title}
        overview={overview}
        genres={genres}
        popularity={popularity} />
    </Div>
    <div>
      <h3>Additional information</h3>
      <PageLink to="cast">Cast</PageLink>
      <PageLink to="reviews">Reviews</PageLink>
    </div>
    <Outlet />
    </>
      
};