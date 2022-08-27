import React, {useState} from "react";

import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import Timer from "./Timer";

// import { Table, TableContainer } from './PendingOrdersStyles';

function OrderTable({orders, completeOrder}) {



  const orderRow = orders.map((order, index) => {

    const handleComplete = () => {
      console.log({order});
      completeOrder(order);
    }

    if (order.pending) {
      return (
        <TableRow key={index}>
          <TableCell align="center">{order.item}</TableCell>
          <TableCell align="center">{order.table_no}</TableCell>
          <TableCell align="center">{order.quantity}</TableCell>
          <TableCell align="center">{order.note}</TableCell>
          <TableCell align="right">{order.time}</TableCell>
          <TableCell align="right">status</TableCell>
          <TableCell align="center"><Button variant="contained" value={order.id} onClick={handleComplete}>Complete Order</Button></TableCell>
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
            <TableCell align="center">Item</TableCell>
            <TableCell align="center">Table No.</TableCell>
            <TableCell align="center">Qty.</TableCell>
            <TableCell align="center">Note</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Urgency</TableCell>
            <TableCell align="center"></TableCell>
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