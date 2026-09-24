import { useState } from 'react'
import ProfileForm from './components/Profile_form'
import './App.css'

function App() {
  const [profiles, setProfiles] = useState([])

  return (
    <>
      <ProfileForm profileList={profiles}/>
    </>
  )
}

export default App
