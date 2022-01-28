const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const LOAD_CART_ITEM = 'LOAD_CART_ITEM';

const cartReducer = (state = { order: {}, cartItems: [] }, action) => {
  switch (action.type) {
    case LOAD_CART_ITEM: {
      const { orderItem: cartItems, ...order } = action.payload;

      return { order: order, cartItems: cartItems };
    }
    case UPDATE_CART_ITEM: {
      const cartIdx = state.cartItems.findIndex(
        (el) => el.id === action.payload.id
      );
      const currCart = [...state.cartItems];
      currCart[cartIdx].amount = action.payload.amount;
      // If not index found
      if (cartIdx === -1) {
        return state;
      }
      return { ...state, cartItems: [...currCart] };
    }
    case DELETE_CART_ITEM: {
      return;
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
