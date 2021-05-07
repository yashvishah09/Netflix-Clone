import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  //A snippet of code which runs on the specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      // console.log(request);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className='row'>
      <h1>{title}</h1>

      <div className='row__posters'>
        {movies.map((movie) => (
          // https://image.tmdb.org/t/p/original/rEm96ib0sPiZBADNKBHKBv5bve9.jpg

          <img
            key={movie.id}
            className={`row__image ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
