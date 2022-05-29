// import {
//   ADD_TO_CART,
//   REMOVE_CART_ITEM,
//   SAVE_SHIPPING_INFO,
// } from "../constants/cartConstants";

// export const cartReducer = (
//   state = { cartItems: [], shippingInfo: {} },
//   action
// ) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const item = action.payload;

//       const isItemExist = state.cartItems.find(
//         (i) => i.product === item.product
//       );

//       if (isItemExist) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((i) =>
//             i.product === isItemExist.product ? item : i
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }

//     case REMOVE_CART_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((i) => i.product !== action.payload),
//       };

//     case SAVE_SHIPPING_INFO:
//       return {
//         ...state,
//         shippingInfo: action.payload,
//       };

//     default:
//       return state;
//   }
// };

import {
  // ADD_TO_CART,
  // REMOVE_CART_ITEM,
  // SAVE_SHIPPING_INFO,
  ADD_TO_CART,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAIL,
} from "../constants/cartConstants";

export const newCartReducer = (state = { cart: {} }, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_TO_CART_SUCCESS: {
      return {
        loading: false,
        success: action.payload.success,
        cart: action.payload.cart,
      };
    }
    case ADD_TO_CART_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export const deleteCartReducer = (state = {}, action) => {
  console.log("deleteCartReducer--> state->", state, "  -- action==> ", action);
  switch (action.type) {
    case DELETE_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        loading: true,
        cart: [],
      };
    case GET_CART_SUCCESS:
      return {
        loading: false,
        cart: action.payload.cart,
      };
    case GET_CART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const shippingInfoReducer = (state = { shippingInfo: {} }, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    default:
      return state;
  }
};
