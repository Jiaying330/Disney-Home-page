import React from "react";
import "./Vacation.scss";
import { section_4_data } from "../data";
import Slider from "./Slider";
import ProductCard_4 from "./ProductCard-4";

export default function Vacation() {
  return (
    <>
      <section className="vacation">
        <h1 className="vacation__title">Vacation with Disney Parks</h1>
        <div className="vacation__container">
          {section_4_data.map((item) => {
            return <ProductCard_4 key={item.id} data={item} />;
          })}
        </div>
      </section>
    </>
  );
}
