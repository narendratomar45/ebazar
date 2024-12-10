import React from "react";
import items from "../Data/Data.js";
import ProductCard from "../Components/ProductCard.jsx";
import kidsSlider1 from "../assets/kidsSlider1.jpg";
import kidsSlider2 from "../assets/kidsSlider2.avif";
import kidsSlider3 from "../assets/kidsSlider3.avif";
import kidsSlider4 from "../assets/kidsSlider4.avif";
import Slider from "react-slick";
import { RiExchangeLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";

const Kids = () => {
  const filteredProduct = items.filter((item) => item.category === "Kids");
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
    { id: 1, src: kidsSlider1, alt: kidsSlider1 },
    { id: 2, src: kidsSlider2, alt: kidsSlider2 },
    { id: 3, src: kidsSlider3, alt: kidsSlider3 },
    { id: 4, src: kidsSlider4, alt: kidsSlider4 },
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
        For Your Childeren&apos;s Jingles!
      </h1>
      <div className="min-h-[500px] p-12 w-[86%] mx-auto   flex justify-center items-center">
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

export default Kids;
