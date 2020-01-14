import React from 'react'

const TheListLi = props => {
  console.log('The List Li props: ', props)
  return (
    <>
      <tr>
        <td>{props.theList.id}</td>
        <td>{props.theList.name}</td>
        <td>{props.theList.description}</td>
      </tr>
      {/* {' '} */}
      {/* <h1>testsss</h1> */}
    </>
  )
}

export default TheListLi
