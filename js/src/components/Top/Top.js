import React from 'react';
import './top.css';

const Top = (props) => {

  const changeSearchId = (e) => {
    props.handleChangeSearchId(e.target.value)
  }

  const movies = props.movies.map((movie) => (
    <div>
      <p>{movie.title}</p>
      <p>{movie.release_date}</p>
    </div>
  ));

  return (
    <div>
      <p id="title">MyFavoriteMovies</p>

      <div>
        <button onClick={props.incrementUserId}>increment UserID</button>{props.userId}
      </div>

      <div>
        <button onClick={props.incrementGroupId}>increment GroupID</button>{props.groupId}
      </div>

      <input type="number" defaultValue="props.searchId" onChange={changeSearchId}/>
      sid:{props.searchId}
      <div>
        <button onClick={props.getMovieById}>get movie by id</button>
      </div>
      <div>
        <p>{props.title}</p>
        <p>{props.release_date}</p>
      </div>

      <div>
        <button onClick={props.getMovies}>get movies</button>
      </div>
      {movies}

      <div>
        <p>API実験場</p>
        <div>
          <button onClick={props.getMovieFromTmdb}>ファイトクラブ</button>
          {props.titleTmdb}
          {props.releaseDateTmdb}
        </div>
      </div>

    </div>
  );
}

export default Top

