import { useState } from "react"


function Display({notes, handleDeleteNote, handleUpdatedNote}){
    const [editingId, setEditingId] = useState(null)
    const [editedTitle, setEditedTitle] = useState("")
    const [editedDescription, setEditedDescription] = useState("")


    const handleDelete = (id) => {
        const updated = notes.filter(n => n.id != id)
        handleDeleteNote(updated)
    }

    const handleEdit = (id, title, description) => {
        setEditingId(id)
        setEditedTitle(title)
        setEditedDescription(description)
    }

    const handleSave = (id) => {
        const updatedNotes = notes.map(n => {
            if (n.id === id) {
                return { ...n, title : editedTitle, description: editedDescription }
            }
            return n
        })
        handleUpdatedNote(updatedNotes)
        setEditingId(null)
        setEditedTitle("")
        setEditedDescription("")
    }

    return (
        <>
        {notes.map(n => (
            <section className="note-card" key={n.id}>
                {(editingId !== n.id) ? <h1>{n.title}</h1> : <input name="editTitle" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />}
                {(editingId !== n.id) ? <h2>{n.description}</h2> : <textarea name="editDescription" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />}
                <p>{(n.created_at.toDateString())}</p>
                <h2>{n.category}</h2>
                <button name="del" type="button" onClick={() => handleDelete(n.id)}> ❌ </button>
                {(editingId !== n.id) ? <button name="edit" onClick={() => handleEdit(n.id, n.title, n.description)}> ✏️ </button> : <button name="saveChanges" onClick={() => handleSave(n.id)}> save Changes</button>}
            </section>
        ))}
        </>
    )
}

export default Display;