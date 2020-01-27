import React from 'react'
import { Link } from 'react-router-dom'
import TruncateString from './TruncateString'
import useTruncateString from './useTruncateString'

const ListRow = props => {
  const indexStart = 0 // Used for truncation
  const maxLength = 20 // Used for truncation
  console.log('The List Li props: ', props)
  return (
    <>
      <tr className="tableRow">
        <td className="flexLeft">
          <Link className="listLink" to={'/List/' + props.list.id}>
            {props.list.name}
          </Link>
          <Link className="listLink" to={'/List/' + props.list.id}>
            <div className="notForMobile oneHalfRemPadLeft subduedRowText">
              <TruncateString
                key={props.list.id}
                indexStart={indexStart}
                maxLength={maxLength}
                initialStr={props.list.description}
              />
            </div>
          </Link>
        </td>
        <td className={'priority priority' + props.list.maxpriority}>
          <Link className="listLink" to={'/List/' + props.list.id}>
            {props.list.itemcount}
          </Link>
        </td>
      </tr>
    </>
  )
}

export default ListRow
