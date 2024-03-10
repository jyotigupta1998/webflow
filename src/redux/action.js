import { addToCart, removeToCart } from "./constant";

export const add_Cart = (payload) => {

  return {
    type: addToCart,
    payload,
  };
};
export const remove_Cart = (payload) => {
  return {
    type: removeToCart,
    payload,
  };
};
