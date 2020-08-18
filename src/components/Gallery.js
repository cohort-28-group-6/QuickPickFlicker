import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = (props) => {
  const { 
    movies, 
    saveMovie, 
  } = props

  return (
    <div className="catalogue">
      {
        movies.map((movie) => {
          return (
            <div key={movie.id} className="movie">
              <Link to={`/movie/${movie.id}`}>
                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`Movie poster for ${movie.original_title}`} />
              </Link>
              <button onClick={() => saveMovie(movie.id)}>SAVE</button> 
            </div>
          );
        })
      }
    </div>
  );
}

export default Gallery;