import React from 'react'
import { Link } from 'react-router-dom'

const ListLi = props => {
  console.log('The List Li props: ', props)
  return (
    <>
      <tr className="tableRow">
        <td>{props.list.id}</td>
        <td>
          <Link className="listLink" to={'/List/' + props.list.id}>
            {props.list.name}
          </Link>
        </td>
        <td>{props.list.description}</td>
        <td>{props.list.itemcount}</td>
        <td>{props.list.maxpriority}</td>
      </tr>
    </>
  )
}

export default ListLi
