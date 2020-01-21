import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar is-dark">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/Main">Trending</Link>
        <navbar-item has-dropdown>Genres</navbar-item>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
        </div>
      </div>
    </div>
  </div>

)



export default Navbar