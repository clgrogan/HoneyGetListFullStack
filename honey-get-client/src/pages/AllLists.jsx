import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListRow from '../components/ListRow'
import axios from 'axios'

const AllLists = () => {
  // declare array to house the lists
  const [allLists, setAllLists] = useState([])

  // Make API call to return all lists
  const getAllLists = async () => {
    // const apiUrl = 'https://honey-get-api.herokuapp.com/api/thelist'
    const apiUrl = 'https://localhost:5001/api/thelist'
    console.log('API Url set to:', apiUrl)
    const resp = await axios.get(apiUrl)
    setAllLists(resp.data)
  }

  // sort the list
  const sortAscending = () => {
    let sortedLists = allLists.sort((a, b) =>
      a.maxpriority > b.maxpriority ? 1 : -1
    )

    console.log('Sort Ascending Function Fired. sortedLists', sortedLists)
    setAllLists([...sortedLists])
  }

  // Use Effect on Page Render
  useEffect(() => {
    console.log('useEffect on page render executed')
    getAllLists()
  }, [])

  return (
    <>
      <header>
        <nav className="headerNav">
          <ul className="navUl">
            <li className="titleLi">
              <img
                className="navImage"
                src="./images/bee.png"
                alt="Honey Get Lists Logo"
              ></img>
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
      <main>
        <section>
          <table className="listTable">
            <tbody>
              {allLists.map(list => {
                return <ListRow key={list.id} list={list} />
              })}
            </tbody>
          </table>
        </section>
        <section className="addItemSection">
          <Link className="addItemSection" to="/AddList">
            <i className="fas fa-plus"></i>
          </Link>
        </section>
      </main>
    </>
  )
}

export default AllLists
