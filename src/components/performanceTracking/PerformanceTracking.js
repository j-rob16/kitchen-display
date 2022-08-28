import React, { useEffect, useState } from "react";

function PerformanceTracking({ orders }) {

  const [times, setTimes] = useState([]);
  const [averageTime, setAverageTime] = useState(0);

  const getTimes = () => {
    for (let i = 0; i < orders.length; i++) {
      const copiedTimes = [...times];
      if (orders[i].pending === false) {
        copiedTimes.push(orders[i].time_finish - orders[i].time_start);
        setTimes(copiedTimes);
      }
    }
    return times;
  }

  const displayAverage = () => {
    return Math.floor((times.reduce((prev, curr) => {
      return prev + curr;
    }, 0) / 1000) % 60) / times.length;
  }

  useEffect(() => {
    getTimes();
  }, [orders])

  useEffect(() => {
    setAverageTime(displayAverage());
  }, [times])

  return (
    <>
      <h2>Performance Tracking</h2>
      {averageTime}
      {times.length}
    </>
    
  )
}

export default PerformanceTracking;