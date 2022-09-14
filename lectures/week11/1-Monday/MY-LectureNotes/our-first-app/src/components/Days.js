import React from 'react'

const Days = ({days}) => {

    // let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
        <ul>
            {days.map(day => <li>{day}</li>)}
        </ul>
    )
}

export default Days