import React from "react";

export const HeadLines = ({ title, subTitle }) => {
  return (
    <div className="headLines">
      <p>{subTitle}</p>
      <h3>{title}</h3>
    </div>
  );
};
