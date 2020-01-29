import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { useAlert } from 'react-alert'
const AddItem = props => {
  console.log('addItem props: ', props)
  const [item, setItem] = useState({
    thelistid: parseInt(props.match.params.ListId),
    name: '',
    description: '',
    quantity: 1,
    priority: 2,
  })
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const alert = useAlert()

  // When successful itemId will != 0
  const [itemId, setItemId] = useState(0)
  const [priority, setPriority] = useState(2)
  const [quantity, setQuantity] = useState(1)

  const AddItemApiCall = async e => {
    e.preventDefault()
    const apiUrl = 'https://honey-get-api.herokuapp.com/api/item'
    // const apiUrl = 'https://localhost:5001/api/item'
    console.log(
      'API Url set to:',
      apiUrl,
      parseInt(priority),
      parseInt(quantity),
      item
    )
    const resp = await axios.post(apiUrl, {
      ...item,
      priority: parseInt(priority),
      quantity: parseInt(quantity),
    })
    console.log(resp.status)
    if (resp.status === 201) {
      setItemId(resp.data.id)
      alert.show(
        <>
          <p>The item was created.</p>
        </>
      )
      setShouldRedirect(true)
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
  return shouldRedirect ? (
    <Redirect to={'/List/' + item.thelistid}></Redirect>
  ) : (
    <>
      <header>
        <nav className="headerNav">
          <ul className="navUl">
            <li className="titleLi">
              <Link className="flexCenter" to={'/List/' + item.thelistid}>
                <h1 className="titleH1">
                  <i className="backArrow far fa-arrow-alt-circle-left"></i>
                </h1>
              </Link>
              <Link className="flexCenter" to="/">
                <h1 className="oneHalfRemPadLeft titleH1">Add Item</h1>
              </Link>
            </li>
            <li className="optionsLi">
              <div>Cancel</div>
              <Link
                className="flexCenter cancel"
                to={'/List/' + item.thelistid}
              >
                <h1 className="titleH1 oneHalfRemPadLeft" to="/">
                  <i className="far fa-window-close"></i>
                </h1>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

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
              <label className="addLabel">
                <div className="padLeft">
                  <input
                    type="number"
                    min="0"
                    name="quantity"
                    // value={item.quantity}
                    defaultValue="1"
                    // onChange={handleInputOnChange}
                    onChange={e => setQuantity(e.target.value)}
                  />
                </div>
              </label>
              <div className="flexCenter">
                Priority:
                <div
                  className={
                    'flexCenter cartPriority priority marginAroundTiny priority' +
                    priority
                  }
                >
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <select
                  type="number"
                  name="priority"
                  defaultValue="2"
                  onChange={e => setPriority(e.target.value)}
                >
                  <option value="1">Low</option>
                  <option value="2">Normal</option>
                  <option value="3">High</option>
                </select>
              </div>
              <button className="addListBtn" type="submit">
                <i className="fas fa-plus"></i> Create
                <i className="oneHalfRemPadLeft fas fa-plus"></i>
              </button>
            </section>
          </form>
        </section>
      </main>
    </>
  )
}

export default AddItem
