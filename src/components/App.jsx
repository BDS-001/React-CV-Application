import '../styles/App.css'
import GeneralInformation from './GeneralInformation'
import Experiences from './Experience'
import EducationAchievements from './Education'


function submitForm(e) {
  e.preventDefault();
  console.log('worked')
}


function App() {
  return (
    <>
      <form action="get" method="get">
        <h1>CV Generator</h1>
        <GeneralInformation />
        <Experiences />
        <EducationAchievements />
        <button className='cv-submit' type="submit" onClick={submitForm}>Submit</button>
      </form>
    </>
  )
}

export default App
