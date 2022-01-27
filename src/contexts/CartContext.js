import { createContext, useEffect, useReducer, useContext } from 'react';
import cartReducer from '../reducers/cart';
import { getMyCart } from '../api/cart';
import { AuthContext } from '../contexts/AuthContext';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const {
    user: { user },
  } = useContext(AuthContext);

  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    if (user) {
      getMyCart(user.id)
        .then((res) => {
          dispatch({
            type: 'LOGOUT',
            payload: {},
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <CartContext.Provider value={{ cartItem: { ...cart } }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export { CartContext };
