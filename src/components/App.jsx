import '../styles/App.css'
import GeneralInformation from './GeneralInformation'
import Experiences from './Experience'
import EducationAchievements from './Education'

function App() {
  return (
    <>
      <form action="get" method="get">
        <GeneralInformation />
        <Experiences />
        <EducationAchievements />
      </form>
    </>
  )
}

export default App
