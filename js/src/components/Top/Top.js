import React from 'react'
import './top.css'

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
      <div class="movie" key={movie.id}>
        <p class="movieTitle">{movie.title}</p>
        <p class="releaseDate">{movie.release_date}</p>
      </div>
    ));

    const userMovies = this.props.userMovies.map((userMovie) => (
      <div class="movie" key={userMovie.id}>
        <p class="movieTitle">{userMovie.title}</p>
        <p class="releaseDate">{userMovie.release_date}</p>
      </div>
    ));


    return (
      <div class="app">
        <header class="header">
          <p id="title">Your Favorite Movies.</p>
          <p id="log-out">Log out</p>
        </header>

        <div class="contents">
          <input id="select-number" type="number" defaultValue="this.props.searchId" onChange={this.changeSearchId}/>
          <div>
            <button class="button" onClick={this.props.getMovieById}>get movie by id</button>
          </div>
          <div class="movie">
            <p class="movieTitle">{this.props.movie.title}</p>
            <p class="releaseDate">{this.props.movie.releaseDate}</p>
          </div>

          <div>
            <button class="button" onClick={this.props.getMovies}>get movies</button>
          </div>
          {movies}

          <div>
            <button class="button" onClick={this.props.getMoviesByUserId.bind(this, 1)}>get movies by user_id</button>
          </div>
          {userMovies}

          <div class="test">
            <p>API実験場</p>
            <div>
              <button class="button" onClick={this.props.getMovieFromTmdb}>ファイトクラブ</button>
              <div class="movie">
                <p class="movieTitle">{this.props.movieTmdb.title}</p>
                <p class="releaseDate">{this.props.movieTmdb.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Top

