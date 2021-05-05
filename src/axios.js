import axios from 'axios';

//base url to be created to make the request to the tmdb

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

//instance.get('/trending/all/day?api_key=${API_KEY}&language=en-US');
//https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US

export default instance;
