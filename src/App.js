import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

// 0295702eb1a73cb04d6190ab1908f7a7

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="netflix original"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={request.fetchActionMovies} />
      <Row title=" HorrorMovies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
