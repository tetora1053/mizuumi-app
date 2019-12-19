import React from 'react';
import './top.css';

const Top = (props) => {

  const changeSearchId = (e) => {
    props.handleChangeSearchId(e.target.value)
  }

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
        <p>{props.released}</p>
      </div>
    </div>
  );
}

export default Top

