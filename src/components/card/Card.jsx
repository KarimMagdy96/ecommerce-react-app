import React from "react";
import { FaStar } from "react-icons/fa";

export const Card = () => {
  return (
    <div className="card">
      <div className="img">
        <img src="../../../public/images/banner.webp" alt="prodact-img" />
      </div>
      <div className="card--price">
        <div className="price">
          <span>150 EG</span>
        </div>
        <di v className="rate">
          <FaStar />
          <span>4.5</span>
        </di>
      </div>
    </div>
  );
};
