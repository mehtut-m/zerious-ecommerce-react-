import cartIcon from '../../assets/icons/cart.svg';
import './Cart.css';
const CartShortCut = () => {
  return (
    <div>
      <button className="relative">
        <img src={cartIcon} alt=""></img>
        <p className="absolute bg-primary p-1 rounded-full text-xs cart-counter">
          2
        </p>
      </button>
    </div>
  );
};

export default CartShortCut;
