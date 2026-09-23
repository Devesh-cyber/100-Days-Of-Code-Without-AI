
import { useState } from 'react'
import './App.css'
import ToDoModal from './components/ToDoModal' 
import Display from './components/DisplayToDo'
import ToDoStats from './components/ToDoStats'

function App() {
  const [Todo, setTodo] = useState([])

  const addTodo = (current) => {
    setTodo([...Todo, current])
  }

  const handleDelete = (id) => {
        let filtered = Todo.filter(p => p.id != id)
        setTodo([...filtered])

  }

  const handleCompletion = (id) => {
      const updated_arr = Todo.map((p) => {
        if (p.id == id){
          if (p.completed == false){
            
            return {'id': p.id, 'todo':p.todo, 'completed':true}

          } else {
            return {'id': p.id, 'todo': p.todo, 'completed': false}
          } 
        } else {
          return p
        }
      })
      setTodo([...updated_arr])
  }

  return (
    <>
      <ToDoModal addTodo={addTodo} />
      <Display todoList={Todo} handleDelete={handleDelete} handleCompletion={handleCompletion} />
      <ToDoStats todoList={Todo} />
    </>
  )
}

export default App