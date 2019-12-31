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
      <div key={movie.id}>
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
      </div>
    ));

    const userMovies = this.props.userMovies.map((userMovie) => (
      <div key={userMovie.id}>
        <p>{userMovie.title}</p>
        <p>{userMovie.release_date}</p>
      </div>
    ));


    return (
      <div>
        <p id="title">MyFavoriteMovies</p>

        <input type="number" defaultValue="this.props.searchId" onChange={this.changeSearchId}/>
        <div>
          <button onClick={this.props.getMovieById}>get movie by id</button>
        </div>
        <div>
          <p>{this.props.movie.title}</p>
          <p>{this.props.movie.releaseDate}</p>
        </div>

        <div>
          <button onClick={this.props.getMovies}>get movies</button>
        </div>
        {movies}

        <div>
          <button onClick={this.props.getMoviesByUserId.bind(this, 1)}>get movies by user_id</button>
        </div>
        {userMovies}

        <div>
          <p>API実験場</p>
          <div>
            <button onClick={this.props.getMovieFromTmdb}>ファイトクラブ</button>
            {this.props.movieTmdb.title}
            {this.props.movieTmdb.releaseDate}
          </div>
        </div>

      </div>
    )
  }
}

export default Top

