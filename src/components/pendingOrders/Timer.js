import React, {useEffect, useState} from "react";

function Timer({getTime}) {

const [time, setTime] = useState(0);
const [timerOn, setTimerOn] = useState(true);

useEffect(() => {
  let interval = null;

  if (timerOn) {
  interval = setInterval(() => {
    setTime(prevTime => prevTime + 10)
  }, 10)
  getTime(time)
  } else {
  clearInterval(interval)
  }

  return () => clearInterval(interval)

  }, [])

return(
  <>
    <div>
        <span>{("0" + Math.floor(time / 60000) % 100).slice(-2)}:</span>
        <span>{("0" + Math.floor(time / 1000) % 60).slice(-2)}</span>
        {/* <span>:{("0" + (time / 10)).slice(-2)}</span> */}
    </div>
  </>
  )
}

export default Timer;