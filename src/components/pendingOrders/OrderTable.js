import React from "react";

import Timer from "./Timer"

function OrderTable({orders}) {

  const handleComplete = (evt) => {
    const copiedOrders = [...orders];
  }

  const time = () => {
    return <Timer />
  }

  const orderRow = orders.map((order) => {
    if (order.pending) {
      return (
        <tr>
          <td>{order.table_no}</td>
          <td>{order.item}</td>
          <td>{order.quantity}</td>
          <td>{order.note}</td>
          <td> {time()} </td>
          <td>status</td>
          <td><button value="false" onClick={handleComplete}>Complete Order</button></td>
        </tr>
      )
    }
  })

  return (
    <table>
      {/* <th> */}
        <tr>
          <th>Table No.</th>
          <th>Item</th>
          <th>Qty.</th>
          <th>Note</th>
          <th>Time</th>
          <th></th>
          <th></th>
        </tr>
      {/* </th> */}
      {/* <tb> */}
        {orderRow}
      {/* </tb> */}
    </table>
  )
}

export default OrderTable;