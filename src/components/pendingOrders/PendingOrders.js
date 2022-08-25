import React from "react";
import OrderTable from "./OrderTable";

function PendingOrders({ orders }) {
  return (
    <>
      <h2>Pending Orders</h2>
      <OrderTable orders={orders} />
    </>

  )
}

export default PendingOrders;