
import { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import { getPopularFilm } from "../../Api/Api"
import { generatePath } from "react-router-dom";
import { PAGE_NAME } from "router/paths";
import { Li, Div, H1, LinkLi, DivContainer } from "./Home.styled";
import { Poster } from "components/Poster/Poster";

export const Home = () => {

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
      <DivContainer>
        <H1>Trending today</H1>
        <ul> {
          movies.map(({ title, id, poster_path }) => {
            return (
              <Li key={id} >
                {title &&
                  <LinkLi to={generatePath(PAGE_NAME.movies, { id: id })}>
                    <Div>
                    <Poster poster={poster_path} />
                    </Div>
                  {title}
                  </LinkLi>
                }
              </Li>
            )
        })}
       </ul>
      </DivContainer>
    );
  };
  