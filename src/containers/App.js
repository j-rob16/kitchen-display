import React, {useState} from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Kitchen } from '@material-ui/icons';

import OrderForm from '../components/orderForm/OrderForm.js';
import PendingOrders from '../components/pendingOrders/PendingOrders.js';
import PerformanceTracking from '../components/performanceTracking/PerformanceTracking.js';
import {Header, Main, Title, useStyles} from './AppStyles.js';

function App() {

  const classes = useStyles();

  const [openOrder, setOpenOrder] = useState('openOrder');
  const [orders, setOrders] = useState([]);

  const updateOrders = (order) => {
    const copiedOrders = [...orders];
    order.id = orders.length;
    copiedOrders.push(order);
    setOrders(copiedOrders);
  }

  const completeOrder = (order) => {
    const copiedOrders = [...orders];
    copiedOrders[order.id].pending = false;
    copiedOrders[order.id].time_finish = Date.now();
    setOrders(copiedOrders);
  }

  return ( 
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Kitchen />
          <Typography variant="h5">Kitchen Display</Typography>
        </Toolbar>
      </AppBar>
      {/* <Header>
        <Title> Kitchen Display </Title>
      </Header> */}

      {/* New order button renders the order form field. On order submit, field will close  */}
      {!openOrder && <Button variant="outlined" className={classes.buttons} onClick={() => setOpenOrder('openOrder')}>New Order</Button>}
      {openOrder === 'openOrder' && <OrderForm updateOrders={updateOrders}/>}
      {openOrder && <Button variant="outlined" className={classes.buttons} onClick={() => setOpenOrder('')} >Close Orders Tab</Button>}

      {/* make appearance conditional on !orders */}
      {orders.length >= 1 && <PendingOrders orders={orders} completeOrder={completeOrder} />}
      {orders.length >= 1 && <PerformanceTracking orders={orders} />}
    </>

  );
}

export default App;