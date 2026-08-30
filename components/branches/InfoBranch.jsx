"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import pic_0 from "@/public/branches/ekbatan/slider_information/slide_1_branch_information.jpg";
import Clock from "../ui/icons/clock";
import CallCalling from "../ui/icons/call-calling";
import Location from "../ui/icons/locatin";
import { useRef } from "react";
import ArrowLeft from "../ui/icons/arrow-left";

export default function InfoBranch() {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-center items-center w-full">
          <h3 className="my-4 font-estedad-bold text-gray-8 text-base md:text-xl lg:text-2xl">
            شعبه اکباتان
          </h3>
        </div>
        {/* slider */}
        <div className="w-full">
          <Swiper
            className={`w-full h-44 sm:h-54  md:h-64 lg:h-84 my-2`}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {Array.from({ length: 10 }).map(() => (
              <SwiperSlide className={`relative`}>
                <Image
                  src={pic_0}
                  className={`object-cover absolute`}
                  alt={`akbatan`}
                  fill
                />
              </SwiperSlide>
            ))}
            <button
              className="hidden top-[calc(50%-16px)] right-4 z-10 absolute md:flex justify-center items-center md:w-8 lg:w-12 md:h-8 lg:h-12 cursor-pointer"
              onClick={handlePrev}
            >
              <ArrowLeft className="fill-white rotate-180" />
            </button>
            <button
              className="hidden top-[calc(50%-16px)] left-4 z-10 absolute md:flex justify-center items-center md:w-8 lg:w-12 md:h-8 lg:h-12 cursor-pointer"
              onClick={handleNext}
            >
              <ArrowLeft className="fill-white" />
            </button>
          </Swiper>
          <div
            className={`lg:h-32.5 sm:h-20 md:h-28  h-15 grid md:grid-cols-3 grid-cols-2 w-76 sm:w-100 md:w-180  mx-auto  lg:max-w-202.5 border border-primary rounded-lg relative -top-6 sm:-top-8 md:-top-10 lg:-top-14 z-30 md:py-4 px-4  sm:px-6  md:px-12 justify-between bg-white`}
          >
            <div className="flex md:flex-col md:justify-start items-center gap-2 col-span-1 row-start-2 md:row-start-1 h-full">
              <CallCalling
                className={`lg:w-8! lg:h-8! md:w-6! md:h-6! w-4! h-4! fill-gray-8 `}
              />
              <p className="flex md:flex-col gap-2 md:gap-0 font-estedad-regular text-[10px] text-gray-8 sm:text-xs md:text-sm lg:text-base text-center">
                <span>۰۲۱-۳۳۵۳۵۳۵۴</span>
                <span className="hidden md:flex">۰۲۱-۳۳۵۳۵۳۵۶</span>
              </p>
            </div>
            <div className="flex md:flex-col md:justify-start items-center gap-2 col-span-2 md:col-span-1 row-start-1 h-full">
              <Location
                className={`lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4  fill-gray-8 `}
              />
              <p className="font-estedad-regular text-[10px] text-gray-8 sm:text-xs md:text-sm lg:text-base text-center">
                شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
              </p>
            </div>
            <div className="flex md:flex-col md:justify-start items-center gap-2 col-span-1 row-start-2 md:row-start-1 h-full">
              <Clock className={`lg:w-8 lg:h-8 md:w-6 md:h-6  fill-gray-8 `} />
              <p className="font-estedad-regular text-[10px] text-gray-8 sm:text-xs md:text-sm lg:text-base text-center">
                همه‌روزه از ساعت ۱۲ الی ۲۳{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
