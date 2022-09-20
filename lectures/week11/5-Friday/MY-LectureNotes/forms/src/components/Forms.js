import React, { useState } from 'react'

function Forms() {

    const [textValue, setTextValue] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [selectValue, setSelectValue] = useState("Seattle")

    const submit = (e) => { 
        e.preventDefault()

        let dataObj = {
            textValue,
            isValid,
            selectValue
        }

        console.log('Form Submitted', dataObj);
     }

  return (
    <div>
        <h2>{textValue}</h2>
        <h2>{isValid ? "True" : "False"}</h2>
        <h2>{selectValue}</h2>
        <form>
            <input type="text" value={textValue} onChange={e => setTextValue(e.target.value)} />

            <input type="checkbox" value={isValid} onChange={e=>setIsValid(e.target.checked)}/>

            <select value={selectValue} onChange={e=>setSelectValue(e.target.value)}>
                <option value="Houston">Houston</option>
                <option value="Atlanta">Atlanta</option>
                <option value="Seattle">Seattle</option>
                <option value="Chicago">Chicago</option>
                <option value="NewYork">New York</option>
                <option value="SanFrancisco">San Francisco</option>
            </select>

            <input type="submit" onClick={submit}></input>

        </form>
    </div>
  )
}

const outside = () => (n1, n2) => console.log(`${n1} ${n2} woah`)

export default Forms