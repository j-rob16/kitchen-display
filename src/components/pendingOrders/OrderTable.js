import React, {useState} from "react";

import { Table, TableContainer } from './PendingOrdersStyles';

function OrderTable({orders, completeOrder}) {

  const [completedOrders, setCompletedOrders] = useState(orders);

  const handleComplete = (evt) => {
    completeOrder(evt);
  }

  const orderRow = orders.map((order, index) => {
    if (order.pending) {
      return (
        <tr key={index}>
          <td>{order.table_no}</td>
          <td>{order.item}</td>
          <td>{order.quantity}</td>
          <td>{order.note}</td>
          <td>{order.time}</td>
          <td>status</td>
          <td><button value="false" onClick={handleComplete}>Complete Order</button></td>
        </tr>
      )
    }
  })

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Table No.</th>
            <th>Item</th>
            <th>Qty.</th>
            <th>Note</th>
            <th>Time</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orderRow}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default OrderTable;