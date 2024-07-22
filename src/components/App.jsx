import '../styles/App.css'
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
  return (
    <>
      <form action="get" method="get" className='cv-data-form'>
        <h1>CV Generator</h1>
        <GeneralInformation />
        <Experiences />
        <EducationAchievements />
        <button className='cv-submit' onClick={submitForm}>Submit</button>
      </form>
      <div className="cv-container">
            <header className="cv-header"><h1>Generated CV</h1> <button className='cv-edit' onClick={editForm}>Edit</button></header>
            <CV />
        </div>
    </>
  )
}

export default App
