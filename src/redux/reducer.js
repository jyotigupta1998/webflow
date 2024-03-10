import { addToCart, removeToCart } from "./constant";

const cart = (state = [], action) => {
  switch (action.type) {
    case addToCart:
      return [...state, action.payload];
    case removeToCart:
      let newState = state.filter((item) => item.id !== action.payload);

      return newState;
    default:
      return state;
  }
};

export default cart;
