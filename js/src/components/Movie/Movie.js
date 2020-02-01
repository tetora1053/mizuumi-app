import React from 'react'

const Movie = (props) => {
  console.log(props.movie)
  return (
  <div className="movie" key={props.movie.id}>
    <p className="movieTitle">{props.movie.title}</p>
    <p className="releaseDate">{props.movie.releaseDate}</p>
  </div>
  )
}

export default Movie

