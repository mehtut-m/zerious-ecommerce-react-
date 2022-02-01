import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Test from '../pages/Test';
import OrderStatusDetail from '../pages/user/OrderStatusDetail';
import Checkout from '../pages/Checkout';
import OrderStatusSummary from '../pages/user/OrderStatusSummary';

function RouteConfig() {
  const {
    user: { isAuth },
  } = useContext(AuthContext);
  console.log(isAuth);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/product/:id" element={<Product />} />
      {/* <Route path="/checkout" element={<Checkout />} /> */}

      <Route path="/user/order" element={<OrderStatusSummary />} />
      <Route path="/user/order/:id" element={<OrderStatusDetail />} />
      {isAuth ? (
        <>
          <Route path="/checkout" element={<Checkout />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteConfig;
