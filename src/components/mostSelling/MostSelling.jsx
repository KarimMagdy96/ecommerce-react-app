import React from "react";
import { HeadLines } from "../headLines/HeadLines";
import { Card } from "../card/Card";

export const MostSelling = () => {
  return (
    <section className="mostSelling">
      <HeadLines
        title={"Most Selling"}
        subTitle={"Our Most Selling Products"}
      />
      <Card />
    </section>
  );
};
