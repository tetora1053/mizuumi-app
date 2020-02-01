import React from 'react'
import './app.css'
import Header from '../Header/Header.js'
import Menu from '../Menu/Menu.js'
import MovieTmb from '../MovieTmb/MovieTmb.js'
import Movie from '../../containers/Movie.js'
import {
  Route,
} from "react-router-dom"

class App extends React.Component {
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

    this.props.getMovies()
  }

  render() {

    const movieList = this.props.movies.map((movie) => (
      <MovieTmb movie={movie} key={movie.id} />
    ))

    const userMovieList = this.props.userMovies.map((userMovie) => (
      <MovieTmb movie={userMovie} key={userMovie.id}/>
    ))

    return (
      <div className="app">
        <Header />
        <Menu />
        <div className="contents">
          <Route exact path="/">
            {movieList}
          </Route>

          <Route exact path="/myMovies">
            {userMovieList}
          </Route>

          <Route path="/movies/:id" component={Movie} />
        </div>
      </div>
    )
  }
}

export default App

