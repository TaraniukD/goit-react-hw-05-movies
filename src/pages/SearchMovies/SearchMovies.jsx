import { React, useEffect, useState } from 'react';
import { searchMoviesbyName } from "Api/Api";
import Notiflix from "notiflix";
import { generatePath, useSearchParams } from 'react-router-dom';
import { PAGE_NAME } from 'router/paths';
import { SearchDiv, Button, Ul, Input, LinkLi, PosterImg } from './SearchMovies.styled';
import { Poster } from 'components/Poster/Poster';

export const SearchMovies = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!query) {
            return;
        };

        const apiSearchMovie = async () => {
            const { results } = await searchMoviesbyName(query);

            if (!results) {
                Notiflix.Notify.info('No data in the request!');
                return;
            }
            setMovies(results);
        };

        apiSearchMovie().catch((error) => {
            Notiflix.Notify.warning(`Something went wrong! ${error}`);
        });
    }, [query]);

    const formSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.query.value.trim().toLowerCase();

        if (value.trim() === '') {
            Notiflix.Notify.info('Enter the name of the movies!');
            return;
        };
        
        setSearchParams( value ? { query: value } : {});
        e.target.reset();
    };

    return (
        <SearchDiv>
            <form onSubmit={formSubmit} >
                <Input
                    type="text"
                    name="query"
                    autoFocus
                    placeholder="Search movies"
                />
                <Button type="submit">Search</Button>
            </form>
    
            <Ul>
                {movies.map(({ id, poster_path, title }) => {
                    return <li key={id}>
                        <LinkLi 
                         to={generatePath(PAGE_NAME.movies, { id: id })}
                         state={{ from: `${PAGE_NAME.search}?query=${query}` }} >
                            <PosterImg>
                                <Poster poster={poster_path} title={title} />
                            </PosterImg>
                            <p>{title}</p>
                        </LinkLi>
                    </li>
                })}
            </Ul>
        </SearchDiv>
    );
};

export default SearchMovies;