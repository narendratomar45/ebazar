import React from "react";
import Carousel from "../Components/Carousel.jsx";
import items from "../Data/Data.js";
import ProductCard from "../Components/ProductCard.jsx";
import offer from "../assets/offer.avif";
import { RiExchangeLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaymentScroll from "../Components/PaymentScroll.jsx";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  const filteredProduct = items.filter((item) => item.category2 === "Home");

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Carousel />

      <div className="w-full  max-sm:h-[135px] mt-6">
        <img
          src={offer}
          alt="offer image"
          className="w-full h-full object-cover  rounded-lg shadow-lg"
        />
      </div>

      {/* Season's Deal */}
      <h1 className="text-4xl max-sm:text-2xl md:text-5xl text-center my-5 font-bold text-gray-800">
        Season&apos;s Deal, Only A Click Away!
      </h1>

      <Slider {...settings}>
        {/* <div className="w-full min-h-[500px] flex flex-wrap p-10 justify-center items-center gap-10 rounded-lg shadow-lg"> */}
        {filteredProduct.map((item, index) => (
          <ProductCard item={item} index={index} key={index} />
        ))}
        {/* </div> */}
      </Slider>

      <div className="flex justify-center items-center my-5 gap-20 flex-wrap bg-white py-10 rounded-lg shadow-lg">
        <div className="w-60 h-auto flex flex-col items-center text-center">
          <RiExchangeLine className="text-6xl text-purple-600 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            Easy Exchange
          </span>
        </div>

        <div className="w-60 h-auto flex flex-col items-center text-center">
          <FaHandHoldingHeart className="text-6xl text-purple-600 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            100% Handpicked
          </span>
        </div>

        <div className="w-60 h-auto flex flex-col items-center text-center">
          <MdAssuredWorkload className="text-6xl text-purple-600 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            Assured Quality
          </span>
        </div>
      </div>
      <PaymentScroll />
    </div>
  );
};

export default Home;
