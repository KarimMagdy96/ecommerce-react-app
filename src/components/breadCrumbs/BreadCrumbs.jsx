import React from "react";
import { Link, useLocation } from "react-router-dom";
export const BreadCrumbs = () => {
  const { pathname } = useLocation();
  return (
    <section className="breadCrumb">
      <div className="breadCrumb--text">
        <Link to={"/"}>Home-</Link>
        <span className="page">{pathname.replace("/", "")}</span>
      </div>
    </section>
  );
};
