import React from "react";
import "./ProductCard.scss";

export default function ProductCard(props) {
  const { title, message, action, img } = props.data;
  return (
    <>
      <div className="product-card">
        <div className="product-card__img">
          <img src={img} alt="product image" />
        </div>
        <div className="product-card__info">
          <h2 className="product-card__title">{title}</h2>
          <p className="product-card__message">{message}</p>
          <a href="#" className="product-card__action">
            {action}
          </a>
        </div>
      </div>
    </>
  );
}
