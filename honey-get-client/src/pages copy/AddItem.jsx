import React, { useState, useEffect } from 'react'
import axios from 'axios'
//ToDo Fix OnChange
// Display failure and message
// Display success, redirect to List page.
const AddItem = props => {
  console.log('addItem props: ', props)
  const [item, setItem] = useState({
    thelistid: parseInt(props.match.params.ListId),
    name: '',
    description: '',
    priority: 2,
  })

  // When successful itemId will != 0
  const [itemId, setItemId] = useState(0)
  const [numberTest, setNumberTest] = useState(2)
  const AddItemApiCall = async e => {
    e.preventDefault()
    console.log('item object: ', item)
    // const apiUrl = 'https://honey-get-api.herokuapp.com/api/item'
    const apiUrl = 'https://localhost:5001/api/item'
    console.log('API Url set to:', apiUrl, item)
    const resp = await axios.post(apiUrl, {
      ...item,
      priority: parseInt(numberTest),
    })
    console.log(resp.status)
    if (resp.status === 201) {
      setItemId(resp.data.id)
      console.log('response new id: ', resp.data.id)
    }
  }

  // Handle Input onChange Method
  const handleInputOnChange = e => {
    e.persist()
    setItem(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <>
      <main>
        <section className="formSection flexCenter">
          <form className="AddItemForm" onSubmit={AddItemApiCall}>
            <section className="formInputSection addSection flexCenter">
              <label className="addLabel">
                <div className="padLeft">
                  <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={item.name}
                    onChange={handleInputOnChange}
                    autoFocus
                    required
                  />
                </div>
              </label>
              <label className="addLabel">
                <div className="padLeft">
                  <input
                    type="text"
                    name="description"
                    id="itemDescription"
                    placeholder="Description optional..."
                    value={item.description}
                    onChange={handleInputOnChange}
                  />
                </div>
              </label>
              <div>
                Priority:
                <select
                  type="number"
                  name="priority"
                  defaultValue="2"
                  onChange={e => setNumberTest(e.target.value)}
                >
                  <option value="1">Low</option>
                  <option value="2">Normal</option>
                  <option value="3">High</option>
                </select>
              </div>
              <button className="addBtn" type="submit">
                <i className="fas fa-plus"></i>
              </button>
            </section>
          </form>
        </section>
      </main>
    </>
  )
}

export default AddItem
