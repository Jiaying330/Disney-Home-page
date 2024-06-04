import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img src="/hero-img.jpeg" alt="pixar-fest-img" className="hero__img" />
        <div className="hero__overlay">
          <div className="hero__descriptions-container">
            <div className="hero__descriptions">
              <img
                src="/pixar-fest-poster.png"
                alt="pixar-fest"
                className="hero__descriptions-img"
              />
              <p className="hero__description">
                Celerbrate friends and beyond at Pixar Fest at the Disneyland®
                Resort now through August 4, 2024.
              </p>
              <a href="#" className="hero__button">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
