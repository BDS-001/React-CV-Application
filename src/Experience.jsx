import { useState } from 'react'
import { v4 as uuid } from 'uuid';

function GenerateExperiences({experiences, handleInputChange, handleRemoveExperience}) {
    return (
        <>
            {experiences.map((experience) => (
                <div key={experience.id} className="experience-entry">
                <label htmlFor={`jobTitle-${experience.id}`}>Job Title:</label>
                <input
                    type="text"
                    id={`jobTitle-${experience.id}`}
                    name={`jobTitle-${experience.id}`}
                    value={experience.jobTitle}
                    onChange={(e) =>
                    handleInputChange(experience.id, 'jobTitle', e.target.value)
                    }
                />
        
                <label htmlFor={`company-${experience.id}`}>Company:</label>
                <input
                    type="text"
                    id={`company-${experience.id}`}
                    name={`company-${experience.id}`}
                    value={experience.company}
                    onChange={(e) =>
                    handleInputChange(experience.id, 'company', e.target.value)
                    }
                />
        
                <label htmlFor={`startDate-${experience.id}`}>Start Date:</label>
                <input
                    type="date"
                    id={`startDate-${experience.id}`}
                    name={`startDate-${experience.id}`}
                    value={experience.startDate}
                    onChange={(e) =>
                    handleInputChange(experience.id, 'startDate', e.target.value)
                    }
                />
        
                <label htmlFor={`endDate-${experience.id}`}>End Date:</label>
                <input
                    type="date"
                    id={`endDate-${experience.id}`}
                    name={`endDate-${experience.id}`}
                    value={experience.endDate}
                    onChange={(e) =>
                    handleInputChange(experience.id, 'endDate', e.target.value)
                    }
                />
        
                <label htmlFor={`location-${experience.id}`}>Location:</label>
                <input
                    type="text"
                    id={`location-${experience.id}`}
                    name={`location-${experience.id}`}
                    value={experience.location}
                    onChange={(e) =>
                    handleInputChange(experience.id, 'location', e.target.value)
                    }
                />
        
                <label htmlFor={`jobDetails-${experience.id}`}>Job Details:</label>
                <textarea
                    id={`jobDetails-${experience.id}`}
                    name={`jobDetails-${experience.id}`}
                    value={experience.jobDetails}
                    onChange={(e) =>
                    handleInputChange(experience.id, 'jobDetails', e.target.value)
                    }
                ></textarea>
                 <button onClick={() => handleRemoveExperience(experience.id)} type="button">
                    Remove Experience
                </button>
                </div>
            ))}
        </>
    )
}

export default function Experiences() {
    const [experiences, setExperiences] = useState([])

    const handleAddExperience = () => {
        setExperiences([
          ...experiences,
          {
            id: uuid(),
            jobTitle: '',
            company: '',
            startDate: '',
            endDate: '',
            location: '',
            jobDetails: '',
          },
        ]);
      };

    const handleInputChange = (id, field, val) => {
        setExperiences((prevExperiences) =>
            prevExperiences.map((experience) =>
              experience.id === id ? { ...experience, [field]: val } : experience
            )
          );
    }

    const handleRemoveExperience = (id) => {
        setExperiences((prevExperiences) =>
          prevExperiences.filter((experience) => experience.id !== id)
        );
      };

    return (
        <fieldset>
            <legend>Experience</legend>
            <button onClick={handleAddExperience} type='button'>Add Experience</button>
            <GenerateExperiences experiences={experiences} handleInputChange={handleInputChange} handleRemoveExperience={handleRemoveExperience} />
        </fieldset>
    )
}