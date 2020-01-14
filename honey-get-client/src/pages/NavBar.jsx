import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Show All Lists</Link>
          </li>
          <li className="titleNavLi">
            <h1 className="titleH1">Honey Get List</h1>
          </li>
          <li>
            <Link to="/AddList">Add a new list</Link>
          </li>
          <li>
            <Link to="/TheList/1">Display the list's page</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
