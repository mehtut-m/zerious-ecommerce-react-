import { useContext, useEffect, useState } from 'react';
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
import Profile from '../pages/user/Profile';
import Address from '../pages/user/Address';

function RouteConfig() {
  const {
    user: { isAuth },
  } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/product/:id" element={<Product />} />

      <Route path="/user/profile" element={<Profile />} />
      <Route path="/user/address" element={<Address />} />
      <Route path="/user/order" element={<OrderStatusSummary />} />
      <Route path="/user/order/:id" element={<OrderStatusDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      {isAuth ? (
        <></>
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
