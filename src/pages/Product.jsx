import axios from '../config/axios';
import defaultImg from '../assets/images/default_product_img.png';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/product';
import { formatThaiCurrency } from '../services/currencyService';

import Counter from '../components/products/Counter';
import AddToCartBtn from '../components/cart/AddToCartBtn';
import Button from '../components/Button';
import ProductCarousel from '../components/products/Carousel';
import { toast } from 'react-toastify';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [itemCount, setItemCount] = useState(1);

  const addCount = () => {
    setItemCount((prev) => {
      if (prev < product.quantity) {
        return prev + 1;
      }
      toast.error('Sorry, This is all we have instock');
      return prev;
    });
  };
  const updateCount = (value) => {
    setItemCount(value > product.quantity ? product.quantity : value);
  };
  const removeCount = () => {
    setItemCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container m-auto">
      <div className="product-info flex flex-wrap justify-between w-full container">
        <div className="product-img-container w-full md:max-w-md">
          <img
            className="product-img mb-10 w-full"
            src={product.productImg || defaultImg}
            alt={product.name}
          />
        </div>

        <div className="product-content-container flex flex-col gap-4 max-w-md">
          <div>
            <h2 className="product-description text-2xl font-semibold">
              {product.name}
            </h2>
            <p className="product-description">
              ฿ {formatThaiCurrency(product.price)}
            </p>
          </div>
          <p className="product-description">{product.description}</p>

          <Counter
            itemCount={itemCount}
            handleClick={{ addCount, removeCount, updateCount }}
          />
          <Button text={'Add to Cart'} className={'bg-primary text-base'} />
        </div>
      </div>
    </div>
  );
};

export default Product;
