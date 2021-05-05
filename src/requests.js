const API_KEY = '808a6944356c06f03006aa0c5ecbaaac';

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
};

export default requests;
