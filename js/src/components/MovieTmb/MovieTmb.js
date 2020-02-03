import React from 'react'
import {
  Link,
} from "react-router-dom"

const MovieTmb = (props) => (
  <Link to={`/movies/${props.movie.id}`}>
    <div className="movie">
      <p className="movieTitle">{props.movie.title}</p>
      <p className="releaseDate">{props.movie.releaseDate}</p>
    </div>
  </Link>
)

export default MovieTmb

