import { useState, useEffect } from "react";

function StopWatch(){
    const [elapsedTime, setElapsedTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setElapsedTime(prev => prev + 1)
            }, 1000)

            return () => clearInterval(interval)
        } 
    }, [isRunning])

    const calculate = (elapsedTime) => {
        let h = Math.floor(elapsedTime / 3600);
        let m = Math.floor((elapsedTime % 3600) / 60);
        let s = Math.floor(elapsedTime % 60);
        return [h, m, s];
    }
    
    const [hours, minutes, seconds] = calculate(elapsedTime)
    const pad = (n) => String(n).padStart(2, '0');

    return (
        <div className="stopwatch-card">
            <div className="timer-display-wrapper">
                <div className="timer-display">
                    {pad(hours)} : {pad(minutes)} : {pad(seconds)}
                </div>
                <div className="timer-labels">
                    <span>Hours</span>
                    <span>Minutes</span>
                    <span>Seconds</span>
                </div>
            </div>
            <div className="stopwatch-buttons">
                <button className="start" onClick={() => setIsRunning(true)}> ▶ Start </button>
                <button className="pause" onClick={() => setIsRunning(false)}> ⏸ Pause </button>
                <button className="reset" onClick={() => {setIsRunning(false); setElapsedTime(0)}}> ⟲ Reset </button>
            </div>
        </div>
    )
}

export default StopWatch;