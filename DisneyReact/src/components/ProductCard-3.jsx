import React from "react";
import "./ProductCard-3.scss";

export default function ProductCard_3(props) {
  const { title, status, img } = props.data;
  return (
    <>
      <div className="product__card--3">
        <div className="product__card--3-img">
          <img src={img} alt="product image" />
        </div>
        <h3 className="product__card--3-title">{title}</h3>
        <p className="product__card--3-status">{status}</p>
      </div>
    </>
  );
}
