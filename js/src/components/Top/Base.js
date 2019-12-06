import React from 'react';
import './top.css';

const Top = (props) => {

  const incrementUserId = () => {
    props.incrementUserId()
    console.log(props)
  }

  const incrementGroupId = () => {
    props.incrementGroupId()
    console.log(props)
  }

  return (
    <div>
      <p id="title">MyFavoriteMovies</p>
      <button onClick={incrementUserId}>increment UserID</button>
      <button onClick={incrementGroupId}>increment GroupID</button>
    </div>
  );
}

export default Top

