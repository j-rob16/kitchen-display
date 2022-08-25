import React, {useEffect, useState} from "react";

function Timer() {
const [time, setTime] = useState(0);
const [timerOn, setTimerOn] = useState(true);


useEffect(() => {
    let interval = null;

    if (timerOn) {
    interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
    }, 10)
    } else {
    clearInterval(interval)
    }

    return () => clearInterval(interval)

}, [])

return (
    <>
    <div>
        <span>{("0" + Math.floor(time / 1000) % 60).slice(-2)}:</span>
        <span>{("0" + (time / 10)).slice(-2)}</span>
    </div>
    </>
  )
}

export default Timer;