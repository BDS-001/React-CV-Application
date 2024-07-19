function Items({ data }) {
    return (
        <>
            {data.map((entry) => (
                <div key={entry.id}>
                    <label htmlFor={entry.id}>{entry.text}</label>
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
        <>
            <Items data={data}/>
        </>
    )
}