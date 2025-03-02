import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <img
        className="movieCard__poster"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.name}
      />
    </div>
  );
};

export default MovieCard;
