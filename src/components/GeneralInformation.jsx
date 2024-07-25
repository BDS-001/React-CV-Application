import "../styles/GeneralInformation.css"
import { HandleInputChange } from './Handlers';

function Items({ genInfo, setGenInfo }) {
    return (
        <>
            {genInfo.map((entry) => (
                <div key={entry.id} className="form-item">
                    <label htmlFor={`name-${entry.id}`}>Name:</label>
                    <br />
                    <input
                        type="text"
                        id={`name-${entry.id}`}
                        name="name"
                        value={entry.name}
                        onChange={(e) => HandleInputChange(entry.id, 'name', e.target.value, setGenInfo)}
                    />
                    <br />

                    <label htmlFor={`email-${entry.id}`}>Email:</label>
                    <br />
                    <input
                        type="text"
                        id={`email-${entry.id}`}
                        name="email"
                        value={entry.email}
                        onChange={(e) => HandleInputChange(entry.id, 'email', e.target.value, setGenInfo)}
                    />
                    <br />

                    <label htmlFor={`phone-${entry.id}`}>Phone Number:</label>
                    <br />
                    <input
                        type="text"
                        id={`phone-${entry.id}`}
                        name="phone"
                        value={entry.phone}
                        onChange={(e) => HandleInputChange(entry.id, 'phone', e.target.value, setGenInfo)}
                    />
                    <br />

                    <label htmlFor={`address-${entry.id}`}>Address:</label>
                    <br />
                    <input
                        type="text"
                        id={`address-${entry.id}`}
                        name="address"
                        value={entry.address}
                        onChange={(e) => HandleInputChange(entry.id, 'address', e.target.value, setGenInfo)}
                    />
                    <br />

                    <label htmlFor={`about-${entry.id}`}>About Me:</label>
                    <br />
                    <textarea
                        id={`about-${entry.id}`}
                        name="about"
                        value={entry.about}
                        onChange={(e) => HandleInputChange(entry.id, 'about', e.target.value, setGenInfo)}
                    />
                </div>
            ))}
        </>

    )
}

export default function GeneralInformation({genInfo, setGenInfo}) {
    return (
        <fieldset className="general-info">
            <legend>General Information</legend>
            <div className="general-info-container">
                <Items genInfo={genInfo} setGenInfo={setGenInfo} />
            </div>
        </fieldset>
    )
}