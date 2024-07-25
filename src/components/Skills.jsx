import { v4 as uuid } from 'uuid';
import { HandleInputChange, HandleFadeOut } from './Handlers';
import '../styles/Skills.css'

function GenerateSkills({skills, handleRemoveSkill, setState}) {
    return (
        <>
            {skills.map((experience) => (
                <div key={experience.id} id={`skill-${experience.id}`} className="skill-entry">
                    <button className='remove-button' onClick={() => HandleFadeOut(experience.id, 'skill', handleRemoveSkill)} type="button"> &times; </button>
                    <div className="skill-entry-info">
                        <div className="form-item">
                            <label htmlFor={`skill-${experience.id}`}>Skill: </label>
                            <input
                                type="text"
                                id={`skill-${experience.id}`}
                                name={`skill-${experience.id}`}
                                value={experience.jobTitle}
                                onChange={(e) =>
                                HandleInputChange(experience.id, 'skill', e.target.value, setState)
                                }
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default function Skills({skills, setSkills}) {
    const handleAddExperience = () => {
        setSkills([
          ...skills,
          {
            id: uuid(),
            skill: '',
          },
        ]);
      };

    const handleRemoveSkill = (id) => {
        setSkills((prevSkills) =>
          prevSkills.filter((skill) => skill.id !== id)
        );
      };

    return (
        <fieldset>
            <legend>Skills</legend>
            <button onClick={handleAddExperience} type='button'>Add Skill</button>
            <GenerateSkills skills={skills} handleRemoveSkill={handleRemoveSkill} setState={setSkills} />
        </fieldset>
    )
}