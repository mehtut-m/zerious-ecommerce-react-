import defaultImg from '../assets/images/default-product-img.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../api/product';
import { formatThaiCurrency } from '../services/currencyService';
import { motion } from 'framer-motion';
import Counter from '../components/Products/Counter';
import BreadCrumb from '../components/BreadCrumb';
import Button from '../components/Button';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';

const Product = () => {
  const { cart, updateCartItem } = useContext(CartContext);
  const {
    user: { user, isAuth },
  } = useContext(AuthContext);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [itemCount, setItemCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        console.log(res.data.product);
        setProduct(res.data.product);
      })
      .catch((err) => console.log(err));
  }, [id]);

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

  const handleAddToCart = async () => {
    try {
      // Check if user is log in
      if (!isAuth) {
        return navigate('/login');
      }
      // Check if current cart has this product
      const isInCartIdx = cart.cartItems.findIndex((el) => {
        return el.product.id === product.id;
      });
      // Check if current cart has this product
      if (isInCartIdx === -1) {
        await updateCartItem(product.id, itemCount);
      } else {
        const prevAmount = cart.cartItems[isInCartIdx].amount;
        await updateCartItem(product.id, prevAmount + itemCount);
      }
      toast.success(`Item has been added to your cart.`, { autoClose: 1750 });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.main exit={{ opacity: 0 }} className="container mx-auto">
      <BreadCrumb>
        <li className="breadcrumb-item text-gray-400 after:content-['>'] after:ml-1 mr-1">
          <Link to={`/product/category/${product?.category.hobby.id}`}>
            {product?.category.hobby.name}
          </Link>
        </li>
        <li className="breadcrumb-item text-gray-400  after:content-['>'] after:ml-1 mr-1">
          <Link to={`/product/${id}`}>{product?.category.name}</Link>
        </li>
        <li className="breadcrumb-item text-black">
          <Link to={`/product/${id}`}>{product?.name}</Link>
        </li>
      </BreadCrumb>

      <div className="product-info flex flex-wrap justify-around w-full container">
        {/* Product container */}
        <div className="product-img-container w-full md:max-w-md">
          <img
            className="product-img mb-10 w-full"
            src={
              product?.productImg.length > 0
                ? product.productImg[0].productImg
                : defaultImg
            }
            alt={product?.name}
          />
        </div>
        {/* Product Info */}
        <div className="product-content-container flex flex-col gap-4 max-w-lg w-[512px]">
          <h2 className="product-description text-3xl font-meduim w-full">
            {product?.name}
          </h2>

          <p className="product-description mb-4 w-full">
            {product?.description}
          </p>
          <p className="product-description font-light text-3xl mb-5">
            {formatThaiCurrency(product?.price)}
          </p>
          <Counter
            itemCount={itemCount}
            handleClick={{ addCount, removeCount, updateCount }}
          />
          <Button
            text={'Add to Cart'}
            className={'bg-primary text-base'}
            handleClick={handleAddToCart}
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Product;
