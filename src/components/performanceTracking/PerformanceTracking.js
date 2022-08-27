import React from "react";

function PerformanceTracking({ orders }) {

  const averageOrderLength = () => {
    let total = 0;
    let count = 0;

    orders.forEach((index, value) => {
      total += value;
      count ++
    })
    return total / count;
  }

  return (
    <>
      <h2>Performance Tracking</h2>
      {averageOrderLength()}
    </>
    
  )
}

export default PerformanceTracking;