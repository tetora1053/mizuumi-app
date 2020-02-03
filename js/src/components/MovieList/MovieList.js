import React from 'react'
import MovieTmb from '../MovieTmb/MovieTmb.js'
import {
  Link,
} from "react-router-dom"

class MovieList extends React.Component {

  componentDidMount() {
    switch (this.props.match.path) {
      case "/myMovies":
        /*
         * todo
         * user_idをセッションから取得する
         */
        const userId = 1
        this.props.getMovieTmbsByUserId(userId)
        break;
      default:
        this.props.getMovieTmbs()
        break;
    }
  }

  render() {
    const movieTmbs = this.props.movieTmbs.map((movieTmb) => (
      <MovieTmb movie={movieTmb} key={movieTmb.id} />
    ))
    return (
      <div>
        {movieTmbs}
      </div>
    )
  }
}

export default MovieList

