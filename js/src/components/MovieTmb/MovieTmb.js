import React from 'react'
import {
  Link,
} from "react-router-dom"

const MovieTmb = (props) => (
  <div className="movie">
    <p className="movieTitle">{props.movieTmb.title}</p>
    <p className="releaseDate">{props.movieTmb.releaseDate}</p>
  </div>
)

export default MovieTmb

