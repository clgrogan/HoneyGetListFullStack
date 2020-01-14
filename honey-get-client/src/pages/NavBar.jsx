import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav className="headerNav">
        <ul className="navUl">
          <li className="titleLi">
            <Link className="titleH1" to="/">
              <h1 className="titleH1">Honey Get List</h1>
            </Link>
          </li>
          <li className="optionsLi">
            <p>Priority</p>
            <button className="sortButton sortDownButton">
              <i className="fas fa-sort-amount-down"></i>
            </button>
            <button className="menuButton">
              <Link to="/AddList">
                <i className="fas fa-ellipsis-v"></i>
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
