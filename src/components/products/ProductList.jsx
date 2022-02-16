import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="grid md:grid-cols-3 2xl:grid-cols-3 justify-items-center gap-y-4">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
