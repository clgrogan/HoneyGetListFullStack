import React from 'react'
import { Link } from 'react-router-dom'
import ShowLists from '../components/ShowLists'
import axios from 'axios'

const AllLists = () => {
  return (
    <>
      <main>
        <h1>h1 in main on AllLists</h1>
        <Link to="/TheList/1">Display the list's page</Link>
      </main>
    </>
  )
}

export default AllLists
