import React from 'react'
import { Link } from 'react-router-dom'

const ItemLi = props => {
  console.log('The ItemLi props: ', props)
  return (
    <>
      <tr>
        <td>{props.item.id}</td>
        <td>
          {/* <Link className="ItemLink" to={'/List/' + props.item.id}> */}
          {(props.item.name, ' ', props.item.description)}
          {/* </Link> */}
        </td>
        <td>{props.item.description}</td>
      </tr>
    </>
  )
}

export default ItemLi
