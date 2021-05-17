import axios from './axios';
import React, { useState, useEffect } from 'react';
import requests from './requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]); //[..., ..., ...,]

      return request;
    }
    fetchData();
  }, []);

  function truncateString(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + '...' : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    >
      {/* Background Image */}
      <div className='banner__contents'>
        {/* title */}
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name || movie?.original_title}</h1>

        <div className='banner__buttons'>
          {/* PlayButton */}
          {/* MyListButton */}
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        {/* description */}
        <h1 className='banner__description'>{truncateString(movie?.overview, 150)}</h1>
      </div>

      <div className='banner__fadeBottom' />
    </header>
  );
}

export default Banner;
