import React from "react";
import OrderTable from "./OrderTable";

function PendingOrders({ orders, completeOrder }) {
  return (
    <>
      <h2>Pending Orders</h2>
      <OrderTable orders={orders} compleOrder={completeOrder} />
    </>

  )
}

export default PendingOrders;