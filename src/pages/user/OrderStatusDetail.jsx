import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOrderById } from '../../api/order';
import OrderSummaryList from '../../components/checkOut/OrderSummaryList';
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
    <div>
      {/* Order Header */}
      <div className="flex justify-between bg-slate-500">
        <Link to="/user/order">Back</Link>
        <p>Order No. {id}</p>
      </div>

      <ProgressBar />

      {/* Order Status Info */}
      <div className="status-info flex flex-col md:flex-row ">
        <div className="address-info bg-red-400 md:max-w-[40%] px-6">
          <h3>Address</h3>
          <p>เมธัส เมนอน</p>
          <p>
            (+66) 814304912 28/10 ชักพระซอย10.ชักพระ แขวงตลิ่งชัน เขตตลิ่งชัน
            กทม. 10170 เขตตลิ่งชัน จังหวัดกรุงเทพมหานคร 10170
          </p>
        </div>

        {/* Progression Details */}
        <TrackingContainer />
      </div>

      {/* Product Details */}
      <div className="product-list px-6">
        <h3 className="font-semibold">Order detail</h3>
        <OrderSummaryList cartItems={orderItem} />
      </div>

      {/* Total Amount Detail */}
      <div>
        <h3>Total</h3>

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
          <div className="flex flex-1 justify-between items-center py-2 border-t mb-5">
            <span>Grand Total</span>
            <span>{formatThaiCurrency(subTotal + 20 - 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
