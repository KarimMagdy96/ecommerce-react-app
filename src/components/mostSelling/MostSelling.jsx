import React from "react";
import { HeadLines } from "../headLines/HeadLines";
import { Card } from "../card/Card";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

export const MostSelling = () => {
  return (
    <section className="mostSelling">
      <HeadLines
        title={"Most Selling"}
        subTitle={"Our Most Selling Products"}
      />
      <Swiper
        slidesPerView={1.3}
        modules={[Navigation, Scrollbar]}
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
          hide: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={40}
        // loop={true}
        breakpoints={{
          600: {
            slidesPerView: 2.3,
          },
          800: {
            slidesPerView: 2.5,
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
        <div className="swiper--progress swiper-scrollbar"></div>
        <div className="swiper--arrows">
          <div className="left-arrow swiper-button-prev arrow">
            <svg
              style={{ transform: "rotate(180deg)" }}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M9.30176 1.42822L10.3857 0.344236C10.8447 -0.114748 11.5869 -0.114748 12.041 0.344236L21.5332 9.83154C21.9922 10.2905 21.9922 11.0327 21.5332 11.4868L12.041 20.979C11.582 21.438 10.8398 21.438 10.3857 20.979L9.30176 19.895C8.83789 19.4312 8.84766 18.6743 9.32129 18.2202L15.2051 12.6147L1.17188 12.6147C0.522461 12.6147 0 12.0923 0 11.4429V9.88037C0 9.23096 0.522461 8.7085 1.17188 8.7085L15.2051 8.7085L9.32129 3.10303C8.84277 2.64892 8.83301 1.89209 9.30176 1.42822Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="right-arrow swiper-button-next arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M9.30176 1.42822L10.3857 0.344236C10.8447 -0.114748 11.5869 -0.114748 12.041 0.344236L21.5332 9.83154C21.9922 10.2905 21.9922 11.0327 21.5332 11.4868L12.041 20.979C11.582 21.438 10.8398 21.438 10.3857 20.979L9.30176 19.895C8.83789 19.4312 8.84766 18.6743 9.32129 18.2202L15.2051 12.6147L1.17188 12.6147C0.522461 12.6147 0 12.0923 0 11.4429V9.88037C0 9.23096 0.522461 8.7085 1.17188 8.7085L15.2051 8.7085L9.32129 3.10303C8.84277 2.64892 8.83301 1.89209 9.30176 1.42822Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
