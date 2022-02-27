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
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProductByHobby from '../pages/product/ProductByHobby';
import AllProduct from '../pages/product/AllProduct';

function RouteConfig() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const {
    user: { isAuth },
  } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(false);
  }, [isAuth]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/product/" element={<AllProduct />} />
          <Route path="/hobby/:hobbyId" element={<ProductByHobby />} />
          <Route path="/product/:id" element={<Product />} />
          {!isLoading && isAuth ? (
            <>
              <Route path="/test" element={<Test />} />
              <Route path="/user/profile" element={<Profile />} />
              <Route path="/user/address" element={<Address />} />
              <Route path="/user/order" element={<OrderStatusSummary />} />
              <Route path="/user/order/:id" element={<OrderStatusDetail />} />
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
      </AnimatePresence>
    </>
  );
}

export default RouteConfig;
