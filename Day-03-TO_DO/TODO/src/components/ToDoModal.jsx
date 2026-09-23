import { useState } from "react";

function ToDoModal({addTodo}){

    const [IsActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0)

    const handleSubmit = (event) => {
                event.preventDefault();
                let todo = event.target.todo.value;
                console.log(todo)
                if(todo.trim() == ''){
                    alert('Please Enter as Valid Todo Task')
                    return
                }
                
                let id = counter + 1
                setCounter(counter + 1)
                let  completed = false;

                addTodo({'id':id, 'todo':todo, 'completed':completed})
                setIsActive(false);
            }

    const content = <section className="todo-modal">
            <header>
                <h1> My TODO </h1>
            </header>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" placeholder="Enter a new todo..."></input>
                <button type="Submit"> Add </button>
            </form>
        </section>

    
    return (
        <>
        <section>
            <h1> Lets Do Something Productive </h1>
            <button onClick={() => setIsActive(true)} > + Add Todo </button>
            {(IsActive) ? content : null}
        </section>
        </>
    )
}

export default ToDoModal;