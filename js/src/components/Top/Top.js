import React from 'react';
import './top.css';

class Top extends React.Component {
  componentDidMount() {
    /*
     * todo
     * user_idをセッションから取得する
     */
    const user_id = 1
    this.props.getMoviesByUserId(user_id)
  }

  changeSearchId(e) {
    this.props.handleChangeSearchId(e.target.value)
  }
  render() {

    const movies = this.props.movies.map((movie) => (
      <div>
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
      </div>
    ));

    const user_movies = this.props.user_movies.map((user_movie) => (
      <div key={user_movie.id}>
        <p>{user_movie.title}</p>
        <p>{user_movie.release_date}</p>
      </div>
    ));


    return (
      <div>
        <p id="title">MyFavoriteMovies</p>

        <div>
          <button onClick={this.props.incrementUserId}>increment UserID</button>{this.props.userId}
        </div>

        <div>
          <button onClick={this.props.incrementGroupId}>increment GroupID</button>{this.props.groupId}
        </div>

        <input type="number" defaultValue="this.props.searchId" onChange={this.changeSearchId}/>
        sid:{this.props.searchId}
        <div>
          <button onClick={this.props.getMovieById}>get movie by id</button>
        </div>
        <div>
          <p>{this.props.title}</p>
          <p>{this.props.release_date}</p>
        </div>

        <div>
          <button onClick={this.props.getMovies}>get movies</button>
        </div>
        {movies}

        <div>
          <button onClick={this.props.getMoviesByUserId.bind(this, 1)}>get movies by user_id</button>
        </div>
        {user_movies}

        <div>
          <p>API実験場</p>
          <div>
            <button onClick={this.props.getMovieFromTmdb}>ファイトクラブ</button>
            {this.props.titleTmdb}
            {this.props.releaseDateTmdb}
          </div>
        </div>

      </div>
    );

  }
}

export default Top

