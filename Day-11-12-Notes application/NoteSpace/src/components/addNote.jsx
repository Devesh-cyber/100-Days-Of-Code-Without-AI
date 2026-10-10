import { useState } from "react";


function AddNote({addNote}){
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value
        const description = e.target.description.value
        const category = e.target.category.value
        const pin = e.target.pinned.checked

        const obj = {
            'title': title,
            'description': description,
            'category' : category,
            'created_at' : new Date(),
            'is_pinned' : pin
        }
        addNote(obj)
        setShow(false)
        e.target.reset()
    }

    const content =  <form onSubmit={handleSubmit}>
                <h1>Register a Note</h1>
                <strong>Title : </strong>
                <input type="text" name="title" required />
                <br />
                <strong> Description : </strong>
                <textarea name="description" required />
                <br />
                <strong> category : </strong>
                <select name="category">
                    <option>Personal</option>
                    <option>Coding</option>
                    <option>College</option>
                    <option>Work</option>
                </select>
                <br/>
                <strong>Pin : </strong>
                <input type="checkbox" name="pinned" />
                <br />
                <button type="submit"> Add Note </button>
                <button name="cancel" onClick={() => setShow(false)}> Cancel </button>
            </form>

    return (
        <>
        <section className="note-modal">
            <button onClick={() => setShow(true)}> + </button>
           {(show) ? content : null}
        </section>
        </>
    )
}

export default AddNote;