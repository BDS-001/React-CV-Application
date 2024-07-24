import { v4 as uuid } from 'uuid';
import { HandleInputChange, HandleFadeOut } from './Handlers';
import '../styles/Experience.css'

function GenerateExperiences({experiences, handleRemoveExperience, setState}) {
    return (
        <>
            {experiences.map((experience) => (
                <div key={experience.id} id={`experience-${experience.id}`} className="experience-entry">
                    <button className='remove-button' onClick={() => HandleFadeOut(experience.id, 'experience', handleRemoveExperience)} type="button"> &times; </button>
                    <div className="experience-entry-info">
                    <div className="form-element">
                        <label htmlFor={`jobTitle-${experience.id}`}>Job Title:</label><br />
                        <input
                            type="text"
                            id={`jobTitle-${experience.id}`}
                            name={`jobTitle-${experience.id}`}
                            value={experience.jobTitle}
                            onChange={(e) =>
                            HandleInputChange(experience.id, 'jobTitle', e.target.value, setState)
                            }
                        />
                    </div>

                    <div className="form-element">
                        <label htmlFor={`company-${experience.id}`}>Company:</label><br />
                        <input
                            type="text"
                            id={`company-${experience.id}`}
                            name={`company-${experience.id}`}
                            value={experience.company}
                            onChange={(e) =>
                            HandleInputChange(experience.id, 'company', e.target.value, setState)
                            }
                        />
                    </div>

                    <div className="form-element">
                        <label htmlFor={`startDate-${experience.id}`}>Start Date:</label><br />
                        <input
                            type="date"
                            id={`startDate-${experience.id}`}
                            name={`startDate-${experience.id}`}
                            value={experience.startDate}
                            onChange={(e) =>
                            HandleInputChange(experience.id, 'startDate', e.target.value, setState)
                            }
                        />
                    </div>

                    <div className="form-element">
                        <label htmlFor={`endDate-${experience.id}`}>End Date:</label><br />
                        <input
                            type="date"
                            id={`endDate-${experience.id}`}
                            name={`endDate-${experience.id}`}
                            value={experience.endDate}
                            onChange={(e) =>
                            HandleInputChange(experience.id, 'endDate', e.target.value, setState)
                            }
                        />
                    </div>

                    <div className="form-element">
                        <label htmlFor={`location-${experience.id}`}>Location:</label><br />
                        <input
                            type="text"
                            id={`location-${experience.id}`}
                            name={`location-${experience.id}`}
                            value={experience.location}
                            onChange={(e) =>
                            HandleInputChange(experience.id, 'location', e.target.value, setState)
                            }
                        />
                    </div>

                    <div className="form-element">
                        <label htmlFor={`jobDetails-${experience.id}`}>Job Details:</label><br />
                        <textarea
                            id={`jobDetails-${experience.id}`}
                            name={`jobDetails-${experience.id}`}
                            value={experience.jobDetails}
                            onChange={(e) =>
                            HandleInputChange(experience.id, 'jobDetails', e.target.value, setState)
                            }
                        ></textarea>
                    </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default function Experiences({experiences, setExperiences}) {
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

    const handleRemoveExperience = (id) => {
        setExperiences((prevExperiences) =>
          prevExperiences.filter((experience) => experience.id !== id)
        );
      };

    return (
        <fieldset>
            <legend>Experience</legend>
            <button onClick={handleAddExperience} type='button'>Add Experience</button>
            <GenerateExperiences experiences={experiences} handleRemoveExperience={handleRemoveExperience} setState={setExperiences} />
        </fieldset>
    )
}