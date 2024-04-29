// import { addToCart, removeToCart } from "./constant";

// const cart = (state = [], action) => {
//   switch (action.type) {
//     case addToCart:

//     function isProductInCart(Cart, AddedProduct) {
//       return Cart.some(obj => isEqual(obj, AddedProduct));
//   }
  
//   function isEqual(obj1, obj2) {
//       const keys1 = Object.keys(obj1);
//       const keys2 = Object.keys(obj2);
  
//       if (keys1.length !== keys2.length) {
//           return false;
//       }
  
//       return keys1.every(key => obj1[key] === obj2[key]);
//   }
  
// const isExit=isProductInCart(state, action?.payload)
// if(isExit){
//   const index_=state.indexOf(action.payload)
 
//     state[index_]["ProductQuantity"]+=1
  
//   return state
// }
// else{
//   action.payload["ProductQuantity"]=1
//   return [...state,action?.payload]
// }
    
//     case removeToCart:
//       let newState = state.filter((item) => item.id !== action.payload);

//       return newState;
//     default:
//       return state;
//   }
// };

// export default cart;



import { addToCart, removeToCart } from "./constant";

const cart = (state = [], action) => {
  switch (action.type) {
    case addToCart:
      // Check if the product is already in the cart
      const existingProductIndex = state.findIndex(item => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity
        return state.map((item, index) => {
          if (index === existingProductIndex) {
            return { ...item, ProductQuantity: item.ProductQuantity + 1 };
          }
          return item;
        });
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...state, { ...action.payload, ProductQuantity: 1 }];
      }

    case removeToCart:
      // Remove the product from the cart
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

export default cart;
