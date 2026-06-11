import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://ad5ddf7e249594be78742bc2f86c63ae-859203249.us-east-1.elb.amazonaws.com/movies')
      .then((response) => {
        console.log('API response:', response.data);

        if (Array.isArray(response.data?.movies)) {
          setMovies(response.data.movies);
        } else {
          console.error('Expected { movies: [] } but got:', response.data);
          setMovies([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setMovies([]);
      });
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
