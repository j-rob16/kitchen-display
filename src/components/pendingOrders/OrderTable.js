import Timer from "./Timer"

function OrderTable({orders}) {

  const completeOrderButton = (order) => {
    return <button onClick={() => {order.pending = false}}>Complete Order</button>
  }

  const orderRow = orders.map((order) => {
    if (order.pending === true) {
      return (
        <tr>
          <td>{order.table_no}</td>
          <td>{order.item}</td>
          <td>{order.quantity}</td>
          <td>{order.note}</td>
          <td> <Timer /> </td>
          <td>status</td>
          <td>{completeOrderButton(order)}</td>
        </tr>
      )
    }
  })

  return (
    <table>
      <tr>
        <th>Table No.</th>
        <th>Item</th>
        <th>Qty.</th>
        <th>Note</th>
        <th>Time</th>
        <th>Status</th>
        <th>Complete</th>
      </tr>
      {orderRow}
    </table>
  )
}

export default OrderTable;