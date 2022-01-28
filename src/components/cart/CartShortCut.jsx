import cartIcon from '../../assets/icons/cart.svg';
import './Cart.css';
const CartShortCut = ({ cart }) => {
  const { order, cartItems } = cart;
  console.log(cartItems);
  const cartItemCount = cartItems.length;
  return (
    <div>
      <button className="relative">
        <img src={cartIcon} alt=""></img>
        {
          <p className="absolute bg-primary p-1 rounded-full text-xs cart-counter">
            {cartItemCount}
          </p>
        }
      </button>
    </div>
  );
};

export default CartShortCut;
