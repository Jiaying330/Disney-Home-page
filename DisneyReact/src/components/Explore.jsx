import React from "react";
import "./Explore.scss";
import { section_2_data } from "../data";
import ProductCard_2 from "./ProductCard-2";

export default function Explore() {
  return (
    <>
      <section className="explore">
        <h1 className="explore__title">Explore More Disney+</h1>
        <div className="explore__container">
          {section_2_data.map((item) => {
            return <ProductCard_2 key={item.id} data={item} />;
          })}
        </div>
      </section>
    </>
  );
}
