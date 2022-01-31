import { createContext, useEffect, useReducer, useContext } from 'react';
import cartReducer from '../reducers/cart';
import { updateCart } from '../api/cart';
import { getMyCart } from '../api/cart';
import { AuthContext } from '../contexts/AuthContext';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const {
    user: { user },
  } = useContext(AuthContext);

  const [cart, dispatch] = useReducer(cartReducer, {
    order: {},
    cartItems: [],
  });

  useEffect(() => {
    if (user) {
      getMyCart(user.id)
        .then((res) => {
          console.log(res);
          dispatch({
            type: 'LOAD_CART_ITEM',
            payload: res.data.order,
          });
        })
        .catch((err) => console.log(err));
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

  return (
    <CartContext.Provider value={{ cart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export { CartContext };
