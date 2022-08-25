import React, {useState} from 'react';

import OrderForm from '../components/orderForm/OrderForm.js';
import PendingOrders from '../components/pendingOrders/PendingOrders.js';
import PerformanceTracking from '../components/performanceTracking/PerformanceTracking.js';
import {Title} from './AppStyles.js';

function App() {

  const [openOrder, setOpenOrder] = useState('openOrder');

  return ( 
    <>
      <Title> Kitchen Display </Title>

      {/* New order button renders the order form field. On order submit, field will close  */}
      {!openOrder && <button onClick={() => setOpenOrder('openOrder')}>New Order</button>}
      {openOrder === 'openOrder' && <OrderForm />}
      {openOrder && <button onClick={() => setOpenOrder('')} >Order</button>}

      <PendingOrders />
      <PerformanceTracking />
    </>

  );
}

export default App;