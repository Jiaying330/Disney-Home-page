import React from "react";
import "./ProductCard-2.scss";

export default function ProductCard_2(props) {
  const { message, action, img } = props.data;

  return (
    <>
      <div className="product__card--2">
        <div className="product__card--2-img">
          <img src={img} alt="product image" />
        </div>
        <div className="product__card--2-info">
          <p className="product__card--2-message">{message}</p>
          <a href="" className="product__card--2-action">
            {action}
          </a>
        </div>
      </div>
    </>
  );
}
