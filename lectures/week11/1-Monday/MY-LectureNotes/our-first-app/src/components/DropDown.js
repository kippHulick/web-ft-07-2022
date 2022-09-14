import React from 'react'

export const DropDown = ({days, language}) => {
  return (
    <div>
        {language}

        <select>
            {days.map(day => <option value={day} >{day}</option>)}
        </select>
    </div>
  )
}

export default DropDown