import { createContext, useEffect, useReducer, useContext } from 'react';
import cartReducer from '../reducers/cart';
import { updateCart, getMyCart, deleteItem } from '../api/cart';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const {
    user: { user },
  } = useContext(AuthContext);

  const [cart, dispatch] = useReducer(cartReducer, {
    order: {},
    cartItems: [],
  });

  const navigate = useNavigate();

  const loadCartInfo = () => {
    if (user) {
      getMyCart(user.id)
        .then((res) => {
          dispatch({
            type: 'LOAD_CART_ITEM',
            payload: res.data.order,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (user) {
      loadCartInfo();
    }
  }, [user]);

  const updateCartItem = async (productId, amount) => {
    if (amount === 0) {
      return;
    }
    // // Check if current cart has this product
    const itemIdx = cart.cartItems.findIndex(
      (el) => el.product.id === productId
    );

    try {
      const res = await updateCart(productId, amount);
      if (res.status === 200) {
        dispatch({
          type: 'UPDATE_CART_ITEM',
          payload: res.data.orderItem,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCartItem = async (orderItemId) => {
    try {
      const res = await deleteItem(orderItemId);
      if (res.status === 204) {
        dispatch({
          type: 'DELETE_CART_ITEM',
          payload: { orderItemId: orderItemId },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const successfullyCheckout = () => {
    toast.success('Thakyou for your purchase');
    setTimeout(() => {
      navigate('/');
      loadCartInfo();
    }, 2500);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCartItem,
        loadCartInfo,
        successfullyCheckout,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export { CartContext };
