import { useEffect, useState } from "react";


function Display({timer, setTimer, running, setRunning}){

    

    const getTime = {
        'hour': Math.floor(timer / 3600),
        'min': Math.floor((timer%3600) / 60),
        'sec': timer % 60
    }

    useEffect(() => {
        if (running){
            const interval = setInterval(() => {
                setTimer(prev => Math.max(prev - 1,0)) 
        }, 1000)
        return () => clearInterval(interval)
        }
    },[running, setTimer])

    useEffect(() => {
        if (timer === 0){
            setRunning(false)
        }
    },[timer])

    return (
        <>
        <section className="display">
            <h1> Focus Timer </h1>
            <h2>SESSION TIMER</h2>
            <h1>{String(getTime.hour).padStart(2, "0")} :
                {String(getTime.min).padStart(2, "0")} :
                {String(getTime.sec).padStart(2, "0")}
            </h1>
            {timer > 0
                ? running
                    ? <p>Focusing...</p>
                    : <p>Ready to Focus</p>
                : <p>Timer Completed / Not Configured</p>
            } 
            <section className="buttons">
                <button name="start" onClick={() => setRunning(true)}> Start </button>
                <button name="stop" onClick={() => setRunning(false)}> Stop </button>
                <button name="reset" onClick={() => {setTimer(0); setRunning(false)}}> Reset </button>
            </section>
        </section>
        </>
    )
}


export default Display;