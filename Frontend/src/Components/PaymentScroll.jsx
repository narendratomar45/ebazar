import React from "react";
import mobiquik from "../assets/mobiquik.avif";
import paytm from "../assets/paytm.avif";
import phonpay from "../assets/phonpay.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PaymentScroll = () => {
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
    { id: 1, src: mobiquik, alt: "mobiquik" },
    { id: 2, src: paytm, alt: "paytm" },
    { id: 3, src: phonpay, alt: "phonpay" },
  ];
  return (
    <div>
      <Slider {...settings} className=" my-10 rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className=" w-full h-full object-fill"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PaymentScroll;
