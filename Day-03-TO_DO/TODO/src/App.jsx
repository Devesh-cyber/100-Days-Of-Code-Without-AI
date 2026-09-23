import { useState } from 'react'
import './App.css'
import ToDoModal from './components/ToDoModal' 

function App() {
  const [Todo, setTodo] = useState([])

  const addTodo = (current) => {
    setTodo([...Todo, current])
  }

  return (
    <>
      <ToDoModal addTodo={addTodo} />
      {console.log(Todo)}
    </>
  )
}

export default App
