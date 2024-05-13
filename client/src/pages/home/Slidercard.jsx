import React from "react";
import Slider from "react-slick";

export const Slidercard = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="cards">
          <img src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"></img>
          <h4>lorem</h4>
          <h5>$5.00</h5>
        </div>
        <div className="cards">
          <img src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"></img>
          <h4>lorem</h4>
          <h5>$5.00</h5>
        </div>
        <div className="cards">
          <img src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"></img>
          <h4>lorem</h4>
          <h5>$5.00</h5>
        </div>
        <div className="cards">
          <img src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"></img>
          <h4>lorem</h4>
          <h5>$5.00</h5>
        </div>
        <div className="cards">
          <img src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"></img>
          <h4>lorem</h4>
          <h5>$5.00</h5>
        </div>
        <div className="cards">
          <img src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"></img>
          <h4>lorem</h4>
          <h5>$5.00</h5>
        </div>
        <div className="cards">
          <img src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"></img>
          <h4>lorem</h4>
          <h5>$5.00</h5>
        </div>
        <div className="cards">
          <img src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"></img>
          <h4>lorem</h4>
          <h5>$5.00</h5>
        </div>
      </Slider>
    </>
  );
};
