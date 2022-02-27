import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByHobby } from '../../api/product';
import HobbyHeader from '../../components/Products/HobbyHeader';
import Catalogue from '../Catalogue';

const hobbies = [
  {
    id: '1',
    name: 'Desktop Gaming',
    description:
      'Build your coolest high-end desktop gaming setup and all gadgets to make your best experience',
  },
  {
    id: '2',
    name: 'Desk Decorating',
    description:
      'Because your desk is helps make you to be productive. We will help you make the best of it',
  },
  { id: '3', name: 'Gadgets', description: '' },
  { id: '4', name: 'Entertainment', description: '' },
  { id: '5', name: 'Collectible', description: '' },
  { id: '6', name: 'Smart Home', description: '' },
  { id: '7', name: 'Console Gaming', description: '' },
  { id: '8', name: 'Photography', description: '' },
  { id: '9', name: 'Work Out', description: '' },
];

const ProductByHobby = () => {
  const [products, setProducts] = useState([]);
  const { hobbyId } = useParams();
  const activeHobby = hobbies.find((el) => el.id === hobbyId);
  useEffect(() => {
    getProductByHobby(hobbyId)
      .then((res) => setProducts(res.data.product))
      .catch((err) => console.log(err));
  }, [hobbyId]);

  return (
    <main className="container flex flex-col justify-center items-center p-4 header rounded-lg my-10">
      <HobbyHeader item={activeHobby} />
      <Catalogue products={products} />
    </main>
  );
};

export default ProductByHobby;
