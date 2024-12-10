import { createSlice } from "@reduxjs/toolkit";
import productdata from "../../Data/Data.js";

export const initialState = {
  cart: [],
  wishlist: [],
  items: productdata,
  cartQuantity: 0,
  wishlistQuantity: 0,
  cartPrice: 0,
  wishlistPrice: 0,
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        if (state.cart[find].quantity < 1) {
          state.cart[find].quantity += 1;
        }
      } else {
        state.cart.push({
          ...action.payload,
          price: action.payload.price || 0,
          quantity: 1,
        });
      }
    },

    addToWishlist: (state, action) => {
      let find = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        if (state.wishlist[find].quantity < 1) {
          state.wishlist[find].quantity += 1;
        }
      } else {
        state.wishlist.push({
          ...action.payload,
          price: action.payload.price || 0,
          quantity: 1,
        });
      }
    },

    getWishlistTotal: (state) => {
      let { totalQuantity, totalPrice } = state.wishlist.reduce(
        (wishlistTotal, wishlistItem) => {
          const { price, quantity } = wishlistItem;
          const itemTotal = price * quantity;
          wishlistTotal.totalPrice += itemTotal;
          wishlistTotal.totalQuantity += quantity;
          return wishlistTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.wishlistPrice = parseInt(totalPrice.toFixed(2));
      state.wishlistQuanity = totalQuantity;
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );
      state.cartPrice = parseInt(totalPrice.toFixed(2));
      state.cartQuantity = totalQuantity;
    },

    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    removeWishlistItem: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
          };
        }
        return item;
      });
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity,
          };
        } else if (item.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  addToWishlist,
  getCartTotal,
  getWishlistTotal,
  removeCartItem,
  removeWishlistItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
