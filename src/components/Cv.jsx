import '../styles/Cv.css'

function GeneralInfoSection({genInfo}) {
  const info = genInfo[0]
  return (
    <>
      <div className="cv-gen-info">
        <h1>{info.name}</h1>
        <div className="contact">
          {info.email}
          <br />
          {info.phone}
          <br />
          {info.address}
        </div>
        <div className="about-me"> {info.about} </div>
      </div>
    </>
  )
}

function EducationSection({education}) {
  if (education.length === 0) return
  return (
    <>
    <h1>Education</h1>
    {education.map((edu) => 
    <div key={edu.id} className='education-cv-entry'>
      <p>{edu.cert}</p>
      <p>{edu.institution}</p>
      <p>{edu.location}</p>
      <p>{edu.startDate}</p>
      <p>{edu.endDate}</p>
      <p>{edu.field}</p>
    </div> )}
    </>
  )
}

function ExperienceSection({experiences}) {
  if (experiences.length === 0) return
  return (
    <>
    <h1>Experience</h1>
    {experiences.map((experience) => 
    <div key={experience.id} className='experiences-cv-entry'>
      <p>{experience.jobTitle}</p>
      <p>{experience.company}</p>
      <p>{experience.startDate}</p>
      <p>{experience.endDate}</p>
      <p>{experience.location}</p>
      <p>{experience.jobDetails}</p>
    </div> )}
    </>
  )
}

function SkillsSection({skills}) {
  if (skills.length === 0) return
  return (
    <>
    <h1>Skills</h1>
    <ul className='skills-cv-entry'>
    {skills.map((skill) => 
      <li key={skill.id}>{skill.skill}</li>
    )}
    </ul> 
    </>
  )
}

export default function CV({genInfo, experiences, education, skills}) {
    return (
      <>
        <div className="cv">
          <GeneralInfoSection genInfo={genInfo} />
          <EducationSection education={education} />
          <ExperienceSection experiences={experiences} />
          <SkillsSection  skills={skills} />
        </div>
      </>
    )
  }