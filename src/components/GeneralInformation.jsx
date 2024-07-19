import "../styles/GeneralInformation.css"
import { useState } from 'react'

function Items({ info, handleInput }) {
    return (
        <>
            {info.map((entry) => (
                <div key={entry.id} className="formItem">
                    <label htmlFor={entry.id}>{entry.text}:</label>
                    <br />
                    <input type={entry.type} id={entry.id} name={entry.id} value={entry.val} onChange={(e) => {handleInput(entry.id, e.target.value)}} />
                </div>
            ))}
        </>
    )
}

export default function GeneralInformation() {
    const data = [
        {text: 'Name', type: 'text', id: 'name', val:''},
        {text: 'Email', type: 'text', id: 'email', val:''},
        {text: 'Phone Number', type: 'text', id: 'phone', val:''},
        {text: 'Address', type: 'text', id: 'address', val:''},
    ]
    const [info, setInfo] = useState(data)

    const handleInput = (id, val) => {
        setInfo((prevInfo) => 
            prevInfo.map((entry) => 
                entry.id === id ? {...entry, val: val} : entry
            )
        )
    }

    return (
        <fieldset>
            <legend>General Information</legend>
            <Items info={info} handleInput={handleInput} />
        </fieldset>
    )
}