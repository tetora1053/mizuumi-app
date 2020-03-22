import React from 'react'
import Logout from '../../containers/Logout'
import './Header.css'

const Header = () => (
  <header>
    <p id="title">Your Favorite Movies.</p>
    <Logout />
  </header>
)

export default Header
