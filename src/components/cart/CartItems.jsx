import { useContext } from 'react';

import defaultImg from '../../assets/images/default_product_img.png';
import { Link } from 'react-router-dom';
import Counter from '../products/Counter';

import { CartContext } from '../../contexts/CartContext';

const CartItems = ({ cartItem }) => {
  const { updateCartItem } = useContext(CartContext);
  const {
    amount,
    product: {
      id: productId,
      name: productName,
      price: productPrice,
      productImg,
      quantity,
    },
  } = cartItem;

  const addCount = async () => {
    await updateCartItem(productId, amount + 1);
  };
  const removeCount = async () => {
    await updateCartItem(productId, amount - 1);
  };
  const updateCount = async (value) => {
    if (value > 1) {
      await updateCartItem(productId, value);
    }
  };

  return (
    <div className="flex mb-4 gap-4">
      <img
        src={productImg || defaultImg}
        alt={productName}
        className="w-24 h-24 object-cover "
      />
      <div className="cart-item-info">
        <Link className="text-base" to={`/product/${productId}`}>
          {productName}
        </Link>
        <p>{productPrice}</p>
        <Counter
          handleClick={{ addCount, removeCount, updateCount }}
          itemCount={amount}
        />
      </div>
    </div>
  );
};

export default CartItems;
