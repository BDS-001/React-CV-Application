import "./GeneralInformation.css"

function Items({ data }) {
    return (
        <>
            {data.map((entry) => (
                <div key={entry.id} className="formItem">
                    <label htmlFor={entry.id}>{entry.text}:</label>
                    <br />
                    <input type={entry.type} id={entry.id} name={entry.id} />
                </div>
            ))}
        </>
    )
}

export default function GeneralInformation() {
    const data = [
        {text: 'Name', type: 'text', id: 'name'},
        {text: 'Email', type: 'text', id: 'email'},
        {text: 'Phone Number', type: 'text', id: 'phone'},
        {text: 'Address', type: 'text', id: 'address'},
    ]
    return (
        <fieldset>
            <legend>General Information</legend>
            <Items data={data}/>
        </fieldset>
    )
}