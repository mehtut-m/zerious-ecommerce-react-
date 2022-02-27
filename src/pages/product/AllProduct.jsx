import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProduct } from '../../api/product';
import Catalogue from '../Catalogue';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const { hobbyId } = useParams();

  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setProducts([...res.data.products]);
      })
      .catch((err) => console.log(err));
  }, []);

  return <Catalogue products={products} />;
};

export default AllProduct;
