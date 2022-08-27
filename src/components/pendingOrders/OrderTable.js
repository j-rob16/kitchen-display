import React, {useState} from "react";

import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"

// import { Table, TableContainer } from './PendingOrdersStyles';

function OrderTable({orders, completeOrder}) {

  const [completedOrders, setCompletedOrders] = useState(orders);

  const handleComplete = (evt) => {
    completeOrder(evt);
  }

  const orderRow = orders.map((order, index) => {

    // const status = () => {
    //   color = "";
    //   if (order.time > 30) {
    //     color = 'red';
    //   } else if (15 < order.time <= 30) {
    //     color = 'yellow';
    //   } else {
    //     color = 'red';
    //   }
    //   return color;
    // }

    if (order.pending) {
      return (
        <TableRow key={index}>
          <TableCell align="right">{order.table_no}</TableCell>
          <TableCell align="right">{order.item}</TableCell>
          <TableCell align="right">{order.quantity}</TableCell>
          <TableCell align="right">{order.note}</TableCell>
          <TableCell align="right">{order.time}</TableCell>
          <TableCell align="right">status</TableCell>
          <TableCell align="right"><Button variant="outlined" value="false" onClick={handleComplete}>Complete Order</Button></TableCell>
        </TableRow>
      )
    }
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Food Order
            </TableCell>
            <TableCell align="center" colSpan={2}>
              Status
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table No.</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Note</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Urgency</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderRow}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrderTable;