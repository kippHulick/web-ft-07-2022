import React from 'react'
import '../index.css'

export const Welcome = () => {
  return (
    <div style={myStyles.h1Style} className='div1'>welcome to our space!</div>
  )
}

const myStyles = {
    h1Style: {
        backgroundColor: "orange",
        fontSize: "40px"
    }
}

export default Welcome