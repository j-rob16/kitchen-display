import React, {useState} from 'react';

import OrderForm from '../components/orderForm/OrderForm.js';
import PendingOrders from '../components/pendingOrders/PendingOrders.js';
import PerformanceTracking from '../components/performanceTracking/PerformanceTracking.js';
import {Button, Header, Main, Title} from './AppStyles.js';

function App() {

  const [openOrder, setOpenOrder] = useState('openOrder');
  const [orders, setOrders] = useState([]);

  const updateOrders = (formOrder) => {
    const copiedOrders = [...orders];
    copiedOrders.push(formOrder);
    setOrders(copiedOrders);
  }

  return ( 
    <Main>
      <Header>
        <Title> Kitchen Display </Title>
      </Header>

      {/* New order button renders the order form field. On order submit, field will close  */}
      {!openOrder && <Button onClick={() => setOpenOrder('openOrder')}>New Order</Button>}
      {openOrder === 'openOrder' && <OrderForm updateOrders={updateOrders}/>}
      {openOrder && <Button onClick={() => setOpenOrder('')} >Close Ordering Tab</Button>}

      {/* make appearance conditional on !orders */}
      <PendingOrders orders={orders} />
      <PerformanceTracking />
    </Main>

  );
}

export default App;