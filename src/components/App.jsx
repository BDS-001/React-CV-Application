import '../styles/App.css'
import { useState } from 'react';
import GeneralInformation from './GeneralInformation'
import Experiences from './Experience'
import EducationAchievements from './Education'
import CV from './Cv'

function submitForm(e) {
  e.preventDefault();
  document.querySelector('.cv-data-form').style.display = 'none'
  document.querySelector('.cv-container').style.display = 'block'
}

function editForm(e) {
  e.preventDefault();
  document.querySelector('.cv-data-form').style.display = 'block'
  document.querySelector('.cv-container').style.display = 'none'
}


function App() {
  const [education, setEducation] = useState([])
  const [experiences, setExperiences] = useState([])
  const [genInfo, setGenInfo] = useState([        
    {text: 'Name', type: 'text', id: 'name', val:''},
    {text: 'Email', type: 'text', id: 'email', val:''},
    {text: 'Phone Number', type: 'text', id: 'phone', val:''},
    {text: 'Address', type: 'text', id: 'address', val:''},
    {text: 'About Me', type: 'text area', id: 'about-me', val:''}
  ])


  return (
    <>
      <form action="get" method="get" className='cv-data-form'>
        <h1>CV Generator</h1>
        <GeneralInformation genInfo={genInfo} setGenInfo={setGenInfo} />
        <Experiences experiences={experiences} setExperiences={setExperiences} />
        <EducationAchievements education={education} setEducation={setEducation} />
        <button className='cv-submit' onClick={submitForm}>Submit</button>
      </form>
      <div className="cv-container">
            <header className="cv-header"><h1>Generated CV</h1> <button className='cv-edit' onClick={editForm}>Edit</button></header>
            <CV genInfo={genInfo} experiences={experiences} education={education} />
        </div>
    </>
  )
}

export default App
