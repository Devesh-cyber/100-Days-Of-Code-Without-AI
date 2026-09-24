import { useState } from 'react'
import ProfileForm from './components/Profile_form'
import displayProfile from './components/displayProfile'
import './App.css'

function App() {
  const [profiles, setProfiles] = useState([])

  const addProfile = (current) => {
    setProfiles([...profiles, current])
  }
  return (
    <>
      <ProfileForm addProfile={addProfile}/>
      <displayProfile profileList={profiles} />
    </>
  )
}

export default App
