import { useRef, useState } from 'react'
import Display from './components/timerDisplay'
import Setup from './components/timerSetup'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0)
  const [running, setRunning] = useState(false)
  return (
    <>
      <Display timer={timer} setTimer={setTimer} running={running} setRunning={setRunning} />
      <Setup setTimer={setTimer} timer={timer} running={running} setRunning={setRunning}  />
    </>
  )
}

export default App
