import React, { useContext } from 'react';
import MovieContext from '../contexts/MovieContext';

function MoviesList() {
  const { movies, setMovies } = useContext(MovieContext);

  return (
    <div>
      <h1>MoviesList</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movies.movie_id}>
            {movie.title} ({movie.release_year})
          </li>
        ))}
      </ul>
      {movies.length < 4 && (
        <button
          onClick={() => {
            setMovies([
              ...movies,
              {
                movie_id: 4,
                title: 'Harry Potter and the Goblet of Fire',
                release_year: 2005,
              },
            ]);
          }}
        >
          More
        </button>
      )}
    </div>
  );
}

export default MoviesList;
