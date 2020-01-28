import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemRow from '../components/ItemRow'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useAlert } from 'react-alert'

const List = props => {
  console.log('my props ', props)

  const [list, setList] = useState([])
  const [items, setItems] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [displayMenu, setDisplayMenu] = useState(false)
  const alert = useAlert()

  const getList = async () => {
    const apiUrl = 'https://localhost:5001/api/thelist/' + listId
    const resp = await axios.get(apiUrl)
    setList(resp.data)
    setItems(resp.data.items)
    console.log(resp)
    console.log(apiUrl)
  }

  const deleteListApiCall = async () => {
    console.log('list object: ', listId)
    // const apiUrl = 'https://honey-get-api.herokuapp.com/api/thelist'
    const apiUrl = 'https://localhost:5001/api/thelist/' + listId
    console.log('API Url set to:', apiUrl, list)
    const resp = await axios.delete(apiUrl, list)
    console.log('resp.status', resp.status)
    if (resp.status === 200) {
      alert.show('The list was deleted.')
      setShouldRedirect(true)
    }
  }

  const deleteOnClick = () => {
    // Display a confirmation pop-up and give option to continue or cancel the action
    if (window.confirm('Are you sure you wish to delete the list?')) {
      // if continue was selected , then perform the API call and redirect to lists
      deleteListApiCall()
    }
  }

  const hideDisplayMenu = () => {
    console.log(displayMenu)
    setDisplayMenu(false)
  }

  // Use effect for Page Render
  useEffect(() => {
    console.log('List.jsx UseEffect[] executed for ')
    getList()
  }, [])

  const listId = props.match.params.ListId
  const listName = props.match.params.ListName

  return shouldRedirect ? (
    <Redirect to="/"></Redirect>
  ) : (
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
              <h1 className="oneHalfRemPadLeft titleH1">{list.name}</h1>
            </li>
            <li className="optionsLi">
              <div>Priority</div>

              <button className="sortButton sortDownButton">
                <i className="fas fa-sort-amount-down"></i>
              </button>

              <div className="dropdown">
                <button
                  className="dropbtn"
                  onClick={() => setDisplayMenu(true)}
                >
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <div
                  className={`dropdown-content ${
                    displayMenu ? 'show-menu' : ''
                  } `}
                >
                  <Link to={'/UpdateList/' + listId}>Edit</Link>
                  <div className="onClickDelete" onClick={deleteOnClick}>
                    Delete
                  </div>
                  <div className="onClickExit" onClick={hideDisplayMenu}>
                    Exit
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
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
