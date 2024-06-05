import React from "react";
import "./ComingSoon.scss";
import { section_3_data } from "../data";
import Slider from "./Slider";

export default function ComingSoon() {
  return (
    <>
      <section className="coming-soon">
        <h1 className="coming-soon__title">Coming Soon to Disney+</h1>
        <Slider key={crypto.randomUUID()} data={section_3_data} />
      </section>
    </>
  );
}
