import React, {useState} from 'react';

import { Button, TableCell, TableRow } from '@material-ui/core';

function OrderRow({ order, completeOrder }) {

  const handleComplete = (evt) => {
    evt.preventDefault();
    const orderId = evt.target.value;
    console.log({orderId});
    completeOrder(orderId);
  }

  return (
    <TableRow>
      <TableCell align="center">{order.item}</TableCell>
      <TableCell align="center">{order.table_no}</TableCell>
      <TableCell align="center">{order.quantity}</TableCell>
      <TableCell align="center">{order.note}</TableCell>
      {/* <TableCell align="right">{order.startTime}</TableCell> */}
      {/* <TableCell align="right">status</TableCell> */}
      <TableCell align="center"><Button variant="outlined" value={order.id} onClick={handleComplete}>Complete Order</Button></TableCell>
    </TableRow>
  )
}

export default OrderRow;