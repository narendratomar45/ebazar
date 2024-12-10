import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Home from "./pages/Home";
import Cart from "./Components/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Wishlist from "./Components/Wishlist";
import Category from "./pages/Category";
import Scroll from "./Components/Scroll";
import ProductDetails from "./Components/ProductDetails";
import { Toaster } from "react-hot-toast";
import Loading from "./Components/Loading";
import Profile from "./pages/Profile";
import UploadData from "./Components/UploadData";

const App = () => {
  const [loading, setLoading] = useState(true);
  const path = useLocation();
  const category = path.pathname;
  const sliceCategory = category.split("/")[1];
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" bg-gray-200 text-black">
      <Navbar />
      <Toaster />
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/items/:proId" element={<ProductDetails />} />
        <Route path={`/:${sliceCategory}`} element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/uploadData" element={<UploadData />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
