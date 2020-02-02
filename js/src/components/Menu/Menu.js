import React from 'react';
import {
  Route,
  Link,
} from "react-router-dom"

const Menu = () => (
  <div>
    <Link to="/">
      <div>movies</div>
    </Link>
    <Link to="/myMovies">
      <div>My movies</div>
    </Link>
  </div>
)

export default Menu

