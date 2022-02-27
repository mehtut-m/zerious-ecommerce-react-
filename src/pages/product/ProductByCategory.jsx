import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../api/product';
import HobbyHeader from '../../components/Products/HobbyHeader';
import Catalogue from '../Catalogue';

const ProductByHobby = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  //   const activeHobby = hobbies.find((el) => el.id === categoryId);
  useEffect(() => {
    getProductByCategory(categoryId)
      .then((res) => setProducts(res.data.product))
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <main className="container flex flex-col justify-center items-center p-4 header rounded-lg my-10">
      <Catalogue products={products} />
    </main>
  );
};

export default ProductByHobby;
