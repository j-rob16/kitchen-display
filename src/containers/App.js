import React, {useState} from 'react';

import OrderForm from '../components/orderForm/OrderForm.js';
import PendingOrders from '../components/pendingOrders/PendingOrders.js';
import PerformanceTracking from '../components/performanceTracking/PerformanceTracking.js';
import {Title} from './AppStyles.js';

function App() {

  const [openOrder, setOpenOrder] = useState('openOrder');
  const [orders, setOrders] = useState([]);

  const updateOrders = (formOrder) => {
    const copiedOrders = [...orders];
    copiedOrders.push(formOrder);
    setOrders(copiedOrders);
  }

  const completeOrder = (order) => {

  }

  return ( 
    <>
      <Title> Kitchen Display </Title>

      {/* New order button renders the order form field. On order submit, field will close  */}
      {!openOrder && <button onClick={() => setOpenOrder('openOrder')}>New Order</button>}
      {openOrder === 'openOrder' && <OrderForm updateOrders={updateOrders}/>}
      {openOrder && <button onClick={() => setOpenOrder('')} >Close Ordering Tab</button>}

      {/* make appearance conditional on !orders */}
      <PendingOrders orders={orders} completeOrder={completeOrder}/>
      <PerformanceTracking />
    </>

  );
}

export default App;