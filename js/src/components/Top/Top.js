import React from 'react'
import './top.css'
import Movie from '../Movie/Movie.js'
import MoviePage from '../../containers/MoviePage.js'
import {
  Route,
  Link,
} from "react-router-dom"

class Top extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    /*
     * todo
     * user_idをセッションから取得する
     */
    const userId = 1
    this.props.getMoviesByUserId(userId)
  }

  render() {

    const movies = this.props.movies.map((movie) => (
      <Movie movie={movie} key={movie.id} />
    ))

    const userMovies = this.props.userMovies.map((userMovie) => (
      <Movie movie={userMovie} key={userMovie.id}/>
    ))

    return (
      <div className="app">
        <header className="header">
          <p id="title">Your Favorite Movies.</p>
          <p id="log-out">Log out</p>
        </header>

        <div className="contents">
          <Route exact path="/">
            <div>
              <button className="button" onClick={this.props.getMovies}>get movies</button>
            </div>
            {movies}

            <div>
              <button className="button" onClick={this.props.getMoviesByUserId.bind(this, 1)}>get movies by user_id</button>
            </div>
            {userMovies}
          </Route>
          <Route path="/movies/:id" component={MoviePage} />
        </div>
      </div>
    )
  }
}

export default Top

