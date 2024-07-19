import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function GenerateEducation({ education, handleInputChange, handleRemoveEducation }) {
    return (
        <>
            {education.map((entry) => (
                <div key={entry.id} className="education-entry">
                    <label>
                        Certificate
                        <input
                            type="text"
                            value={entry.cert}
                            onChange={(e) => handleInputChange(entry.id, 'cert', e.target.value)}
                        />
                    </label>
                    <label>
                        Institution
                        <input
                            type="text"
                            value={entry.institution}
                            onChange={(e) => handleInputChange(entry.id, 'institution', e.target.value)}
                        />
                    </label>
                    <label>
                        Location
                        <input
                            type="text"
                            value={entry.location}
                            onChange={(e) => handleInputChange(entry.id, 'location', e.target.value)}
                        />
                    </label>
                    <label>
                        Start Date
                        <input
                            type="text"
                            value={entry.startDate}
                            onChange={(e) => handleInputChange(entry.id, 'startDate', e.target.value)}
                        />
                    </label>
                    <label>
                        End Date
                        <input
                            type="text"
                            value={entry.endDate}
                            onChange={(e) => handleInputChange(entry.id, 'endDate', e.target.value)}
                        />
                    </label>
                    <label>
                        Field of Study
                        <input
                            type="text"
                            value={entry.field}
                            onChange={(e) => handleInputChange(entry.id, 'field', e.target.value)}
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

    const handleInputChange = (id, field, val) => {
        setEducation((prevEducation) =>
            prevEducation.map((entry) =>
                entry.id === id ? { ...entry, [field]: val } : entry
            )
          );
    }

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
        <GenerateEducation education={education} handleInputChange={handleInputChange} handleRemoveEducation={handleRemoveEducation} />
    </fieldset>
    )
}