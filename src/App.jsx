import { useState } from 'react'
import './App.css'
import GeneralInformation from './GeneralInformation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form action="post" method="post">
        <GeneralInformation />
      </form>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
