import { useEffect, useState } from 'react';
import HobbyWrapper from '../components/Navbar/HobbyWrapper';
import ProductList from '../components/products/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <main className="w-full">
      <HobbyWrapper />
      {/* <ProductList /> */}
    </main>
  );
}

export default Home;
