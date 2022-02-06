import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OrderSummaryList from '../../CheckOut/OrderSummaryList';
import { formatThaiCurrency } from '../../../services/currencyService';

const ORDER_STATUS = {
  PLACED: 'Your order has been placed',
  PAID: 'Payment recieved',
  SHIPPED: 'Shipment is in progress',
  COMPLETED: 'Your order is complete',
};

const OrderStatusItem = ({ order }) => {
  const { id, status, orderItem, discount } = order;
  const { pathname } = useLocation();

  const subTotal = orderItem.reduce((sum, item) => {
    return item.product.price * item.amount + sum;
  }, 0);
  const grandTotal = subTotal - discount;

  useEffect(() => {}, []);

  return (
    <li className="order-status-item border pb-6 mb-3 rounded-xl overflow-hidden">
      <Link to={`${pathname}/${id}`}>
        <div className="status-item-header flex justify-between p-6 bg-black text-white hover:text-primary">
          <span className="font-semibold">Order No. {id}</span>
          <span className="text-right">{ORDER_STATUS[status]}</span>
        </div>
        <div className="p-6">
          <ul className="status-item-preview">
            <OrderSummaryList cartItems={orderItem} />
          </ul>
          <div className="status-item-footer pt-3">
            <p className="text-right ml-auto block">
              <span className="mr-2 font-semibold">Total</span>
              {formatThaiCurrency(grandTotal)}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default OrderStatusItem;
