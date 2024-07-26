import '../styles/Cv.css'


function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function ContactSection({genInfo}) {
  const info = genInfo[0]
  return (
    <>
      <div className="cv-gen-info">
        <h2>Contact</h2>
        <div className="contact">
          {info.email}
          <br />
          {info.phone}
          <br />
          {info.address}
        </div>
      </div>
    </>
  )
}

function AboutMeSection({genInfo}) {
  const info = genInfo[0]
  return (
    <>
      <div className="cv-gen-info">
        <h2>About Me</h2>
        <div className="about-me">
          {info.about}
        </div>
      </div>
    </>
  )
}

function CvHeader({genInfo}) {
  return (
    <>
    <header className='cv-name'>
      <h1>{genInfo[0].name}</h1>
      <div className="divider"></div>
      </header>
    </>
  )
}

function EducationSection({education}) {
  if (education.length === 0) return
  return (
    <>
    <h2>Education</h2>
    <div className="education-list">
      {education.map((edu) => 
      <div key={edu.id} className='cv-education-entry'>
        <h4 className='cv-entry-title'>{edu.cert}</h4>
        <p className='cv-entry-details'>{edu.institution} | {edu.location} | {formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
        <pre className='cv-entry-description'>{edu.notes}</pre>
      </div> )}
    </div>
    </>
  )
}

function ExperienceSection({experiences}) {
  if (experiences.length === 0) return
  return (
    <>
    <h2>Experience</h2>
    <div className="experience-list">
      {experiences.map((experience) => 
      <div key={experience.id} className='cv-experiences-entry'>
        <h4 className='cv-entry-title'>{experience.jobTitle}</h4>
        <p className='cv-entry-details'>{experience.company} | {experience.location} | {formatDate(experience.startDate)} - {formatDate(experience.endDate)}</p>
        <pre className='cv-entry-description'>{experience.jobDetails}</pre>
      </div> )}
    </div>
    </>
  )
}

function SkillsSection({skills}) {
  if (skills.length === 0) return
  return (
    <>
    <h2>Skills</h2>
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
          <div className="side-content">
            <ContactSection genInfo={genInfo} />
            <div className="divider"></div>
            <AboutMeSection genInfo={genInfo} />
            {skills.length > 0 ? <div className="divider"></div> : null}
            <SkillsSection skills={skills} />
          </div>
          <div className="main-content">
            <CvHeader genInfo={genInfo} />
            <EducationSection education={education} />
            {education.length > 0 && experiences.length > 0 ? <div className="divider"></div> : null}
            <ExperienceSection experiences={experiences} />
          </div>
        </div>
      </>
    )
  }