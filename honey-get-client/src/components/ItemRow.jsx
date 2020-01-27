import React from 'react'
import TruncateString from './TruncateString'

// import { useTruncateString } from './useTruncateString'

const ItemRow = props => {
  const indexStart = 0 // Used for truncation
  const maxLength = 20 // Used for truncation
  console.log('The ItemRow props: ', props)
  // const [displayDescription] = useTruncateString(0, 20, props.item.description)
  const truncateString = (s, i1, i2) => {
    if (s.length < i2) return s
    return s.slice(i1, i2) + '...'
  }
  return (
    <>
      <tr className="tableRow">
        <td className="flexLeft">
          <div>{props.item.name}</div>

          <div className="notForMobile oneHalfRemPadLeft subduedRowText">
            <TruncateString
              key={props.item.id}
              indexStart={indexStart}
              maxLength={maxLength}
              initialStr={props.item.description}
            />
          </div>
        </td>
        {/* <td>{displayDescription}</td> // testing custom hook */}
        <td className={'priority priority' + props.item.priority}>
          {props.item.quantity}
        </td>
      </tr>
    </>
  )
}

export default ItemRow
