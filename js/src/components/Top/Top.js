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
      <div className="movie" key={movie.id}>
        <p className="movieTitle">{movie.title}</p>
        <p className="releaseDate">{movie.release_date}</p>
      </div>
    ));

    const userMovies = this.props.userMovies.map((userMovie) => (
      <div className="movie" key={userMovie.id}>
        <p className="movieTitle">{userMovie.title}</p>
        <p className="releaseDate">{userMovie.release_date}</p>
      </div>
    ));


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
          <div className="movie">
            <p className="movieTitle">{this.props.movie.title}</p>
            <p className="releaseDate">{this.props.movie.releaseDate}</p>
          </div>

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
              <div className="movie">
                <p className="movieTitle">{this.props.movieTmdb.title}</p>
                <p className="releaseDate">{this.props.movieTmdb.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Top

