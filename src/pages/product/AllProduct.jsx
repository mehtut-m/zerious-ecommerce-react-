import { useState } from 'react';
import { useEffect } from 'react';
import { getAllProduct } from '../../api/product';
import HobbyHeader from '../../components/Products/HobbyHeader';
import Catalogue from '../Catalogue';

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setProducts([...res.data.products]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="container flex flex-col justify-center items-center p-4 header rounded-lg my-10">
      <HobbyHeader
        item={{ name: 'All Items', description: 'Browse all the great stuff.' }}
      />
      <Catalogue products={products} />
    </main>
  );
};

export default AllProduct;
