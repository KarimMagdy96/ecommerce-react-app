import React from "react";
import { FaStar } from "react-icons/fa";

export const Card = () => {
  return (
    <div className="card">
      <div className="newBadge">
        <span>New</span>
      </div>
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
      <div className="card--tittle">
        <h4>Lorem ipsum dolor sit.</h4>
      </div>
      <div className="card--option">
        <div className="option">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="19"
              rx="9.5"
              stroke="#D62828"
            />
            <path
              d="M8.39644 13.3107L5.14644 10.0607C4.95119 9.86541 4.95119 9.54883 5.14644 9.35355L5.85353 8.64644C6.04879 8.45117 6.36539 8.45117 6.56064 8.64644L8.75 10.8358L13.4394 6.14644C13.6346 5.95119 13.9512 5.95119 14.1465 6.14644L14.8536 6.85355C15.0488 7.0488 15.0488 7.36539 14.8536 7.56066L9.10355 13.3107C8.90828 13.5059 8.5917 13.5059 8.39644 13.3107Z"
              fill="#D62828"
            />
          </svg>
          <span>4 lorem</span>
        </div>
        <div className="option">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="19"
              rx="9.5"
              stroke="#D62828"
            />
            <path
              d="M8.39644 13.3107L5.14644 10.0607C4.95119 9.86541 4.95119 9.54883 5.14644 9.35355L5.85353 8.64644C6.04879 8.45117 6.36539 8.45117 6.56064 8.64644L8.75 10.8358L13.4394 6.14644C13.6346 5.95119 13.9512 5.95119 14.1465 6.14644L14.8536 6.85355C15.0488 7.0488 15.0488 7.36539 14.8536 7.56066L9.10355 13.3107C8.90828 13.5059 8.5917 13.5059 8.39644 13.3107Z"
              fill="#D62828"
            />
          </svg>
          <span>4 lorem</span>
        </div>
      </div>
      <div className="card--btn">
        <button>Add to card</button>
      </div>
    </div>
  );
};
