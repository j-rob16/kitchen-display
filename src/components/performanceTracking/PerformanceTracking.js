import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function PerformanceTracking({ orders }) {

  const [times, setTimes] = useState([]);
  const [averageTime, setAverageTime] = useState(0);

  const getTimes = () => {
    setTimes([]);
    for (let i = 0; i < orders.length; i++) {
      const copiedTimes = [...times];
      if (orders[i].time_finish) {
        copiedTimes.push(orders[i].time_finish - orders[i].time_start);
        setTimes(copiedTimes);
      }
    }
  }

  const displayAverage = () => {
    return (times.reduce((prev, curr) => {
      return prev + curr;
    }, 0)) / times.length;
  }

  useEffect(() => {
    getTimes();
  }, [orders])

  useEffect(() => {
    setAverageTime(displayAverage());
  }, [times])

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Performance Tracking</Typography>
        <Typography variant="h6">Average Time: {"0" + Math.floor(averageTime / 1000 / 60) % 60}:{Math.floor(averageTime / 1000) % 60} seconds</Typography>
      </CardContent>
    </Card>
    
  )
}

export default PerformanceTracking;