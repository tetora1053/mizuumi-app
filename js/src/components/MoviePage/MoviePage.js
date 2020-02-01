import React from 'react'

const MoviePage = (props) => {
  const { id } = props.match.params
  props.getMovieById(id)
  return (
    <div className="moviePage">
      <p>MoviePage</p>
      <p>{id}</p>
      <p>title:{props.title}</p>
      <p>releaseDate:{props.releaseDate}</p>
    </div>
  )
}

export default MoviePage

