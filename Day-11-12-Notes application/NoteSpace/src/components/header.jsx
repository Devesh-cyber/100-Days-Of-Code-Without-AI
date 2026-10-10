import { useEffect, useState } from "react";


function Header(){
    const [date, setDate] = useState(new Date())
    const days_of_weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']            
    useEffect(()=> {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    },[])

    return (
        <>
        <section className="main-header">
            <h1>NoteSpace</h1>
            <h1>{String(date.getHours()).padStart(2, "0")} : {String(date.getMinutes()).padStart(2, "0")}  {(date.getHours() < 12) ? "AM" : "PM" } </h1>
            <p>{(days_of_weeks[date.getDay()])} . {date.getDate()} {date.toLocaleDateString('default', {'month': 'long'})}</p>
        </section>
        </>
    )
}

export default Header;