import { v4 as uuid } from 'uuid';
import { HandleInputChange, HandleFadeOut } from './Handlers';

function GenerateEducation({ education, handleRemoveEducation, setState}) {
    return (
        <>
            {education.map((entry) => (
                <div key={entry.id} id={`education-${entry.id}`} className="education-entry">
                    <button className='remove-button' onClick={() => HandleFadeOut(entry.id, 'education', handleRemoveEducation)} type='button'> &times; </button>
                    <div className="education-entry-info">
                    <div className="form-item">
                        <label htmlFor={`cert-${entry.id}`}>Certificate</label><br />
                        <input
                            type="text"
                            id={`cert-${entry.id}`}
                            value={entry.cert}
                            onChange={(e) => HandleInputChange(entry.id, 'cert', e.target.value, setState)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor={`institution-${entry.id}`}>Institution</label><br />
                        <input
                            type="text"
                            id={`institution-${entry.id}`}
                            value={entry.institution}
                            onChange={(e) => HandleInputChange(entry.id, 'institution', e.target.value, setState)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor={`location-${entry.id}`}>Location</label><br />
                        <input
                            type="text"
                            id={`location-${entry.id}`}
                            value={entry.location}
                            onChange={(e) => HandleInputChange(entry.id, 'location', e.target.value, setState)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor={`field-${entry.id}`}>Field of Study</label><br />
                        <input
                            type="text"
                            id={`field-${entry.id}`}
                            value={entry.field}
                            onChange={(e) => HandleInputChange(entry.id, 'field', e.target.value, setState)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor={`startDate-${entry.id}`}>Start Date</label><br />
                        <input
                            type="date"
                            id={`startDate-${entry.id}`}
                            value={entry.startDate}
                            onChange={(e) => HandleInputChange(entry.id, 'startDate', e.target.value, setState)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor={`endDate-${entry.id}`}>End Date</label><br />
                        <input
                            type="date"
                            id={`endDate-${entry.id}`}
                            value={entry.endDate}
                            onChange={(e) => HandleInputChange(entry.id, 'endDate', e.target.value, setState)}
                        />
                    </div>

                    <div className="form-item">
                            <label htmlFor={`notes-${entry.id}`}>Achievements/Relevant Course Work:</label><br />
                            <textarea
                                id={`notes-${entry.id}`}
                                name={`notes-${entry.id}`}
                                value={entry.jobDetails}
                                onChange={(e) =>
                                HandleInputChange(entry.id, 'notes', e.target.value, setState)
                                }
                            ></textarea>
                        </div>

                    </div>
                </div>
            ))}

        </>
    );
}


export default function EducationAchievements({education, setEducation}) {
    const handleAddEducation = () => {
        setEducation([
            ...education,
            {
                id: uuid(),
                cert: '',
                institution: '',
                location: '',
                startDate: '',
                endDate: '',
                field: '',
                notes: '',
            }
        ])
    }
    

    const handleRemoveEducation = (id) => {
        setEducation((prevEducation) =>
            prevEducation.filter((entry) => entry.id !== id)
          );
    }

    return (
        <fieldset>
        <legend>Education</legend>
        <button onClick={handleAddEducation} type='button'>Add Education</button>
        <GenerateEducation education={education} handleRemoveEducation={handleRemoveEducation} setState={setEducation} />
    </fieldset>
    )
}