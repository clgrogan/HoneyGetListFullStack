import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListLi from '../components/ListLi'
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

  // Use Effect on Page Render
  useEffect(() => {
    console.log('useEffect on page render executed')
    getAllLists()
  }, [])

  return (
    <>
      <main>
        <h1>h1 in main on AllLists</h1>
        <Link to="/TheList/1">Display the list's page</Link>

        <section>
          {console.log('print array ', allLists)}
          <table>
            <tbody>
              {allLists.map(list => {
                return <ListLi key={list.id} list={list} />
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

export default AllLists
