import React from "react";
import OrderTable from "./OrderTable";

function PendingOrders({ orders, completeOrder }) {
  return (
    <>
      <OrderTable orders={orders} completeOrder={completeOrder} />
    </>

  )
}

export default PendingOrders;