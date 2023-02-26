
import { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import { getPopularFilm } from "../../Api/Api"
import { generatePath, useLocation } from "react-router-dom";
import { PAGE_NAME } from "router/paths";
import { Li, Div, H1, LinkLi, DivContainer } from "./Home.styled";
import { Poster } from "components/Poster/Poster";

export const Home = () => {

  const [ movies, setMovies ] = useState([]);

  const location = useLocation();
  
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
            return <>
              { title &&
              <Li key={id} >
                  <LinkLi to={generatePath(PAGE_NAME.movies, { id: id })} state={{ from: location }}>
                    <Div>
                    <Poster poster={poster_path} title={title}/>
                    </Div>
                  {title}
                  </LinkLi>
              </Li>}
              </>
        })}
       </ul>
      </DivContainer>
    );
  };
  