import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import {
  getCartTotal,
  removeCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  getWishlistTotal,
  addToWishlist,
} from "../store/Slices/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const { cart, cartQuantity, cartPrice } = useSelector(
    (state) => state.cartSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handleWishlist = (item) => {
    dispatch(getWishlistTotal(item));
    toast.success("Item added to Wishlist");
  };

  const HandleBuy = () => {
    toast.success("Payement Gateway is not Active");
  };
  const handleremove = () => {
    toast.success("Item is removed");
  };

  return (
    <div className="flex flex-col max-lg:flex-col lg:flex-row max-lg:items-center w-[90%] mx-auto gap-10 py-10">
      {/* Cart Items Section */}
      <div className="lg:w-[65%] w-full ">
        <div className="text-center bg-white border border-gray-200 rounded-md shadow-lg p-4 font-semibold text-gray-800 mb-5">
          Cart - {cart.length} items
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md shadow-lg flex max-sm:flex-col items-center gap-5 p-5 mb-5 transform transition-all duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="w-40 h-52 border-2 border-indigo-500 rounded">
                <img
                  src={item.image?.src}
                  alt={item.image?.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 text-center">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </p>
                <p className="text-gray-600 mb-4">Size: {item.size}</p>
                <div className="flex gap-4 text-center justify-center">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 "
                    onClick={() => dispatch(removeCartItem(item.id))}
                  >
                    <MdOutlineDeleteOutline
                      className="text-xl"
                      onClick={handleremove}
                    />
                  </button>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-2 "
                    onClick={() => dispatch(addToWishlist(item))}
                  >
                    <FaRegHeart
                      className="text-xl"
                      onClick={() => handleWishlist(item)}
                    />
                  </button>
                </div>
              </div>

              {/* Quantity and Price */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <button
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  >
                    <FiMinusCircle className="text-2xl" />
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-12 text-center border border-gray-300 rounded-md"
                  />
                  <button
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => dispatch(increaseItemQuantity(item.id))}
                  >
                    <FiPlusCircle className="text-2xl" />
                  </button>
                </div>
                <p className="text-gray-800 font-medium">
                  Price: ₹{Number(item.price) * Number(item.quantity)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Your cart is empty. Add some items to get started!
          </p>
        )}
      </div>

      {/* Summary Section */}
      <div className="bg-white border border-gray-200 rounded-md shadow-lg p-5 w-full lg:w-[30%] h-[300px]">
        <h2 className="text-xl font-bold text-gray-800 mb-5">Summary</h2>
        <div className="flex justify-between text-gray-700 mb-3">
          <p>Total Quantity</p>
          <p>{cartQuantity}</p>
        </div>
        <hr className="border-gray-300" />
        <div className="flex justify-between text-gray-700 my-3">
          <p>Total Amount</p>
          <p>₹{cartPrice}</p>
        </div>
        <button
          className="w-full py-2 mt-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg"
          onClick={HandleBuy}
        >
          Buy Now
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Cart;
