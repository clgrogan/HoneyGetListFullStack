import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const sortAscending = () => {
    console.log('Sort Ascending Function Fired.')
  }

  return (
    <header>
      <nav className="headerNav">
        <ul className="navUl">
          <li className="titleLi">
            <Link className="titleH1" to="/">
              <h1 className="titleH1">Honey Get Lists</h1>
            </Link>
          </li>
          <li className="optionsLi">
            <div>Priority</div>

            <button
              className="sortButton sortDownButton"
              onClick={sortAscending}
            >
              <i className="fas fa-sort-amount-down"></i>
            </button>
            <button
              className="sortButton sortDownButton"
              onClick={sortAscending}
            >
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
