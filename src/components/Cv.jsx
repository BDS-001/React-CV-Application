import '../styles/Cv.css'

function GeneralInfoSection({genInfo}) {
  return (
    genInfo.map((info) => <p key={info.id}>{info.val}</p>)
  )
}

function EducationSection({education}) {
  return (
    education.map((edu) => 
    <div key={edu.id} className='education-cv-entry'>
      <p>{edu.cert}</p>
      <p>{edu.institution}</p>
      <p>{edu.location}</p>
      <p>{edu.startDate}</p>
      <p>{edu.endDate}</p>
      <p>{edu.field}</p>
    </div> )
  )
}

function ExperienceSection({experiences}) {
  return (
    experiences.map((experience) => 
    <div key={experience.id} className='experiences-cv-entry'>
      <p>{experience.jobTitle}</p>
      <p>{experience.company}</p>
      <p>{experience.startDate}</p>
      <p>{experience.endDate}</p>
      <p>{experience.location}</p>
      <p>{experience.jobDetails}</p>
    </div> )
  )
}

export default function CV({genInfo, experiences, education}) {
    return (
      <>
        <div className="cv">
          <GeneralInfoSection genInfo={genInfo} />
          <EducationSection education={education} />
          <ExperienceSection experiences={experiences} />
        </div>
      </>
    )
  }