import { useState, useEffect} from 'react'
import Header from './components/header'
import AddNote from './components/addNote'
import Display from './components/displayNotes'
import './App.css'

function viewStorage(){
  const data = localStorage.getItem('notes')
  return (data === null) ? [] : JSON.parse(data).map(n => ({
    ...n, 'created_at': new Date(n['created_at'])
  }))
}


function settId() {
  const data = localStorage.getItem('notes')
  if (data === null){
    return 1
  } 
  const notes = JSON.parse(data)
  if (notes.length === 0) return 1

  const ids = notes.map(n => n.id)
  return Math.max(...ids) + 1
}

function App() {
  const [notes, setNotes] = useState(() => viewStorage())
  const [id, setId] = useState(() => settId())

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (note) => {
    const newNote = {id, ...note}
    setNotes(prev => [...prev, newNote])
    setId(prev => prev + 1)
  }

  const handleDeleteNote = (updatedNote) => {
    setNotes(updatedNote)
  }

  const handleUpdatedNote = (updatedNote) => {
    setNotes(updatedNote)
  }
  
  return (
    <>
      <section className="main">
        <Header />
        <AddNote addNote={addNote} />
        <Display notes={notes} handleDeleteNote={handleDeleteNote} handleUpdatedNote={handleUpdatedNote} />
      </section>
    </>
  )
}

export default App
