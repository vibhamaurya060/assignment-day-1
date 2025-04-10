import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div>
        <h3>Child Component</h3>
        <GrandChild/>
    </div>
  )
}

export default Child