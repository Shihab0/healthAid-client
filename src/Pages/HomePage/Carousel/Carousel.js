import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[500px]"
      >
        <SwiperSlide className="bg bg1 text-center">
          <div className="text-slate-300">
            <h2 className="text-6xl font-bold font-mono mt-32">
              Welcome To Health Aid
            </h2>
            <p className="mt-4">
              No matter how your financial situation is, <br /> we treat you for
              free. Receive free treatment from renowned doctors anytime,
              anywhere from any device.{" "}
            </p>
            <button className="btn btn-wide mt-4 btn-warning btn-outline">
              Explore More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg bg2">Slide 2</SwiperSlide>
        <SwiperSlide className="bg bg3">Slide 3</SwiperSlide>
        <SwiperSlide className="bg bg4">Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
