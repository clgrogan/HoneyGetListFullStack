import React from 'react'
import TruncateString from './TruncateString'

// import { useTruncateString } from './useTruncateString'

const ItemRow = props => {
  const indexStart = 0 // Used for truncation
  const maxLength = 20 // Used for truncation
  console.log('The ItemRow props: ', props)
  // const [displayDescription] = useTruncateString(0, 20, props.item.description)
  // const truncateString = (s, i1, i2) => {
  //   if (s.length < i2) return s
  //   return s.slice(i1, i2) + '...'
  // }

  const incrementCount = n => {}

  // const updateItemApiCall = async e => {
  //   e.preventDefault()
  //   const apiUrl = 'https://honey-get-api.herokuapp.com/api/item/' + item.id
  //   // const apiUrl = 'https://localhost:5001/api/thelist/' + listId
  //   const resp = await axios.put(apiUrl, item)
  //   if (resp.status === 204) {
  //     alert.show(
  //       <>
  //         <p>Your list has been updated.</p>
  //       </>
  //     )
  //     setShouldRedirect(true)
  //   }
  // }

  return (
    <>
      <tr className="tableRow">
        <td className="flexLeft">
          <div className="flexCenter greenSubdued">
            <i className="far fa-check-circle"></i>
          </div>
          <div
            className={
              'flexCenter cartPriority padAroundTiny priority priority' +
              props.item.priority
            }
          >
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="flexCenter padAroundTiny">{props.item.name}</div>

          <div className="flexCenter subduedRowText">
            <TruncateString
              key={props.item.id}
              indexStart={indexStart}
              maxLength={maxLength}
              initialStr={props.item.description}
            />
          </div>
          <div className="editItem padAroundTiny halfRemFont">
            <i className="fas fa-edit"></i>
          </div>
        </td>
        {/* <td>{displayDescription}</td> // testing custom hook */}
        <td className="flexCenter">
          <div className="flexCenter">
            <i className="far fa-minus-square redSubdued"></i>
          </div>
          <div className="flexCenter marginAroundTiny">
            ({props.item.quantity})
          </div>
          <div className="flexCenter onClick={incrementCount}">
            <i className="far fa-plus-square greenSubdued"></i>
          </div>
        </td>
      </tr>
    </>
  )
}

export default ItemRow
