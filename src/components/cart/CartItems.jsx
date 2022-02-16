import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Products/Counter';
import { CartContext } from '../../contexts/CartContext';
import { formatThaiCurrency } from '../../services/currencyService';
import defaultImg from '../../assets/images/default-product-img.png';

const CartItems = ({ cartItem }) => {
  const { updateCartItem, deleteCartItem } = useContext(CartContext);
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
  const deleteItem = async () => {
    try {
      await deleteCartItem(cartItem.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex mb-4 gap-4 ">
      <img
        src={productImg?.length > 0 ? productImg[0].productImg : defaultImg}
        alt={productName}
        className="w-24 h-24 object-cover "
      />
      <div className="cart-item-info flex flex-col justify-between w-full">
        <div className="flex justify-between w-full">
          <Link
            className="text-base font-semibold"
            to={`/product/${productId}`}
          >
            {productName}
          </Link>

          <button className="block" onClick={deleteItem}>
            <i className="bi bi-x-lg text-sm"></i>
          </button>
        </div>
        <p className="text-base">{formatThaiCurrency(productPrice)}</p>
        <Counter
          handleClick={{ addCount, removeCount, updateCount }}
          itemCount={amount}
        />
      </div>
    </div>
  );
};

export default CartItems;
