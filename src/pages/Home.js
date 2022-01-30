import { useEffect, useState } from 'react';
import HobbyWrapper from '../components/navbar/HobbyWrapper';
import ProductList from '../components/products/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <main className="">
      <HobbyWrapper />
      <ProductList />
    </main>
  );
}

export default Home;
