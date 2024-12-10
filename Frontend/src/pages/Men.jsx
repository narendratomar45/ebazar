import React from "react";
import items from "../Data/Data.js";
import ProductCard from "../Components/ProductCard.jsx";
import menSlider1 from "../assets/menSlider1.jpg";
import menSlider2 from "../assets/menSlider2.avif";
import menSlider3 from "../assets/menSlider3.avif";
import menSlider4 from "../assets/menSlider4.jpg";
import Slider from "react-slick";
import { RiExchangeLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";

const Men = () => {
  const filteredProduct = items.filter((item) => item.category === "Men");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const images = [
    { id: 1, src: menSlider1, alt: menSlider1 },
    { id: 2, src: menSlider2, alt: menSlider2 },
    { id: 3, src: menSlider3, alt: menSlider3 },
    { id: 4, src: menSlider4, alt: menSlider4 },
  ];
  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className=" w-full h-full" />
          </div>
        ))}
      </Slider>
      <h1 className="text-4xl md:text-5xl text-center my-10 font-bold text-gray-800">
        Deals To Keep You Warm
      </h1>
      

      <div className=" min-h-[500px] p-12 w-[86%] mx-auto flex justify-center items-center">
        <div className="w-[100%] flex justify-center flex-wrap mx-auto gap-10">
          {filteredProduct.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-5 gap-10 flex-wrap bg-white py-10 rounded-lg shadow-lg">
        <div className="w-80 h-auto flex flex-col items-center text-center">
          <RiExchangeLine className="text-6xl text-indigo-500 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            Easy Exchange
          </span>
        </div>

        <div className="w-80 h-auto flex flex-col items-center text-center">
          <FaHandHoldingHeart className="text-6xl text-indigo-500 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            100% Handpicked
          </span>
        </div>

        <div className="w-80 h-auto flex flex-col items-center text-center">
          <MdAssuredWorkload className="text-6xl text-indigo-500 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            Assured Quality
          </span>
        </div>
      </div>
    </>
  );
};

export default Men;
