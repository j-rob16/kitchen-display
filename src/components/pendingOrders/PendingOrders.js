import { Typography } from "@material-ui/core";
import React from "react";
import OrderTable from "./OrderTable";

function PendingOrders({ orders, completeOrder }) {
  return (
    <>
      <Typography variant="h5">Pending Orders</Typography>
      <OrderTable orders={orders} completeOrder={completeOrder} />
    </>

  )
}

export default PendingOrders;