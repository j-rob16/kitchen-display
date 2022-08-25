import React, {useState} from "react";

function OrderForm({ updateOrders }) {

  const [orders, setOrders] = useState([])

  const [orderItem, setOrderItem] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [orderTableNo, setOrderTableNo] = useState(0);
  const [orderNote, setOrderNote] = useState('');

  const handleItem = (evt) => {
    setOrderItem(evt.target.value);
  }

  const handleQuantity = (evt) => {
    setOrderQuantity(evt.target.value);
  }

  const handleTableNo = (evt) => {
    setOrderTableNo(evt.target.value);
  }

  const handleNote = (evt) => {
    setOrderNote(evt.target.value);
  }

  const saveNewOrder = (evt) => {
    evt.preventDefault();
    const copiedOrders = [...orders];
    copiedOrders.push({item: orderItem, quantity: orderQuantity, table_no: orderTableNo, note: orderNote});
    setOrders(copiedOrders);
    updateOrders(copiedOrders);
    setOrders([]);
    setOrderItem('');
    setOrderQuantity(0);
    setOrderTableNo(0);
    setOrderNote('');
  }

 

  return (
    <>
      <h2>New Order-</h2>
      <form onSubmit={saveNewOrder}>

        <label>
          Item:
          <select id="food-item" onChange={handleItem} placeholder="Hamburger">
            <option value="select">Select an Item</option>
            <option value="hamburger">Hamburger</option>
            <option value="fries">Fries</option>
            <option value="ribeye steak">RibEye Steak</option>
            <option value="chicken alfredo fettucine">Chicken Alfredo Fettucine</option>
          </select>
        </label>

        <label>
          Quantity:
          <select id="item-quantity" onChange={handleQuantity} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <label htmlFor="table-no">
          Table No.:
        </label>
          <input id="table-no" type="text" onChange={handleTableNo} required/>

        <label htmlFor="note">
          Note:
        </label>
        <input id="note" type="text" onChange={handleNote} />

        <input type="submit" value="Add Order"/>

      </form>
    </>
  )
}

export default OrderForm;