import React from 'react'
import {
  Link,
} from "react-router-dom"

const MovieTmb = (props) => (
  <div className="movie">
    <img src={`http://160.16.196.72:1323/movies/${props.movieTmb.id}/thumbnail`}/>
    <p className="movieTitle">{props.movieTmb.title}</p>
    <p className="releaseDate">{props.movieTmb.releaseDate}</p>
  </div>
)

export default MovieTmb

