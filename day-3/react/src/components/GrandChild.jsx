import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


const GrandChild = () => {
    const user=useContext(UserContext)
  return (
    <div>
        <h5>GrandChild  Component</h5>
        <p>User Name: {user.name}</p>
        <p>User age: {user.age}</p>
    </div>
  )
}

export default GrandChild