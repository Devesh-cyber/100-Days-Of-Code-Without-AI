import { useState } from "react";

function Display({todoList, handleDelete, handleCompletion}){


    return (
        <>
        <section className="display-todo">
           { todoList.map(p => 
                <section className="todo-card" key={p.id}>
                    <input type="checkbox" name='mark_completion' onChange={() => handleCompletion(p.id)}></input>
                    <h3 className={p.completed ? "completed" : "normal"}>
                    {p.todo}</h3>
                    <button onClick={() => handleDelete(p.id)}> Delete </button>
                </section>
)}
        </section>
        </>
    )
}

export default Display;