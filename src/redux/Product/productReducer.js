import { set_productList } from "../constant";

const product = (data = [], action) => {
  switch (action.type) {
    case set_productList:
      return action.data;
    default:
      return data;
  }
};

export default product;
