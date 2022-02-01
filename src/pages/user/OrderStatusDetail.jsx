import React from 'react';
import { useParams } from 'react-router-dom';

const OrderStatusDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="">Header Bar</div>
      <div>Progress Bar</div>
      <div>Status Info</div>
      <div>Product List</div>
      <div>Total</div>
    </div>
  );
};

export default OrderStatusDetail;
