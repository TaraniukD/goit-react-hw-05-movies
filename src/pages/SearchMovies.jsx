import React from 'react';
import { searchMoviesbyName } from "Api/Api";
import Notiflix from "notiflix";
import { useEffect } from "react";
import { useState } from "react"

export const SearchMovies = () => {

    const [movies, setMovies] = useState([]);
    const [ query, setQuery ] = useState('')
    const [name, setName] = useState('');
    
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


    const inputSearch = (e) => {
        setQuery(e.currentTarget.value);
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
        <form onSubmit={formSubmit}>
            <input type="text" name="query" autoFocus placeholder="Search movies" onChange={inputSearch}/>
            <button type="submit">Search</button>
        </form>
    )


}