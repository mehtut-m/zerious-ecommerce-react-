import React from 'react';
import Button from '../Button';

const OrderSummaryFooter = () => {
  return (
    <div>
      <div className="flex flex-1 justify-between items-center my-2">
        <span>Sub Total</span>
        <span>฿ 1900</span>
      </div>
      <div className="flex flex-1 justify-between items-center my-2">
        <span>Shipping</span>
        <span>฿ 20</span>
      </div>
      <div className="flex flex-1 justify-between items-center my-2">
        <span>Discount</span>
        <span className="text-red-500">฿ 0</span>
      </div>
      <div className="flex flex-1 justify-between items-center py-2 border-t">
        <span>Grand Total</span>
        <span>฿ 1900</span>
      </div>
      <Button text={'Proceed to Payment'} />
    </div>
  );
};

export default OrderSummaryFooter;
