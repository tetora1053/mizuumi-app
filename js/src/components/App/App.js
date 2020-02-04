import React from 'react'
import './app.css'
import Header from '../Header/Header.js'
import Menu from '../Menu/Menu.js'
import MovieTmb from '../MovieTmb/MovieTmb.js'
import MovieList from '../../containers/MovieList.js'
import Movie from '../../containers/Movie.js'
import {
  Route,
} from "react-router-dom"

const App = () => (
  <div className="app">
    <Header />
    <Menu />
    <div className="contents">
      <Route exact path="/" component={MovieList}/>
      <Route exact path="/myMovies" component={MovieList} mode="user"/>
      <Route exact path="/genres/:id" component={MovieList} mode="genre"/>
      <Route path="/movies/:id" component={Movie}/>
    </div>
  </div>
)

export default App

