import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { HandleInputChange } from './Handlers';

function GenerateEducation({ education, handleRemoveEducation, setState}) {
    return (
        <>
            {education.map((entry) => (
                <div key={entry.id} className="education-entry">
                    <label>
                        Certificate
                        <input
                            type="text"
                            value={entry.cert}
                            onChange={(e) => HandleInputChange(entry.id, 'cert', e.target.value, setState)}
                        />
                    </label>
                    <label>
                        Institution
                        <input
                            type="text"
                            value={entry.institution}
                            onChange={(e) => HandleInputChange(entry.id, 'institution', e.target.value, setState)}
                        />
                    </label>
                    <label>
                        Location
                        <input
                            type="text"
                            value={entry.location}
                            onChange={(e) => HandleInputChange(entry.id, 'location', e.target.value, setState)}
                        />
                    </label>
                    <label>
                        Start Date
                        <input
                            type="text"
                            value={entry.startDate}
                            onChange={(e) => HandleInputChange(entry.id, 'startDate', e.target.value, setState)}
                        />
                    </label>
                    <label>
                        End Date
                        <input
                            type="text"
                            value={entry.endDate}
                            onChange={(e) => HandleInputChange(entry.id, 'endDate', e.target.value, setState)}
                        />
                    </label>
                    <label>
                        Field of Study
                        <input
                            type="text"
                            value={entry.field}
                            onChange={(e) => HandleInputChange(entry.id, 'field', e.target.value, setState)}
                        />
                    </label>
                    <button onClick={() => handleRemoveEducation(entry.id)}>Remove</button>
                </div>
            ))}
        </>
    );
}


export default function EducationAchievements() {
    const [education, setEducation] = useState([])

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