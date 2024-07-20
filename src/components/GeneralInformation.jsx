import "../styles/GeneralInformation.css"
import { useState } from 'react'

function Items({ info, handleInput }) {
    return (
        <>
            {info.map((entry) => (
                <div key={entry.id} className="form-item">
                    <label htmlFor={entry.id}>{entry.text}:</label>
                    <br />
                    {entry.type !== 'text area' ? <input type={entry.type} id={entry.id} name={entry.id} value={entry.val} onChange={(e) => {handleInput(entry.id, e.target.value)}}/> : <textarea id={entry.id} name={entry.id} value={entry.val} onChange={(e) => {handleInput(entry.id, e.target.value)}}/>}
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
        {text: 'About Me', type: 'text area', id: 'about-me', val:''}
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
        <fieldset className="general-info">
            <legend>General Information</legend>
            <div className="general-info-container">
                <Items info={info} handleInput={handleInput} />
            </div>
        </fieldset>
    )
}