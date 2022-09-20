import React from 'react'
import Navigation from './Navigation'

const BaseLayout = (props) => {
  return (
    <div>
        <Navigation />

        {props.children}
        <br />
        <br />
        Footer
    </div>
  )
}

export default BaseLayout