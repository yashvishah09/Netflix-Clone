import React, { useState, useEffect } from 'react';
import axios from './axios';
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //A snippet of code which runs on the specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className='row'>
      <h1>{title}</h1>

      <div className='row__posters'></div>
    </div>
  );
}

export default Row;
