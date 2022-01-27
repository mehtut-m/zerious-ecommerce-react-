const ADD_CART_ITEM = 'ADD_CART_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
const LOADED_CART_ITEM = 'LOADED_CART_ITEM';

const cartReducer = (state, action) => {
  switch (action.type) {
    case LOADED_CART_ITEM: {
      console.log(state);
      return;
    }
    case ADD_CART_ITEM: {
      return;
    }
    case DELETE_CART_ITEM: {
      return;
    }
    case UPDATE_CART_ITEM: {
      return;
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
