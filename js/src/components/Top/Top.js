import React from 'react';
import './top.css';

const Top = (props) => {

  const incrementUserId = () => {
    props.incrementUserId()
  }

  const incrementGroupId = () => {
    props.incrementGroupId()
  }

  return (
    <div>
      <p id="title">MyFavoriteMovies</p>
      <div>
        <button onClick={incrementUserId}>increment UserID</button>{props.userId}
      </div>
      <div>
        <button onClick={incrementGroupId}>increment GroupID</button>{props.groupId}
      </div>
    </div>
  );
}

export default Top

