import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero/Hero';
import HobbyWrapper from '../components/Navbar/HobbyWrapper';
import ProductItem from '../components/Products/ProductItem';
import ProductList from '../components/Products/ProductList';
import TrendingList from '../components/Products/TrendingList';

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <main className="w-full py-16">
      {/* <div> */}
      <Hero />
      {/* </div> */}
      <HobbyWrapper />
      {/* Top trending */}
      <TrendingList />
      {/* <ProductList /> */}
    </main>
  );
}

export default Home;
