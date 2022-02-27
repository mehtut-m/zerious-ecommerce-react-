import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero/Hero';
import HobbyWrapper from '../components/Navbar/HobbyWrapper';
import InitialTransition from '../components/InitialTransition';
import ProductList from '../components/Products/ProductList';
import NewItemList from '../components/Products/NewItemList';
import TrendingList from '../components/Products/TrendingList';
import { motion } from 'framer-motion';

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <InitialTransition />
      <main className="w-full py-16">
        <motion.div exit={{ opacity: 0 }}>
          <HobbyWrapper />
          <Hero />
          {/* Top trending */}
          <TrendingList />
          <NewItemList />
        </motion.div>
      </main>
    </>
  );
}

export default Home;
