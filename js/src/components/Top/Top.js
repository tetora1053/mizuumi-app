import React from 'react'
import './top.css'
/* 01/05 add start*/
import { Box, Button, Input, AppBar, Toolbar, Typography } from '@material-ui/core';
/* 01/05 add end */

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
        {/* 01/05 UIコンポーネント置き換え start */}
        <Box className="base">
        
        <AppBar position="static" color="primary">
          <Toolbar variant="regular">
            <Typography variant="h3">
              My Favorite Movies.
            </Typography>
            <Typography variant="h6">
              mizuumi
            </Typography>
          </Toolbar>
        </AppBar>

        <Input type="number" defaultValue="this.props.searchId" onChange={this.changeSearchId}/>
        <div>
          {/* <button onClick={this.props.getMovieById}>get movie by id</button> */}
          <Button variant="contained" color="primary" onClick={this.props.getMovieById}>get movie by id</Button>
        </div>
        <div>
          <p>{this.props.movie.title}</p>
          <p>{this.props.movie.releaseDate}</p>
        </div>

        <div>
          {/* <button onClick={this.props.getMovies}>get movies</button> */}
          <Button variant="contained" color="primary" onClick={this.props.getMovies}>get movies</Button>
        </div>
        {movies}

        <div>
          <button onClick={this.props.getMoviesByUserId.bind(this, 1)}>get movies by user_id</button>
        </div>
        {userMovies}

        <div>
          <p>API実験場</p>
          <div>
            {/* <button onClick={this.props.getMovieFromTmdb}>ファイトクラブ</button> */}
            <Button variant="contained" color="secondary" onClick={this.props.getMovieFromTmdb}>ファイトクラブ</Button>
            {this.props.movieTmdb.title}
            {this.props.movieTmdb.releaseDate}
          </div>
        </div>
        </Box>
        {/* 01/05 UIコンポーネント置き換え end */}
      </div>
    )
  }
}

export default Top

