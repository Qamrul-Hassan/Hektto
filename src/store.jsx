import { createStore } from "redux";

// Initial state
const initialState = {
  cart: {
    items: [],
  },
};

// Reducer to manage cart state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Add the new item to the cart
      return {
        ...state,
        cart: {
          items: [...state.cart.items, action.payload],
        },
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

export default store;
