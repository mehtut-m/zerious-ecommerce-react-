import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero/Hero';
import HobbyWrapper from '../components/Navbar/HobbyWrapper';
import ProductItem from '../components/Products/ProductItem';
import ProductList from '../components/Products/ProductList';
import NewItemList from '../components/Products/NewItemList';
import TrendingList from '../components/Products/TrendingList';
import { motion } from 'framer-motion';

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <main className="w-full py-16">
        {/* <div> */}
        <Hero />
        {/* </div> */}
        <HobbyWrapper />
        {/* Top trending */}
        <TrendingList />
        <NewItemList />
        {/* <ProductList /> */}
      </main>
    </motion.div>
  );
}

export default Home;
