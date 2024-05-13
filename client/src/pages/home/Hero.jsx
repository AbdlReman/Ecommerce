import React from "react";
import { Card } from "./Card";
import { NavLink } from "react-router-dom";
import "./hero.css";
import Slider from "./Slider";
// import { Slidercard } from "./Slidercard";

export const Hero = () => {
  return (
    <>
      <section className="bg-img">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-Tag">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/029/742/340/small_2x/mockup-frames-empty-abstract-shape-framing-for-your-design-template-for-picture-painting-poster-lettering-or-gallery-generative-ai-illustration-free-photo.jpg"
                  className="img-fluid"
                ></img>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="btn">
                <NavLink to="/shop" className="nav-link">
                  <button className="btn-1">Shop Now</button>
                </NavLink>
                {/* <button className="btn-1">Shop Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Card />
            </div>
            <div className="col-md-3">
              <Card />
            </div>
            <div className="col-md-3">
              <Card />
            </div>
            <div className="col-md-3">
              <Card />
            </div>
          </div>
        </div>
      </section>

      {/* second section */}

      <section className="Subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="inputs py-5">
                <h1>Subscribe</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, fugit delectus.
                </p>
                <input
                  type="text"
                  placeholder="Enter Your Message"
                  className=""
                ></input>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third section */}

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 mt-3">
              <div className="new text-center ">
                <h4>NEW IN</h4>
              </div>
              <Slider />
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}

      <section>
        <div className="container py-5">
          <div className="row text-center mt-5">
            <div className="col-md-6 mt-5 text-center">
              <div className="foot">
                <h4>IN THE STUDIO</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita laboriosam totam ipsum dolor adipisci dicta, a
                  voluptatum architecto dolorum error?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat reprehenderit quidem ut assumenda quae accusantium,
                  molestiae necessitatibus iste ratione corporis, ipsum
                  mollitia, eligendi et! Sed!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="pic">
                <img
                  src="https://graphicanthology.com/cdn/shop/products/Modern-Thank-You-1129x1214_300x300.jpg?v=1534982934"
                  className="img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
