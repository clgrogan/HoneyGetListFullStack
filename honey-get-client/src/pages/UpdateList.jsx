import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { useAlert } from 'react-alert'
const UpdateList = props => {
  const [list, setList] = useState({
    id: '',
    name: '',
    description: '',
  })
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const alert = useAlert()

  const getList = async () => {
    const apiUrl = 'https://localhost:5001/api/thelist/' + listId
    const resp = await axios.get(apiUrl)
    setList(resp.data)
    console.log(resp)
    console.log(apiUrl)
  }

  const updateListApiCall = async e => {
    e.preventDefault()
    console.log('list object: ', listId)
    // const apiUrl = 'https://honey-get-api.herokuapp.com/api/thelist'
    const apiUrl = 'https://localhost:5001/api/thelist/' + listId
    console.log('API Url set to:', apiUrl)
    const resp = await axios.put(apiUrl, list)
    console.log(resp)
    if (resp.status === 204) {
      alert.show(
        <>
          <p>Your list has been updated.</p>
        </>
      )
      setShouldRedirect(true)
    }
  }

  // Handle Input onChange Method
  const handleInputOnChange = e => {
    e.persist()
    setList(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Onclick
  const cancelOnClick = () => {
    setShouldRedirect(true)
  }

  // Use effect for Page Render
  useEffect(() => {
    console.log('UpdateList.jsx UseEffect[] executed for ')
    getList()
  }, [])

  const listId = props.match.params.ListId

  return shouldRedirect ? (
    <Redirect to={'/list/' + listId}></Redirect>
  ) : (
    <>
      <header>
        <nav className="headerNav">
          <ul className="navUl">
            <li className="titleLi">
              <Link className="flexCenter" to={'/List/' + listId}>
                <h1 className="titleH1">
                  <i className="backArrow far fa-arrow-alt-circle-left"></i>
                </h1>
              </Link>
              <Link className="flexCenter" to="/">
                <h1 className="oneHalfRemPadLeft titleH1">{list.name}</h1>
              </Link>
            </li>
            <li className="optionsLi">
              <div>Editing</div>
              <Link className="flexCenter cancel" to="/">
                <h1 className="titleH1 oneHalfRemPadLeft" to="/">
                  <i className="far fa-window-close"></i>
                </h1>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <>
          <section className="formSection flexCenter">
            <form className="addListForm" onSubmit={updateListApiCall}>
              <section className="formInputSection addSection flexCenter">
                <label className="addLabel">
                  {/* <div className="padLeft"> */}
                  <input
                    className="inputClass"
                    type="text"
                    name="name"
                    id="listName"
                    placeholder="Enter list name"
                    value={list.name}
                    onChange={handleInputOnChange}
                    autoFocus
                    maxLength="16"
                    required
                  />
                  {/* </div> */}
                </label>
                <label className="addLabel">
                  <input
                    className="inputClass"
                    type="text"
                    name="description"
                    id="listDescription"
                    placeholder="Description optional..."
                    value={list.description}
                    onChange={handleInputOnChange}
                    maxLength="30"
                  />
                </label>
                <div className="flexCenter">
                  <button className="updateListBtn" onClick={cancelOnClick}>
                    Cancel
                  </button>
                  <button className="updateListBtn" type="submit">
                    Save
                  </button>
                </div>
              </section>
            </form>
          </section>
        </>
      </main>
    </>
  )
}
export default UpdateList
