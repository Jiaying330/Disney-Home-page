import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard";
import { section_1_data } from "../data";

export default function Products() {
  return (
    <>
      <section className="products">
        <div className="products__container">
          {section_1_data.map((item) => {
            return <ProductCard key={item.id} data={item} />;
          })}
        </div>
      </section>
    </>
  );
}
