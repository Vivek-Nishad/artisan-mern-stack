import {
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
import axios from "axios";

// const BackendUrl = "http://localhost:5001";
const BackendUrl = null;

// // Add to Cart
// export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
//   const { data } = await axios.get(`/api/v1/product/${id}`);
//   // const { data } = await axios.get(`${BackendUrl}/api/v1/product/${id}`);

//   dispatch({
//     type: ADD_TO_CART,
//     payload: {
//       product: data.product._id,
//       name: data.product.name,
//       price: data.product.price,
//       image: data.product.images[0].url,
//       stock: data.product.Stock,
//       quantity,
//     },
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// // REMOVE FROM CART
// export const removeItemsFromCart = (id) => async (dispatch, getState) => {
//   dispatch({
//     type: REMOVE_CART_ITEM,
//     payload: id,
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// SAVE SHIPPING INFO

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch) => {
  console.log("hi from additemstocart --> ", id, "  -  ", quantity);
  try {
    dispatch({ type: ADD_TO_CART_REQUEST });

    const { data } = await axios.get(
      BackendUrl
        ? `${BackendUrl}/api/v1/product/${id}`
        : `/api/v1/product/${id}`
    );
    // const { data } = await axios.get(`/api/v1/product/${id}`);
    // const { data } = await axios.get(`${BackendUrl}/api/v1/product/${id}`);

    let link = BackendUrl
      ? `${BackendUrl}/api/v1/cart/new`
      : `/api/v1/cart/new`;
    // let link = `/api/v1/cart/new`;
    // let link = `${BackendUrl}/api/v1/cart/new`;

    console.log("product DAta--> ", data);
    console.log("link--> ", link);

    let cartPayload = {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      quantity,
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { cartData } = await axios
      .post(link, cartPayload, config)
      .then((suck) => console.log("sucksex-> ", suck))
      .catch((err) => console.log("err--> ", err));
    console.log("cart Data-----> ", cartData);

    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: cartData,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CART_REQUEST });

    const { data } = await axios.delete(
      BackendUrl ? `${BackendUrl}/api/v1/cart/${id}` : `/api/v1/cart/${id}`
    );
    // const { data } = await axios.delete(`/api/v1/cart/${id}`);
    console.log("remove cart data--> ", data);

    dispatch({
      type: DELETE_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CART_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET CART
export const getCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_REQUEST });

    const { data } = await axios.get(
      BackendUrl ? `${BackendUrl}/api/v1/cart` : `/api/v1/cart`
    );
    // const { data } = await axios.get(`/api/v1/cart/${id}`);

    console.log("cart---------------------------> ", data);

    dispatch({
      type: GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAIL,
      payload: error.response.data.message,
    });
  }
};
