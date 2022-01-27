import { useEffect, useState } from 'react';
import ProductList from '../components/products/ProductList';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="bg-green-500">
      <ProductList />
    </div>
  );
}

export default Home;
