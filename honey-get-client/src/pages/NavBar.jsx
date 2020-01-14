import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav class="headerNav">
        <ul class="navUl">
          <li class="titleLi">
            <Link className="titleH1" to="/">
              <h1 class="titleH1">Honey Get List</h1>
            </Link>
          </li>
          <li class="optionsLi">
            <p>Priority</p>
            <button class="sortButton sortDownButton">
              <i class="fas fa-sort-amount-down"></i>
            </button>
            <button class="menuButton">
              <Link to="/AddList">
                <i class="fas fa-ellipsis-v"></i>
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
