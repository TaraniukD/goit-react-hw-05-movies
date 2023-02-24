import { React, useEffect, useState } from 'react';
import { searchMoviesbyName } from "Api/Api";
import Notiflix from "notiflix";
import { Link, generatePath } from 'react-router-dom';
import { PAGE_NAME } from 'router/paths';
import { SearchDiv, Form, InputDebounce, Button, Ul, LinkLi, PosterImg } from './SearchMovies.styled';
import { Poster } from 'components/Poster/Poster';

export const SearchMovies = () => {

    const [movies, setMovies] = useState([]);
    const [name, setName] = useState('');
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        if (!name) {
            return;
        }
        
    const apiSearchMovie = async () => {
        const { results } = await searchMoviesbyName(name);

        if ( results === 0) {
        Notiflix.Notify.info('No movies with that name:(');
        return;
        }
        setMovies(results);
        }

        apiSearchMovie().catch(error => error)
    }, [name])


    const inputChange = (e) => {
        setQuery(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            Notiflix.Notify.info('Enter the name of the movies!');
            return;
        }

        setName(query);
        
    }
    console.log(name)
    console.log(movies)
    
    return (
        <SearchDiv>
        <Form onSubmit={formSubmit}>
            <InputDebounce
            type="text"
            name="query"
            debounceTimeout={300}
            value={name}
            autoFocus
            placeholder="Search movies"
            onChange={inputChange}
            />
            <Button type="submit">Search</Button>
        </Form>
    
            <Ul>
                { movies.map(({ id, poster_path, title}) => {
                  return  <li key={id}>
                    <LinkLi to={generatePath(PAGE_NAME.movies, {id: id})}>
                        <PosterImg>
                       <Poster  poster={poster_path} title={title}/>
                       </PosterImg>
                       <p>{title}</p>
                    </LinkLi>
                    </li>
                }) }
            </Ul>

        </SearchDiv>
    )


}