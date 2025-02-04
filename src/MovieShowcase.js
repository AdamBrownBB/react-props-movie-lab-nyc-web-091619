import React from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

class MovieShowcase extends React.Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie, index) => <MovieCard
      key={index}
      title={movie.title}
      IMDBRating={movie.IMDBRating}
      genres={movie.genres}
      poster={movie.poster}
    />)
  }


  render() {
    return  <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    
  }
}

export default MovieShowcase

