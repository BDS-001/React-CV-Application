import './App.css'
import GeneralInformation from './GeneralInformation'
import Experiences from './Experience'

function App() {
  return (
    <>
      <form action="get" method="get">
        <GeneralInformation />
        <Experiences />
      </form>
    </>
  )
}

export default App
