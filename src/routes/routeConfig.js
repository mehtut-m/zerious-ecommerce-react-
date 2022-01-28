import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Test from '../pages/Test';

function RouteConfig() {
  const {
    user: { isAuth },
  } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/test" element={<Test />} />

      {isAuth ? (
        <>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
        // </Route>
      )}
    </Routes>
  );
}

export default RouteConfig;
