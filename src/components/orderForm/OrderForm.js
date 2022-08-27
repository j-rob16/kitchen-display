import React, {useState} from "react";
import { Button, Typography, FormGroup, Card, CardContent, Grid, TextField, FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";

import {Form, FormTitle, SubmitButton, useStyles} from './OrderFormStyles';
import Timer from "../pendingOrders/Timer";

function OrderForm({ updateOrders }) {

  const classes = useStyles();

  const [order, setOrder] = useState({});

  const [orderItem, setOrderItem] = useState('Hamburger');
  const [orderQuantity, setOrderQuantity] = useState(1);
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
    const copiedOrder = {};
    copiedOrder.item = orderItem;
    copiedOrder.quantity = orderQuantity;
    copiedOrder.table_no = orderTableNo;
    copiedOrder.note = orderNote;
    copiedOrder.pending = true;
    copiedOrder.time_start = Date.now();
    copiedOrder.time = <Timer />
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
    evt.target.reset();
  }


  return (
    <>
      <Typography variant="h5">New Order</Typography>

      <Card>
        <CardContent>
          <Form onSubmit={saveNewOrder}>

            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item={true}>
                <FormControl fullWidth>
                  <InputLabel>Menu Item</InputLabel>
                    <Select variant="outlined" label="Menu Item" id="food-item" onChange={handleItem} required fullWidth>
                      <MenuItem value="Hamburger">Hamburger</MenuItem>
                      <MenuItem value="Fries">Fries</MenuItem>
                      <MenuItem value="Ribeye Steak">RibEye Steak</MenuItem>
                      <MenuItem value="Chicken Alfredo Fettucine">Chicken Alfredo Fettucine</MenuItem>
                    </Select>
                </FormControl>
              </Grid>

              <Grid xs={12} sm={6} item={true}>
                <FormControl fullWidth>
                  <InputLabel>Quantity</InputLabel>
                    <Select variant="outlined" label="Quantity" id="quantity" onChange={handleQuantity} required fullWidth>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="6">6</MenuItem>
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                    </Select>
                </FormControl>
              </Grid>

              <Grid xs={12} sm={6} item={true}>
                <TextField label="Table No." placeholder="Enter Table Number" variant="outlined" htmlFor="table_no" onChange={handleTableNo} fullWidth required/>
              </Grid>

              <Grid xs={12} sm={6} item={true}>
                <TextField label="Note" multiline rows={5} placeholder="Customer Order Notes" variant="outlined" htmlFor="note" onChange={handleNote} fullWidth/>
              </Grid>

              <Button variant="contained" color="primary" fullWidth type="submit" value="Add Order">Submit Order</Button>

            </Grid>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}

export default OrderForm;

