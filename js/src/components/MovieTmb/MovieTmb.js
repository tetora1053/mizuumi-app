import React from 'react'
import {
  Link,
} from "react-router-dom"

const MovieTmb = (props) => (
  <div className="movie">
    <img src={`http://api.mizuumi.tetora1053.jp/movies/${props.movieTmb.id}/thumbnail`}/>
    <p className="movieTitle">{props.movieTmb.title}</p>
    <p className="releaseDate">{props.movieTmb.releaseDate}</p>
  </div>
)

export default MovieTmb

