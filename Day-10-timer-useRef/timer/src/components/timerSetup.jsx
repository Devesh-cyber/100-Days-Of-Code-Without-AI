import { useState , useRef, useEffect} from "react";

function Setup({ setTimer, timer, running, setRunning }) {

    const [duration, setDuration] = useState("")
    const [editing, setEditing] = useState(false)
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (Number(duration) <= 0 || duration === "") {
            return
        }

        setTimer(Number(duration) * 60)
        setEditing(false)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setRunning(false)
        setDuration(Math.round(timer / 60))
        setEditing(true)
    }

    useEffect(() => {
            if (editing){
                inputRef.current.focus()
            }
        }, [editing])

    return (
        <section className="setup">

            <h3>Section Duration (minutes)</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    name="timer"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    min="1"
                    ref={inputRef}
                    disabled={timer > 0 && !editing}
                    placeholder="Duration (min)"
                />

                {timer === 0 ? (
                    <button type="submit">
                        Set Timer
                    </button>
                ) : editing ? (
                    <button type="submit">
                        Save Changes
                    </button>
                ) : (
                    <button type="button" onClick={handleEdit}>
                        Edit
                    </button>
                )}
                

            </form>

        </section>
    )
}

export default Setup