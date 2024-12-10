import React from "react";
import { TbBrandApple } from "react-icons/tb";
import { FaGooglePlay } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdLiveHelp } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white ">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <div className=" w-32 h-32 rounded-full shadow-lg  max-sm:mx-auto">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="logo" className="w-full h-full rounded-full" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 max-sm:mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Subscribe to our awesome emails
          </h2>
          <p className="text-gray-300 mb-4">
            Get our latest offers and news straight in your inbox.
          </p>
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-gray-700 text-white px-4 py-2 w-full outline-none"
            />
            <button className="bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 ml-10">
          <h2 className="text-xl font-semibold mb-4">Download our apps</h2>
          <p className="text-gray-300 mb-4">
            Shop our products and offers on-the-go.
          </p>
          <div className="w-[full] max-sm:w-[80%]  flex flex-wrap mx-auto gap-x-4">
            <a
              href="https://www.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebbok"
            >
              <div className="flex  items-center border border-gray-600 text-white bg-black p-3 rounded-md w-48">
                <TbBrandApple className="text-3xl" />
                <div className="ml-3">
                  <p className="text-sm ">Download on the</p>
                  <h3 className="font-semibold text-lg">App Store</h3>
                </div>
              </div>
            </a>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebbok"
            >
              <div className="flex items-center border border-gray-600 text-white bg-black p-3 rounded-md w-48">
                <FaGooglePlay className="text-3xl" />
                <div className="ml-3">
                  <p className="text-sm">Get it on</p>
                  <h3 className="font-semibold text-lg">Google Play</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-8" />

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 mb-12 ml-10">
        <div>
          <h3 className="font-semibold mb-4">Women</h3>
          <ul className="space-y-2">
            <li>Tops</li>
            <li>Ethnic Wears</li>
            <li>Bottoms</li>
            <li>Dresses & Jumpsuits</li>
            <li>Winter Wear</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Men</h3>
          <ul className="space-y-2">
            <li>T-shirts</li>
            <li>Jeans</li>
            <li>Ethnicwear</li>
            <li>Winterwear</li>
            <li>Sportswear</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Kids</h3>
          <ul className="space-y-2">
            <li>Girls Clothing</li>
            <li>Boys Clothing</li>
            <li>Infants Girl</li>
            <li>Infants Boys</li>
            <li>Winterwear</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Shoes & Bags</h3>
          <ul className="space-y-2">
            <li>Women</li>
            <li>Men</li>
            <li>Boys</li>
            <li>Girls</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Beauty</h3>
          <ul className="space-y-2">
            <li>Makeup Eyes</li>
            <li>Makeup Face</li>
            <li>Makeup Lips</li>
            <li>Makeup Nails</li>
            <li>Perfumes</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Home & Living</h3>
          <ul className="space-y-2">
            <li>Decor</li>
            <li>Furnish</li>
            <li>Kitchen</li>
            <li>Tableware</li>
            <li>Bath & Laundry</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>Online Offers</li>
            <li>Store Offers</li>
            <li>Online Gift Cards</li>
            <li>Store Gift Cards</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Returns Process</li>
            <li>Help Centre</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-600 my-8" />

      <div className="w-[90%] mx-auto flex  max-sm:gap-y-10 justify-around items-center mb-12">
        <div className="flex items-center gap-2">
          <IoCall className="text-2xl" />
          <div>
            <p>Talk to us</p>
            <p>1800-123-1555</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MdLiveHelp className="text-2xl" />
          <div>
            <p>Help Centre</p>
            <p>1800-123-1555</p>
          </div>
        </div>

        <div className="flex space-x-5 text-2xl items-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Facebbok"
          >
            <FaFacebookF className="text-blue-600 hover:text-blue-800 transition" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Facebbok"
          >
            <BsTwitterX className="text-blue-400 hover:text-blue-600 transition" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Facebbok"
          >
            <FaInstagram className="text-pink-600 hover:text-pink-800 transition" />
          </a>
        </div>
      </div>

      <hr className="border-gray-600" />
    </div>
  );
};

export default Footer;
