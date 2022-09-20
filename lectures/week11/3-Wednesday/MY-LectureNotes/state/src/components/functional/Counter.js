import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0) //count

  return (
    <>
        <h1>
        {count}
        </h1>

        <button onClick={()=> setCount(count + 1)} >Increment</button>
        <button onClick={()=> setCount(count - 1)} >decrement</button>
        <button onClick={()=> setCount(0)} >Reset</button>
    </>
  )
}

// const name = () => setCount(count +1)

export default Counter