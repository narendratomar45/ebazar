import React from "react";
import items from "../Data/Data.js";
import ProductCard from "../Components/ProductCard.jsx";
import womenSlider1 from "../assets/womenSlider1.avif";
import womenSlider2 from "../assets/womenSlider2.jpg";
import womenSlider3 from "../assets/womenSlider3.jpg";
import Slider from "react-slick";
import { RiExchangeLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";

const Women = () => {
  const filteredProduct = items.filter((item) => item.category === "Women");
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
    { id: 1, src: womenSlider1, alt: womenSlider1 },
    { id: 2, src: womenSlider2, alt: womenSlider3 },
    { id: 3, src: womenSlider3, alt: womenSlider3 },
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
        A GIRL&apos;S GOT TO HAVE OPTIONS
      </h1>

      <div className="w-[86%] mx-auto  min-h-[500px] flex justify-center items-center  p-12">
        <div className="w-[100%] flex justify-center mx-auto flex-wrap gap-10 ">
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

export default Women;
