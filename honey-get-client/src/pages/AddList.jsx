import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
      <main>
        <>
          <section className="formSection flexCenter">
            <form className="addListForm" onSubmit={addListApiCall}>
              <section className="formInputSection addSection flexCenter">
                <label className="addLabel">
                  <div>List Name:</div>
                  <div className="padLeft">
                    <input
                      type="text"
                      name="name"
                      id="listName"
                      placeholder="Name Required..."
                      value={list.name}
                      onChange={handleInputOnChange}
                      autoFocus
                      required
                    />
                  </div>
                </label>
                <label className="addLabel">
                  <div>Description: </div>
                  <div className="padLeft">
                    <input
                      type="text"
                      name="description"
                      id="listDescription"
                      placeholder="Description optional..."
                      value={list.description}
                      onChange={handleInputOnChange}
                    />
                  </div>
                </label>
                <button className="addListBtn" type="submit">
                  <i className="fas fa-plus"></i>
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
