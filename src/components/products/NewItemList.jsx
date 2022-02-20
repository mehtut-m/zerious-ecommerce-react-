import { useState, useEffect } from 'react';
import { getAllProduct } from '../../api/product';
import ProductList from './ProductList';
function NewItemList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setProducts([...res.data.products]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="container m-auto rounded py-4 my-8">
      <h1 className="flex font-medium text-black text-xl mb-6">New Arrival</h1>
      <ProductList products={products} />
    </section>
  );
}

export default NewItemList;
