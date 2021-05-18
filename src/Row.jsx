import React, { useState, useEffect } from 'react';
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [tralierUrl, setTrailerUrl] = useState('');

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

  const handleClick = (movie) => {
    console.log(movie);

    if (tralierUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          // https://www.youtube.com/watch?v=Lpjcm1F8tY8
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <div className='row'>
      <h1>{title}</h1>

      <div className='row__posters'>
        {movies.map((movie) => (
          // https://image.tmdb.org/t/p/original/rEm96ib0sPiZBADNKBHKBv5bve9.jpg

          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__image ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.original_title}
          />
        ))}
      </div>
      <div style={{ padding: '40px' }}>{tralierUrl && <Youtube videoId={tralierUrl} opts={opts} />}</div>
    </div>
  );
}

export default Row;
