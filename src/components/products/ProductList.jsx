import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { getAllProduct } from '../../api/product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch product on load
  useEffect(() => {
    getAllProduct()
      .then((res) => setProducts([...res.data.products]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
