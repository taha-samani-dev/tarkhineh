"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FoodItem } from "@/components/branches/FoodItem";
import { BtnSliderFood } from "@/components/branches/BtnSliderFood";
import useSlider from "@/hooks/useSlider";

export function FoodSlider() {
  const {swiperRef, isEndSwiper, isBeginningSwiper, handelPrev, handelNext, updateSwiperState} = useSlider();
  return (
    <div className={`relative`}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          updateSwiperState();
        }}
        className={`w-full! h-full! px-5!`}
        slidesPerView="auto"
        spaceBetween={10}
      >
        {Array.from({ length: 10 }, () => (
          <SwiperSlide
            className={`absolute xl:w-72! lg:w-64! md:w-52! w-42! h-full! cursor-grab`}>
            <FoodItem />
          </SwiperSlide>
        ))}
      </Swiper>

      <BtnSliderFood
        className={`absolute hidden lg:flex  lg:top-56 xl:top-70 -left-5 z-10 cursor-pointer select-none`}
        disabled={isEndSwiper}
        handleClick={() => {
          handelNext();
        }}
      />

      <BtnSliderFood
        className={` absolute hidden  lg:flex lg:top-56 xl:top-70 -right-5 cursor-pointer rotate-180 select-none`}
        disabled={isBeginningSwiper}
        handleClick={() => {
          handelPrev();
        }}
      />
    </div>
  );
}
