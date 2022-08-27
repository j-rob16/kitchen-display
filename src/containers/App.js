import React, {useState} from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Kitchen } from '@material-ui/icons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers/index.js';

import OrderForm from '../components/orderForm/OrderForm.js';
import PendingOrders from '../components/pendingOrders/PendingOrders.js';
import Timer from '../components/pendingOrders/Timer.js';
import PerformanceTracking from '../components/performanceTracking/PerformanceTracking.js';
import {Header, Main, Title, useStyles} from './AppStyles.js';

const store = createStore(reducers)

function App() {

  const classes = useStyles();

  const [openOrder, setOpenOrder] = useState('openOrder');
  const [orders, setOrders] = useState([]);

  const updateOrders = (order) => {
    const copiedOrders = [...orders];
    order.timer = <Timer getTime={(time) => order.time = time}/>;
    order.id = orders.length + 1;
    copiedOrders.push(order);
    setOrders(copiedOrders);
  }

  const completeOrder = (order) => {
    const copiedOrders = [...orders];
    for (let i = 0; i < copiedOrders.length; i++) {
      if (order.id === copiedOrders[i].id) {
        copiedOrders[i].pending = false;
      }
    }
    setOrders(copiedOrders);
  }

  return ( 
    <Provider store={store}>
      <h1>TMRZ</h1>
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
      <PendingOrders orders={orders} completeOrder={completeOrder} />
      <PerformanceTracking />
    </Provider>

  );
}

export default App;