import { React, useEffect, useState } from 'react';
import { searchMoviesbyName } from "Api/Api";
import Notiflix from "notiflix";
import { generatePath, useSearchParams } from 'react-router-dom';
import { PAGE_NAME } from 'router/paths';
import { SearchDiv, InputDebounce, Button, Ul, LinkLi, PosterImg } from './SearchMovies.styled';
import { Poster } from 'components/Poster/Poster';

export const SearchMovies = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const searchName = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!query) {
            return;
        }

        const apiSearchMovie = async () => {
            const { results } = await searchMoviesbyName(query);

            if (!results) {
                Notiflix.Notify.info('No movies with that name:(');
                return;
            }
            setMovies(results);
        }

        apiSearchMovie().catch((error) => {
            Notiflix.Notify.warning(`Something went wrong! ${error}`);
        })
    }, [query]);

    const inputChange = e => { 
       const value = e.target.value.trim().toLowerCase();
        setSearchParams( value ? { query: value } : {})
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (searchName.trim() === '') {
            Notiflix.Notify.info('Enter the name of the movies!');
            return;
        }
        
        setQuery(searchName);
    };

    return (
        <SearchDiv>
            <form onSubmit={formSubmit} >
                <InputDebounce
                    type="text"
                    name="query"
                    debounceTimeout={300}
                    autoFocus
                    placeholder="Search movies"
                    onChange= {inputChange}
                />
                <Button type="submit">Search</Button>
            </form>
    
            <Ul>
                {movies.map(({ id, poster_path, title }) => {
                    return <li key={id}>
                        <LinkLi to={generatePath(PAGE_NAME.movies, { id: id })} state={{ from: `${PAGE_NAME.search}?query=${query}` }} >
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