import React from 'react'
import Welcome from './components/Welcome.js'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>

      <Navbar brandLink="Hello World" brandText="July 2022 Cohort" brandDescription="Learning React" />
      <div className="row">
        <div className="col-6 bg-primary">Hello world</div>
        <div className="col-3 bg-success">Column 3</div>
        <div className="col-3 bg-warning">Column 3 Warning</div>
      </div>

      <h1 id="h1a" >Styling in React</h1>

      <Welcome />

    </>
  )
}

export default App