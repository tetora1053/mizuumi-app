import React from 'react';
import {
  Route,
  Link,
} from "react-router-dom"
import './Menu.css'

const Menu = () => (
  <div class="menu">
    <Link to="/">
      <div class="menuList">movies</div>
    </Link>
    <Link to="/myMovies">
      <div class="menuList">my movies</div>
    </Link>
  </div>
)

export default Menu

