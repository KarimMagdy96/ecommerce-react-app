import React from "react";
import { HeadLines } from "../headLines/HeadLines";
import { Card } from "../card/Card";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

export const MostSelling = () => {
  return (
    <section className="mostSelling">
      <HeadLines
        title={"Most Selling"}
        subTitle={"Our Most Selling Products"}
      />
      <Swiper
        slidesPerView={1.3}
        spaceBetween={40}
        loop={true}
        breakpoints={{
          600: {
            slidesPerView: 2.3,
          },
          800: {
            slidesPerView: 3.3,
          },
          1440: {
            slidesPerView: 3.9,
          },
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      <div className="swiper--option">
        <div className="swiper--arrows">
          <div className="right-arrow"></div>
          <div className="left-arrow"></div>
        </div>
        <div className="swiper--progress"></div>
      </div>
    </section>
  );
};
