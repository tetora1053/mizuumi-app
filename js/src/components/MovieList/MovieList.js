import React from 'react'
import MovieTmb from '../MovieTmb/MovieTmb.js'
import GenreList from '../../containers/GenreList.js'
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
        break
      case `/genres/:id`:
        const { id } = this.props.match.params
        this.props.getMovieTmbsByGenreId(id)
        this.props.changeCurrentGenreId(id)
        break
      default:
        this.props.getMovieTmbs()
        break;
    }
  }

  render() {
    const movieTmbs = this.props.movieTmbs.map((movieTmb) => (
      <Link to={`/movies/${movieTmb.id}`} key={movieTmb.id}>
        <MovieTmb movieTmb={movieTmb} />
      </Link>
    ))
    return (
      <div>
        <GenreList />
        {movieTmbs}
      </div>
    )
  }
}

export default MovieList

