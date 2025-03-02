import React from 'react';
import './RowPosters.css';
import MovieCard from './MovieCard';

const RowPosters = ({ title, movies }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RowPosters;
