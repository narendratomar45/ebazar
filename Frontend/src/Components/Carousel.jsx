/* eslint-disable react/prop-types */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const PrevBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[40%] left-3 z-30">
      <FcPrevious size={50} />
    </button>
  );
};

const NextBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[40%] right-3 z-30">
      <FcNext size={50} />
    </button>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
  };
  const images = [
    {
      src: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1726565462850.jpg?crsl_pos=4",
      alt: "img1",
    },
    {
      src: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1730729022284.jpg?crsl_pos=4",
      alt: "img2",
    },
    {
      src: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1728895397868.jpg?crsl_pos=4",
      alt: "img",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-191124-1.0-MHP-mainbanner-z1-p4-jp-lc-under599.jpg",
      alt: "img4",
    },
  ];
  return (
    <div className=" w-full   mx-auto ">
      <Slider {...settings} className=" overflow-hidden ">
        {images.map((image, index) => (
          <div className=" h-[500px]  max-sm:h-[200px] sm:w-full" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full  object-fill max-sm:object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
