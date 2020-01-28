import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//ToDo Fix OnChange
// Display failure and message
// Display success, redirect to AllLists page.
const AddList = () => {
  const [list, setList] = useState({
    name: '',
    description: '',
  })

  // When successful listId will not equal zero
  const [listId, setListId] = useState(0)

  const addListApiCall = async e => {
    e.preventDefault()
    console.log('list object: ', list)
    // const apiUrl = 'https://honey-get-api.herokuapp.com/api/thelist'
    const apiUrl = 'https://localhost:5001/api/thelist'
    console.log('API Url set to:', apiUrl)
    const resp = await axios.post(apiUrl, list)
    console.log(resp)
    if (resp.status === 201) {
      setListId(resp.data.id)

      console.log('response new id: ', resp.data.id)
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
  return (
    <>
      <header>
        <nav className="headerNav">
          <ul className="navUl">
            <li className="titleLi">
              <Link className="flexCenter" to="/">
                <h1 className="titleH1" to="/">
                  <i className="backArrow far fa-arrow-alt-circle-left"></i>
                </h1>
              </Link>
              <Link className="flexCenter" to="/">
                <h1 className="oneHalfRemPadLeft titleH1">CreateNewList</h1>
              </Link>
            </li>
            <li className="optionsLi">
              <div>Cancel</div>
              <Link className="flexCenter cancel" to="/">
                <h1 className="titleH1 oneHalfRemPadLeft" to="/">
                  <i class="far fa-window-close"></i>
                </h1>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <>
          <section className="formSection flexCenter">
            <form className="addListForm" onSubmit={addListApiCall}>
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
                    maxlength="16"
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
                    maxlength="30"
                  />
                </label>
                <button className="addListBtn" type="submit">
                  <i className="fas fa-plus"></i> Create
                  <i className="oneHalfRemPadLeft fas fa-plus"></i>
                </button>
              </section>
            </form>
          </section>
        </>
      </main>
    </>
  )
}

export default AddList
