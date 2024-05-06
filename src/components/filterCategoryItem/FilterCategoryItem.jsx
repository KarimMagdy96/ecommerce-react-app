import React, { useState } from "react";

export const FilterCategoryItem = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  return (
    <div
      className={`filterCategory--content active ${
        activeFilter ? "active" : ""
      }`}
      onClick={() => setActiveFilter(true)}
    >
      <div className="filter--img">
        <img src="../../../../public/images/watchAd.webp" alt="" />
      </div>
      <span>Lorem, ipsum dolor.</span>
    </div>
  );
};
