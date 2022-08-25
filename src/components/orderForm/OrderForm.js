import React, {useState} from "react";

function OrderForm() {

  const handleItemSubmit = (evt) => {}

  return (
    <>
      <h2>Order Form component</h2>
      <form>
        <label>
          Item:
          <select>
            <option value="hamburger">Hamburger</option>
            <option value="fries">Fries</option>
            <option value="ribeye steak">RibEye Steak</option>
            <option value="chicken alfredo fettucine">Chicken Alfredo Fettucine</option>
          </select>
        </label>
        <label>
          Quantity:
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Table No.:
          <input type="text" required/>
        </label>
        <label>
          Note:
          <textarea />
        </label>
        <input type="submit" value="Submit"></input>

      </form>
    </>
  )
}

export default OrderForm;