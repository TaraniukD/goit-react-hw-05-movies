
import { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import { getPopularFilm } from "../Api/Api"
import { generatePath, Link } from "react-router-dom";
import { PAGE_NAME } from "router/paths";

export function Home () {

  const [ movies, setMovies ] = useState([]);
  

  useEffect(() => {
      const apiDataMovie = async () => {
        const { results } = await getPopularFilm();
        
        if ( results === 0) {
        Notiflix.Notify.info('Sorry, No video list :(');
        return;
        }
        
      setMovies(results);
      };

      apiDataMovie().catch((error) => {
      Notiflix.Notify.warning(`Something went wrong! ${error}`);
    });
},[])

    return (
      <main>
        <h1>Trending today</h1>
        <ul> {
          movies.map(({ title, id, overview, genre_ids  }) => {
            return (
              <li key={id} style={{ display: 'block' }} overview={overview} genre_ids={genre_ids}>
                <Link to={generatePath(PAGE_NAME.movies, {id: id})}>{title}</Link>
              </li>
            )
        })}
        
       </ul>
      </main>
    );
  };
  