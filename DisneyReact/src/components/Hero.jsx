import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img
          src="https://attractionsmagazine.com/wp-content/uploads/2024/03/Pixar-Fest-Inside-Out-Photo-courtesy-of-Disneyland-Resort.jpg"
          alt="pixar-fest-img"
          className="hero__img"
        />
        <div className="hero__overlay">
          <div className="hero__descriptions-container">
            <div className="hero__descriptions">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/hb_dlr_pixarfest2024_logo_3258_e75fc5ff.png?region=0,0,900,365"
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
