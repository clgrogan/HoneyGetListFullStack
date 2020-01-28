import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemRow from '../components/ItemRow'
import { Link } from 'react-router-dom'

const List = props => {
  console.log('my props ', props)

  const [list, setList] = useState([])
  const [items, setItems] = useState([])

  const getList = async () => {
    const apiUrl = 'https://localhost:5001/api/thelist/' + listId

    const resp = await axios.get(apiUrl)
    setList(resp.data)
    setItems(resp.data.items)
    console.log(resp)
    console.log(apiUrl)
  }
  // Use effect for Page Render
  useEffect(() => {
    console.log('List.jsx UseEffect[] executed for ')
    getList()
  }, [])

  const listId = props.match.params.ListId
  const listName = props.match.params.ListName

  return (
    <>
      <header>
        <nav className="headerNav">
          <ul className="navUl">
            <li className="titleLi flexLeft">
              <Link className="titleH1" to="/">
                <h1 className="titleH1" to="/">
                  <i className="backArrow far fa-arrow-alt-circle-left"></i>
                </h1>
              </Link>
              <h1 className="titleH1">{list.name}</h1>
            </li>
            <li className="optionsLi">
              <div>Priority</div>

              <button
                className="sortButton sortDownButton"
                // onClick={sortAscending}
              >
                <i className="fas fa-sort-amount-down"></i>
              </button>

              <div class="dropdown">
                <button class="dropbtn">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-content">
                  <Link to="/AddList">Create New List</Link>
                  {/* <a href="#">Link 2</a>
                  <a href="#">Link 3</a> */}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {console.log('List Array from API Call: ', list)}
          <table className="listTable">
            <tbody>
              {items.map(item => {
                return <ItemRow key={item.id} item={item} />
              })}
            </tbody>
          </table>
        </section>
        <section className="addItemSection">
          <Link className="addItemSection" to={'/AddItem/' + listId}>
            <i className="fas fa-plus"></i>
          </Link>
        </section>
      </main>
    </>
  )
}

export default List
