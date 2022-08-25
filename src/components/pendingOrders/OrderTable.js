function OrderTable({orders}) {

  const orderRow = orders.map((order) => {
    return (
      <tr>
        <td>{order.table_no}</td>
        <td>{order.item}</td>
        <td>{order.quantity}</td>
        <td>{order.note}</td>
        <td>status</td>
        <td>button</td>
      </tr>
    )
  })

  return (
    <table>
      <tr>
        <th>Table No.</th>
        <th>Item</th>
        <th>Qty.</th>
        <th>Note</th>
        <th>Status</th>
        <th>Complete</th>
      </tr>
      {orderRow}
    </table>
  )
}

export default OrderTable;