import React, { useState, useEffect } from 'react'
import DisplayCount from './DisplayCount'
import IncrementCount from './IncrementCount'

function Counter() {

    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Counter </h1>
        <DisplayCount countProp={count}/>
        <IncrementCount method="Increment" incrementFunctionFromParent={()=> setCount(count + 1)}/>
        <IncrementCount method="Decrement" incrementFunctionFromParent={()=> setCount(count - 1)}/>
        <IncrementCount method="Reset" incrementFunctionFromParent={()=> setCount(0)}/>
    </div>
  )
}

export default Counter