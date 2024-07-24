import "../styles/GeneralInformation.css"

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

export default function GeneralInformation({genInfo, setGenInfo}) {
    const handleInput = (id, val) => {
        setGenInfo((prevInfo) => 
            prevInfo.map((entry) => 
                entry.id === id ? {...entry, val: val} : entry
            )
        )
    }

    return (
        <fieldset className="general-info">
            <legend>General Information</legend>
            <div className="general-info-container">
                <Items info={genInfo} handleInput={handleInput} />
            </div>
        </fieldset>
    )
}