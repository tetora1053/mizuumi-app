import React from 'react';
import './top.css';

const Top = (props) => {

  return (
    <div>
      <p id="title">MyFavoriteMovies</p>
      <div>
        <button onClick={props.incrementUserId}>increment UserID</button>{props.userId}
      </div>
      <div>
        <button onClick={props.incrementGroupId}>increment GroupID</button>{props.groupId}
      </div>
    </div>
  );
}

export default Top

