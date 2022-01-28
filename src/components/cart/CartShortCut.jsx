import cartIcon from '../../assets/icons/cart.svg';
import './Cart.css';

const CartShortCut = ({ cart, handleClick }) => {
  const { cartItems } = cart;

  const cartItemCount = cartItems.length;
  return (
    <>
      <button className="relative" onClick={handleClick}>
        <img src={cartIcon} alt=""></img>
        {cartItemCount > 0 && (
          <p className="absolute bg-primary p-1 rounded-full text-xs cart-counter">
            <span>{cartItemCount}</span>
          </p>
        )}
      </button>
    </>
  );
};

export default CartShortCut;
