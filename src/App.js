import './App.css';
import Row from './Row';
import requests from './requests';
import NavBar from './NavBar';
import Banner from './Banner';

const {
  fetchActionMovies,
  fetchComedyMovies,
  fetchDocumentariesMovies,
  fetchHorrorMovies,
  fetchNetflixOriginals,
  fetchRomanceMovies,
  fetchTopRated,
  fetchTrending
} = requests;

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={fetchTrending} />
      <Row title='Top Rated' fetchUrl={fetchTopRated} />
      <Row title='Action' fetchUrl={fetchActionMovies} />
      <Row title='Comedy' fetchUrl={fetchComedyMovies} />
      <Row title='Horror' fetchUrl={fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
