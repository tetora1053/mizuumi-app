import React from 'react'

const Movie = (props) => (
  <div className="movie">
    <p className="movieTitle">{props.movie.title}</p>
    <p className="releaseDate">{props.movie.releaseDate}</p>
  </div>
)

export default Movie

