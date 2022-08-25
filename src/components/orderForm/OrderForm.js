import React, {useState} from "react";

import {Form, FormTitle, SubmitButton} from './OrderFormStyles';

function OrderForm({ updateOrders }) {

  const [order, setOrder] = useState({
    item: '', 
    quantity: 0, 
    table_no: 0, 
    note: '',
    pending: false,
    time: 0
  })

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
    const copiedOrder = order;
    copiedOrder.item = orderItem;
    copiedOrder.quantity = orderQuantity;
    copiedOrder.table_no = orderTableNo;
    copiedOrder.note = orderNote;
    copiedOrder.pending = true;
    setOrder(copiedOrder);
    updateOrders(copiedOrder);
    setOrder({
      item: '', 
      quantity: 0, 
      table_no: 0, 
      note: ''
    });
    setOrderItem('');
    setOrderQuantity(0);
    setOrderTableNo(0);
    setOrderNote('');
  }

 

  return (
    <>
      <FormTitle>New Order</FormTitle>
      <Form onSubmit={saveNewOrder}>

        <label>
          Item:
          <select id="food-item" onChange={handleItem} placeholder="Hamburger">
            <option value="select">Select an Item</option>
            <option value="Hamburger">Hamburger</option>
            <option value="Fries">Fries</option>
            <option value="Ribeye Steak">RibEye Steak</option>
            <option value="Chicken Alfredo Fettucine">Chicken Alfredo Fettucine</option>
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

        <SubmitButton type="submit" value="Add Order"/>

      </Form>
    </>
  )
}

export default OrderForm;