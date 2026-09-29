import { useEffect, useState } from "react";

function LiveClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const pad = (n) => String(n).padStart(2, '0');

    return (
        <div className="clock-card">
            <div className="date">
                <span className="box-icon">📅</span>
                <div className="box-content">
                    <span className="box-label">Date</span>
                    <span className="box-value">
                        {pad(time.getDate())} / {pad(time.getMonth() + 1)} / {time.getFullYear()}
                    </span>
                </div>
            </div>
            <div className="time">
                <span className="box-icon">🕒</span>
                <div className="box-content">
                    <span className="box-label">Current Time</span>
                    <span className="box-value">
                        {pad(time.getHours())} : {pad(time.getMinutes())} : {pad(time.getSeconds())}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LiveClock;