import './Cart.css';
import CartItemList from './CartItemList';
import Button from '../Button';
import CartFooter from './CartFooter';
import Drawer from '../Drawer';
import { useNavigate } from 'react-router-dom';

const CartInfo = ({ closeCanvas, cartOn, cart }) => {
  const { cartItems } = cart;
  const navigate = useNavigate();

  return (
    <>
      <Drawer drawerOn={cartOn} handleCloseDrawer={closeCanvas}>
        <div className="cart-header pb-5 border-b flex justify-between">
          <h3 className="text-2xl mt-8">My Cart</h3>
          <button onClick={closeCanvas}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        {cartItems.length < 1 ? (
          <p className="pt-5 text-base">Your cart is Empty.</p>
        ) : (
          <>
            <CartItemList cartItems={cartItems} />
            <div className="cart-footer pt-5 border-t mt-auto">
              <CartFooter cartItems={cartItems} />
              <Button
                text="Check Out"
                handleClick={() => {
                  navigate('/checkout');
                }}
              ></Button>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
};

export default CartInfo;
