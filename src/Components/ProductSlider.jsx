import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderData } from "../Components/products";

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container mx-auto my-4" style={{ maxWidth: "1200px" }}>
      <Slider {...settings}>
        {SliderData.map((slide) => (
          <div key={slide.id} className="d-flex align-items-center p-3">
            <div className="flex-grow-1 text-left">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <button className="btn btn-primary">Visit Collections</button>
            </div>
            <div className="flex-grow-1 text-center">
              <img src={slide.cover} alt={slide.title} className="img-fluid rounded" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
