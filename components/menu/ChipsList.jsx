"use client";
import Link from "next/link";
import ArrowLeft from "../ui/icons/arrow-left";
import Tik from "../ui/icons/tik";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import SearchInput from "../home/SearchInput";
import useSlider from "@/hooks/useSlider";
import useChips from "@/hooks/useChips";

export default function ChipsList({ data, className }) {
  const {
    swiperRef,
    isEndSwiper,
    isBeginningSwiper,
    handelPrev,
    handelNext,
    updateSwiperState,
  } = useSlider();

  const { handleCLick, toggle, hash, pressedTag } = useChips(data, swiperRef);

  return (
      <div
          className={`w-full h-22 max-w-360 md:h-24 lg:h-16 lg:flex items-center justify-between bg-white duration-500 ease-in transition-all px-4 md:px-8 xl:px-27 ${className}`}
      >
        <div className="relative flex items-center gap-2 px-6 lg:px-4 py-2 lg:py-4 w-full lg:w-[calc(100%-540px)] max-w-full font-estedad-regular text-[12px] text-gray-8 md:text-base">
          <Swiper
              className="w-auto max-w-full! overflow-visible"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={() => {
                updateSwiperState();
              }}
              freeMode={true}
              modules={[FreeMode]}
              slidesPerView={"auto"}
              spaceBetween={8}
          >
            {data.map((v, index) => {
              return (
                  <SwiperSlide
                      className="bg-gray-3! lg:hover:bg-gray-4! rounded-lg! lg:rounded-[4rem]! w-auto! h-6! md:h-8! overflow-hidden relative!"
                      key={v.tag}
                      onClick={() => {
                        toggle(v.tag);
                      }}
                  >
                    <Link
                        href={`#${v.tag}`}
                        onClick={(e) => {
                          swiperRef.current?.slideTo(index);
                          handleCLick(e);
                        }}
                        className="z-10 relative flex justify-center items-center gap-1 lg:gap-1 px-2 py-1 h-full transition-all duration-500 ease-in-out"
                    >
                      <div
                          className={`transition-all duration-500 ease-in-out flex items-center justify-center ${
                              hash !== v.tag ? "w-0 h-0" : " w-4 h-full"
                          }`}
                      >
                        <Tik className="w-3 md:w-4 h-2 md:h-3" />
                      </div>
                      <p
                          className={`transition-all duration-500 ease-in-out w-auto ${
                              hash === v.tag ? "text-primary" : "text-gray-8"
                          }`}
                      >
                        {v.name}
                      </p>
                      <div
                          className={`transition-all duration-500 ease-in-out flex items-center justify-center ${
                              hash === v.tag ? "w-0 h-0 " : "w-4 h-full"
                          }`}
                      >
                        <ArrowLeft className="fill-gray-8 my-auto w-3 md:w-4 h-3 md:h-4" />
                      </div>
                    </Link>
                    <div
                        className={`lg:hidden flex w-50 h-50 top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full inset-y-0 z-0 bg-gray-4 scale-0 transition-all duration-500 ease-in-out absolute ${
                            pressedTag === v.tag && "scale-100 opacity-50"
                        }`}
                    ></div>
                  </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {isEndSwiper || (
            <div
                className={`w-6 h-6 z-10 hidden lg:flex lg:left-140 xl:left-159 bg-gray-1 rounded-sm absolute`}
                onClick={handelNext}
            >
              <ArrowLeft
                  className={`flex items-center justify-center w-4 h-4 fill-gray-6 m-1`}
              />
            </div>
        )}
        {isBeginningSwiper || (
            <div
                className={`w-6 h-6 z-10 hidden lg:flex lg:right-5 xl:right-24 bg-gray-1 rounded-sm absolute`}
                onClick={handelPrev}
            >
              <ArrowLeft className={`w-4 h-4 fill-primary m-1 rotate-180`} />
            </div>
        )}
        <SearchInput className="mx-auto px-4 lg:px-2 w-full lg:w-124 max-w-80 md:max-w-124 h-8 md:h-10"/>
      </div>
  );
}
