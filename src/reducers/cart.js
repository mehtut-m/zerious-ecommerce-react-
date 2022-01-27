const ADD_CART_ITEM = 'ADD_CART_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const LOADED_CART_ITEM = 'LOADED_CART_ITEM';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case LOADED_CART_ITEM: {
      return;
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
