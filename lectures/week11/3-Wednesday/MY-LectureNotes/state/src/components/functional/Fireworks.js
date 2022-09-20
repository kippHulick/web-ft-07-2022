import React, { useState } from 'react'

function Fireworks() {
    const [fire, setFire] = useState('🧨')
  return (
    <>
    <h1>{fire}</h1>
    <button onClick={()=> fire === '🧨' ? setFire('🔥'): setFire('🧨')}>Toggle</button>
    </>
  )
}

export default Fireworks