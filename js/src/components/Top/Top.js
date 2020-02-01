import React from 'react'
import './top.css'
import Movie from '../Movie/Movie.js'

class Top extends React.Component {
  constructor() {
    super()
    this.changeSearchId = this.changeSearchId.bind(this)
  }

  componentDidMount() {
    /*
     * todo
     * user_idをセッションから取得する
     */
    const userId = 1
    this.props.getMoviesByUserId(userId)
  }

  changeSearchId(e) {
    this.props.handleChangeSearchId(e.target.value)
  }

  render() {

    const movies = this.props.movies.map((movie) => (
      <Movie movie={movie} />
    ))

    const userMovies = this.props.userMovies.map((userMovie) => (
      <Movie movie={userMovie} />
    ))

    return (
      <div className="app">
        <header className="header">
          <p id="title">Your Favorite Movies.</p>
          <p id="log-out">Log out</p>
        </header>

        <div className="contents">
          <input id="select-number" type="number" defaultValue="this.props.searchId" onChange={this.changeSearchId}/>
          <div>
            <button className="button" onClick={this.props.getMovieById}>get movie by id</button>
          </div>
          <Movie movie={this.props.movie} />

          <div>
            <button className="button" onClick={this.props.getMovies}>get movies</button>
          </div>
          {movies}

          <div>
            <button className="button" onClick={this.props.getMoviesByUserId.bind(this, 1)}>get movies by user_id</button>
          </div>
          {userMovies}

          <div className="test">
            <p>API実験場</p>
            <div>
              <button className="button" onClick={this.props.getMovieFromTmdb}>ファイトクラブ</button>
              <Movie movie={this.props.movieTmdb} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Top

