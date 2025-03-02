
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';
import Banner from './Banner';
import RowPosters from './RowPosters';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  useEffect(() => {
    // Fetching the data for different categories
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY')
      .then(response => {
        setMovies(response.data.results);
      });

    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=YOUR_API_KEY')
      .then(response => {
        setTrendingMovies(response.data.results);
      });

    axios.get('https://api.themoviedb.org/3/movie/28/popular?api_key=YOUR_API_KEY')
      .then(response => {
        setActionMovies(response.data.results);
      });

    axios.get('https://api.themoviedb.org/3/movie/35/popular?api_key=YOUR_API_KEY')
      .then(response => {
        setComedyMovies(response.data.results);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <RowPosters title="Trending Now" movies={trendingMovies} />
      <RowPosters title="Action Movies" movies={actionMovies} />
      <RowPosters title="Comedy Movies" movies={comedyMovies} />
    </div>
  );
}

export default App;
