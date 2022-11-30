import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Baner.css';
import axios from '../../axios';
import requests from '../../Request';

const BanerScreen = () => {

    const [movie, setMovie] = useState([]);

    const FetchMovieData = async () => {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        )
        return request;
    }

    useEffect(() => {
        FetchMovieData();
    }, [])

    console.log(movie);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <header 
        className='baner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}>
        
        <div className='baner__contents'>
            <h1 className='baner__title'> 
            {
                movie?.title || movie?.name || movie?.original_name
            }
            </h1>
            <div className='baner__buttons'>
                <button className='baner__button'>Play</button>
                <button className='baner__button'>My List</button>
            </div>
            <h1 className='baner__description'>
                {
                    truncate(movie?.overview, 150)
                }
            </h1>
        </div>
        <div className='baner--fadeBottom' />
    </header>
  )
}

export default BanerScreen