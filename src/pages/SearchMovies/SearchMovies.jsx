import { React, useEffect, useState } from 'react';
import { searchMoviesbyName } from "Api/Api";
import Notiflix from "notiflix";
import { generatePath, useSearchParams } from 'react-router-dom';
import { PAGE_NAME } from 'router/paths';
import { SearchDiv, Form, InputDebounce, Button, Ul, LinkLi, PosterImg } from './SearchMovies.styled';
import { Poster } from 'components/Poster/Poster';



export const SearchMovies = () => {

    const [movies, setMovies] = useState([]);
    // const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const name = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!name) {
            return;
        }

        const apiSearchMovie = async () => {
            const { results } = await searchMoviesbyName(name);

            if (!results) {
                Notiflix.Notify.info('No movies with that name:(');
                return;
            }
            setMovies(results);
        }

        apiSearchMovie().catch((error) => {
            Notiflix.Notify.warning(`Something went wrong! ${error}`);
        })
    }, [name]);

    // const inputChange = e => { 
    //     setSearchParams({ query: e.target.value.trim().toLowerCase() })
    // }

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     if (name.trim() === '') {
    //         Notiflix.Notify.info('Enter the name of the movies!');
    //         return;
    //     }
    //     setQuery(name);
    // };

    const onSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const normalizedQuery = form.elements.query.value.trim().toLowerCase();
        setSearchParams(normalizedQuery !== '' ? { query: normalizedQuery } : {});
        form.reset();
      };


    return (
        <SearchDiv>
            <Form onSubmit={onSubmit} >
                <InputDebounce
                    type="text"
                    name="query"
                    debounceTimeout={300}
                    autoFocus
                    placeholder="Search movies"
                    // onChange= {inputChange}
                />
                <Button type="submit">Search</Button>
            </Form>
    
            <Ul>
                {movies.map(({ id, poster_path, title }) => {
                    return <li key={id}>
                        <LinkLi to={generatePath(PAGE_NAME.movies, { id: id })} state={{ from: `/movies?name=${name}` }} >
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