import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function GenerateEducation({education, handleInputChange, handleRemoveEducation}) {
    return (
        <>
            {education.map((entry) => {
                <div key={entry.id} className="education-entry">
                <input
                  type="text"
                  placeholder="Certificate"
                  value={entry.cert}
                  onChange={(e) => handleInputChange(entry.id, 'cert', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Institution"
                  value={entry.institution}
                  onChange={(e) => handleInputChange(entry.id, 'institution', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={entry.location}
                  onChange={(e) => handleInputChange(entry.id, 'location', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Start Date"
                  value={entry.startDate}
                  onChange={(e) => handleInputChange(entry.id, 'startDate', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="End Date"
                  value={entry.endDate}
                  onChange={(e) => handleInputChange(entry.id, 'endDate', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Field of Study"
                  value={entry.field}
                  onChange={(e) => handleInputChange(entry.id, 'field', e.target.value)}
                />
                <button onClick={() => handleRemoveEducation(entry.id)}>Remove</button>
              </div>
            })}
        </>
    )
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
        <legend>Experience</legend>
        <button onClick={handleAddEducation} type='button'>Add Education</button>
        <GenerateEducation education={education} handleInputChange={handleInputChange} handleRemoveEducation={handleRemoveEducation} />
    </fieldset>
    )
}