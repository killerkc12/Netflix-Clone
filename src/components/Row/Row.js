import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Row.css'
import axios from '../../axios';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies, setMovies] = useState([]);

    const FetchMovies = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }

    useEffect(() => {
        FetchMovies();
    }, [])

    console.log(movies)
  return (
    <div className='row'>
        <h2> { title } </h2>
        <div className='row__posters'>
            {
                movies.map((movie) => 
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img 
                            className={`row_poster 
                                ${isLargeRow && 'row_posterLarge'}`}
                            key={movie.id}
                            src = {`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt = {movie.name} 
                        />
                    )
                )
            }
        </div>
    </div>
  )
}

export default Row