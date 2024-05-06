import React from "react";
import { BreadCrumbs } from "../../components/breadCrumbs/BreadCrumbs";
import { useLocation } from "react-router-dom";
import { HeadLines } from "../../components/headLines/HeadLines";
import { FilterCategoryItem } from "../../components/filterCategoryItem/FilterCategoryItem";
import { Card } from "../../components/card/Card";

export const Shop = () => {
  return (
    <section className="shop">
      <BreadCrumbs />
      <HeadLines title={"Shop by category"} subTitle={"Shop by category"} />
      <div className="filter--category">
        <FilterCategoryItem />
      </div>
      <div className="shop--items container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
