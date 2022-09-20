import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <div>
        
        <ul>
            <li><Link to="/" /> Home Page</li>
            <li><Link to="/forms" /> Forms</li>
            <li><Link to="/about" /> About Us</li>
        </ul>

    </div>
  )
}

export default Navigation