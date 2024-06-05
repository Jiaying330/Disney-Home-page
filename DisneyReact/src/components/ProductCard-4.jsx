import React from "react";
import "./ProductCard-4.scss";

export default function ProductCard_4(props) {
  const { title, message, action, img } = props.data;
  return (
    <>
      <div className="product-card-4">
        <div className="product-card-4__img">
          <img src={img} alt="product image" />
        </div>
        <div className="product-card-4__info">
          <h2 className="product-card-4__title">{title}</h2>
          <p className="product-card-4__message">{message}</p>
          <a href="#" className="product-card-4__action">
            {action}
          </a>
        </div>
      </div>
    </>
  );
}
