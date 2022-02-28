import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getOrderById } from '../../api/order';
import OrderSummaryList from '../../components/CheckOut/OrderSummaryList';
import TrackingContainer from '../../components/order/OrderStatusItem/OrderTracking/TrackingContainer';
import ProgressBar from '../../components/order/OrderStatusItem/ProgressBar';
import { formatThaiCurrency } from '../../services/currencyService';

const OrderStatusDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const { orderItem = [] } = order;

  useEffect(() => {
    getOrderById(id)
      .then((res) => {
        setOrder(res.data.order || {});
        setSubTotal(res.data.subTotal);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <motion.main exit={{ opacity: 0 }} className="container">
      {/* Order Header */}
      <div className="rounded-lg overflow-hidden border">
        <div className="flex justify-between  p-6 bg-black text-white overflow-hidden">
          <Link to="/user/order" className="hover:text-primary">
            {'< Back'}
          </Link>
          <p className="font-semibold">Order No. {id}</p>
        </div>

        <ProgressBar status={order?.status} />

        {/* Order Status Info */}
        <div className="status-info flex flex-col md:flex-row bg-secondary">
          <div className="address-info md:max-w-[40%] px-6 py-4">
            <h3 className="font-semibold mb-4">Address</h3>
            <p>{order.address}</p>
          </div>

          {/* Progression Details */}
          <TrackingContainer trackingNo={order?.tracking} />
        </div>

        {/* Product Details */}
        <div className="product-list px-6 py-4">
          <h3 className="font-semibold">Order detail</h3>
          <OrderSummaryList cartItems={orderItem} />
        </div>

        <div className="order-status-footer px-6 py-4 bg-secondary">
          {/* Total Amount Detail */}
          <h3 className="font-semibold text-lg">Total</h3>

          <div className="px-2">
            <div className="flex flex-1 justify-between items-center my-2">
              <span>Sub Total</span>
              <span>{formatThaiCurrency(subTotal)}</span>
            </div>
            <div className="flex flex-1 justify-between items-center my-2">
              <span>Shipping</span>
              <span>{formatThaiCurrency(20)}</span>
            </div>
            <div className="flex flex-1 justify-between items-center my-2">
              <span>Discount</span>
              <span className="text-red-500">{formatThaiCurrency(0)}</span>
            </div>
            <div className="flex flex-1 justify-between items-center py-2 border-t">
              <span className="font-semibold text-lg mt-4">Grand Total</span>
              <span>{formatThaiCurrency(subTotal + 20 - 0)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default OrderStatusDetail;
