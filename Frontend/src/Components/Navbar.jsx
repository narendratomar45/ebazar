import React, { useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal, getWishlistTotal } from "../store/Slices/cartSlice";
import logo from "../assets/logo.png";
import indianFlag from "../assets/indianFlag.webp";
import items from "../Data/Data.js";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, cartQuantity } = useSelector((state) => state.cartSlice);
  const { wishlist, wishlistQuantity } = useSelector(
    (state) => state.cartSlice
  );
  // console.log("w", wishlistQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  useEffect(() => {
    dispatch(getWishlistTotal());
  }, [wishlist, dispatch]);
  const handleDropDown = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleHome = () => {
    toast.error("Item is not added yet");
  };

  const uniqueCategories = Array.from(
    new Set(items.map((item) => item.category3))
  );

  // console.log(uniqueCategories);

  return (
    <>
      <header className="w-full h-8 bg-gradient-to-r from-purple-600 to-indigo-500 shadow-md text-center text-white flex items-center justify-center sticky top-0 z-10 max-sm:hidden">
        Login and Get 20% OFF!
      </header>

      <nav className="w-full h-16 flex justify-between items-center bg-white shadow-lg px-6 sticky top-8 z-50 max-sm:top-0">
        <div className="flex items-center h-16 w-16">
          <Link to="/">
            <img
              src={logo}
              alt="E-Bazar Logo"
              className=" w-full h-full rounded-full border border-gray-200 shadow-sm"
            />
          </Link>
        </div>

        <div className=" flex max-sm:hidden w-[500px] ml-28 ">
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            className="w-[80%] py-2 pl-4 pr-12 rounded-full bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <button className=" text-gray-500 hover:text-indigo-600 -ml-8">
            <IoIosSearch size={20} />
          </button>
        </div>

        <div className=" flex items-center space-x-6 md:space-x-8 lg:space-x-10 mr-6 md:mr-12 ">
          <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm max-sm:hidden hover:scale-105">
            <img
              src={indianFlag}
              alt="Indian Flag"
              className="w-full h-full object-cover"
            />
          </div>

          <Link to="/login" className="relative group max-sm:hidden">
            <span className="text-gray-500 group-hover:text-indigo-500 text-sm md:text-base lg:text-lg font-medium transition-transform duration-300 transform group-hover:scale-110 tracking-wide cursor-pointer">
              Login
            </span>
          </Link>
          <Link to="/signup" className="relative group max-sm:hidden">
            <span className="text-gray-500 group-hover:text-indigo-500 text-sm md:text-base lg:text-lg font-medium transition-transform duration-300 transform group-hover:scale-110 tracking-wide cursor-pointer">
              Resigter
            </span>
          </Link>

          <Link to="/wishlist" className="relative group ">
            <FaRegHeart
              size={22}
              className="text-gray-500 group-hover:text-red-500 transition-transform duration-300 transform group-hover:scale-110"
            />
            {wishlistQuantity > 0 && (
              <span className="absolute  -top-2 -right-2 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full shadow-md">
                {wishlistQuantity}
              </span>
            )}
            <span className="hidden group-hover:block absolute top-full mt-1 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md">
              Wishlist
            </span>
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative group ">
            <CgShoppingCart
              size={24}
              className="text-gray-500 group-hover:text-green-500 transition-transform duration-300 transform group-hover:scale-110"
            />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full shadow-md">
                {cartQuantity}
              </span>
            )}
            <span className="hidden group-hover:block absolute top-full mt-1 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md">
              Cart
            </span>
          </Link>

          {/* Menu Icon (Mobile) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={handleDropDown}
          >
            <TiThMenu
              size={32}
              className="text-gray-500 hover:text-indigo-500 transition-transform duration-300 transform hover:scale-110"
            />
          </button>
        </div>
      </nav>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="w-full bg-indigo-600 text-white flex flex-col items-center py-4 md:hidden">
          <div className="w-10/12 flex items-center bg-white text-gray-600 rounded-full px-3 py-2 mb-4">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow focus:outline-none px-2"
            />
            <IoIosSearch size={20} />
          </div>
          <Link to="/men" className="py-2 text-lg hover:text-indigo-300">
            Men
          </Link>
          <Link to="/women" className="py-2 text-lg hover:text-indigo-300">
            Women
          </Link>
          <Link to="/kids" className="py-2 text-lg hover:text-indigo-300">
            Kids
          </Link>
          <button
            className="mt-4 bg-white text-indigo-600 py-2 px-6 rounded-full hover:bg-gray-200"
            onClick={handleDropDown}
          >
            Close
          </button>
        </div>
      )}

      {/* Category Links */}

      <div className="max-sm:hidden md:flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 top-30 z-5 h-12">
        <ul className="flex space-x-14">
          <li>
            <Link
              to="/"
              className="text-white hover:text-yellow-400 font-semibold transition duration-300"
            >
              Home
            </Link>
          </li>

          <li className="relative group ">
            <Link
              to="/men"
              className="font-semibold text-white group-hover:text-yellow-400 transition duration-300"
            >
              Men
            </Link>

            <div className="absolute w-48 mx-auto rounded-lg shadow-lg top-7 -left-20 flex justify-center items-center z-20 bg-white transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
              <ul className="font-medium text-indigo-600 space-y-2 py-1">
                {uniqueCategories.map((item, index) => (
                  <li
                    className={`hover:bg-purple-500 w-40 hover:text-white rounded-lg px-2 py-1 cursor-pointer transition duration-200 text-center ${
                      index < 4 || index > 10 ? "hidden" : "block"
                    }`}
                    key={index}
                  >
                    <Link to={`/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="relative group  ">
            <Link
              to="/women"
              className="text-white hover:text-yellow-400 font-semibold transition duration-300 "
            >
              Women
            </Link>
            <div className="absolute w-48   mx-auto rounded-lg shadow-lg top-7 -left-16 flex justify-center items-center  z-20 bg-white transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out ">
              <ul className=" font-medium text-indigo-600 space-y-2 py-1">
                {uniqueCategories.map((item, index) => (
                  <li
                    className={`hover:bg-purple-500 w-40 hover:text-white rounded-lg px-2 py-1 cursor-pointer transition duration-200 text-center ${
                      index > 3 ? "hidden" : "block"
                    } `}
                    key={index}
                  >
                    <Link to={`/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="relative group ">
            <Link
              to="/kids"
              className="text-white hover:text-yellow-400 font-semibold transition duration-300"
            >
              Kids
            </Link>
            <div className="absolute w-48   mx-auto rounded-lg shadow-lg top-7 -left-20  flex justify-center items-center  z-20 bg-white transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
              <ul className="font-medium text-indigo-600 space-y-2 py-1 ">
                {uniqueCategories.map((item, index) => (
                  <li
                    className={`hover:bg-purple-500 w-40 hover:text-white rounded-lg px-2 py-1 cursor-pointer transition duration-200 text-center ${
                      index < 12 ? "hidden" : "block"
                    } `}
                    key={index}
                  >
                    <Link to={`/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li
            className="hover:text-yellow-400 font-medium cursor-pointer"
            onClick={handleHome}
          >
            Electronics
          </li>

          <li
            className="hover:text-yellow-400 font-medium cursor-pointer"
            onClick={handleHome}
          >
            Home&Furniture
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
