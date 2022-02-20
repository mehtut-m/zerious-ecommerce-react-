import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div
      className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 justify-items-center gap-y-4 grid-flow-row	"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
    >
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
