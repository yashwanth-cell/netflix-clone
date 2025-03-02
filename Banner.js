import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY')
      .then(response => {
        const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
        setMovie(randomMovie);
      });
  }, []);

  return (
    <header className="banner" style={{
      backgroundSize: 'cover',
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      backgroundPosition: 'center center'
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie.title || movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie.overview}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
