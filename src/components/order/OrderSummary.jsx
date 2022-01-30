import React from 'react';
import OrderSummaryList from './OrderSummaryList';

const OrderSummary = () => {
  return (
    <div className="order-summary-container">
      <h2 className="text-xl">Order Summary</h2>
      <OrderSummaryList />
    </div>
  );
};

export default OrderSummary;
