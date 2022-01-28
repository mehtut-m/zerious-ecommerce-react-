import { createContext, useEffect, useReducer, useContext } from 'react';
import cartReducer from '../reducers/cart';
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
          dispatch({
            type: 'LOAD_CART_ITEM',
            payload: res.data.order,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const addItemToCart = async (productItem) => {
    try {
    } catch (error) {}
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export { CartContext };
