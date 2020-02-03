import React from 'react'

const Movie = (props) => {
  const { id } = props.match.params
  props.getMovieById(id)
  return (
    <div className="moviePage">
      <p>MoviePage</p>
      <p>{id}</p>
      <p>{props.title}</p>
      <p>{props.overview}</p>
      <p>{props.releaseDate}</p>
    </div>
  )
}

export default Movie

