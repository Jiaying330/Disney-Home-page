import React, { useState } from "react";
import ProductCard_3 from "./ProductCard-3";
import "./Slider.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Slider(props) {
  const { data } = props;
  const PER_PAGE = 5;
  //   const numPages = Math.ceil(data.length / PER_PAGE);
  const numPages = data.length;
  const [currPage, setCurrPage] = useState(0);

  function slide(toLeft) {
    // console.log(window.innerWidth);
    const slider = document.querySelector(".slider__items");
    const slideItem = document.querySelector(".product__card--3");
    const slideItemWidth = slideItem.offsetWidth;
    const sliderWidth = slider.offsetWidth;
    // const viewportWidth = window.outerWidth;
    // const toShift = sliderWidth + 0.01 * viewportWidth + "px";
    console.log("slideItemWidth = " + slideItemWidth);
    const toShift = -currPage * slideItemWidth + "px";

    console.log("toShift = " + toShift);
    // console.log(`translateX(-calc(${slider.offsetWidth}- 8rem))`);
    if (toLeft) {
      slider.style.transform = `translateX(${toShift})`;
    } else {
      slider.style.transform = `translateX(${toShift})`;
    }
  }

  function leftOnClick(event) {
    // console.log(window.outerWidth);
    if (currPage > 0) {
      console.log("new currPage = " + (currPage - 1));
      setCurrPage((prev) => prev - 1);
      slide(false);
    }
  }

  function rightOnClick(event) {
    if (currPage < numPages) {
      console.log("new currPage = " + (currPage + 1));
      setCurrPage((prev) => prev + 1);
      slide(true);
    }
  }

  return (
    <>
      <div className="slider">
        {/* <div className="slider__controller">
          <button
            className="slider__button slider__button-left"
            onClick={leftOnClick}
          >
            <ArrowBackIosNewIcon
              fontSize="large"
              className="slider__icon-left"
            />
          </button>
          <button
            className="slider__button slider__button-right"
            onClick={rightOnClick}
          >
            <ArrowForwardIosIcon
              fontSize="large"
              className="slider__icon-right"
            />
          </button>
        </div> */}
        <div className="slider__wrapper">
          <div className="slider__items">
            {data.map((item) => {
              return <ProductCard_3 key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
