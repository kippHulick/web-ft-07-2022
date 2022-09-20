import React from 'react'

function IncrementCount({incrementFunctionFromParent, method}) {
  return (
    <div>
        <button onClick={incrementFunctionFromParent}>{method}</button>
    </div>
  )
}

export default IncrementCount