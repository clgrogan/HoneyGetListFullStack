import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemLi from '../components/ItemLi'

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

  return (
    <>
      <main>
        <h1>!!! The List Main !!!</h1>
        <h2>list.name from API Call: {list.name}</h2>
        <h2>list.items from API Call: {items.length}</h2>
        <section>
          {console.log('List Array from API Call: ', list)}
          <table>
            <tbody>
              {items.map(item => {
                return <ItemLi key={item.id} item={item} />
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

export default List
