import React from "react";
import { Link } from "react-router-dom";
export const Banner = () => {
  return (
    <section className="banner">
      <div className="hero-banner">
        <div className="hero--content">
          <div className="content">
            <h2>Crafting your Exceptional Dining Reservations</h2>
            <p>
              Reservation is a step into a world of gastronomic wonder. Reserve
              your table today and let us paint your culinary dreams into
              reality.
            </p>
          </div>
          <div className="btn">
            <Link to="/">Explore Products</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
