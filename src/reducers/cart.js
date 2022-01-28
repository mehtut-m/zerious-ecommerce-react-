const ADD_CART_ITEM = 'ADD_CART_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const LOAD_CART_ITEM = 'LOAD_CART_ITEM';

const cartReducer = (state = { order: {}, cartItems: [] }, action) => {
  switch (action.type) {
    case LOAD_CART_ITEM: {
      const { orderItem: cartItems, ...order } = action.payload;
      return { order: order, cartItems: cartItems };
    }
    case ADD_CART_ITEM: {
      return;
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
