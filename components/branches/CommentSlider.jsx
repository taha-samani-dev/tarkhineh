"use client";
import u1 from "@/public/users/user_2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import StarScore from "../ui/icons/star-score";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { BtnSliderFood } from "./BtnSliderFood";
import useSlider from "@/hooks/useSlider";

export default function CommentSlider() {
    const {swiperRef, isEndSwiper, isBeginningSwiper, handelPrev, handelNext, updateSwiperState} = useSlider()
    return (
        <div className="relative px-4 md:px-16 xl:px-27 w-full">
            <Swiper
                spaceBetween={16}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={"auto"}
                className={`w-full lg:h-64 md:h-55 h-41 pb-3 my-1 relative`}
                modules={[Pagination]}
                onSlideChange={() => {
                    updateSwiperState();
                }}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                }}
            >
                {Array.from({ length: 7 }).map(() => (
                    <SwiperSlide
                        className={`cursor-grab relative !w-65 sm:!w-80 md:!w-110 lg:!w-150 border border-gray-4 rounded-lg !h-31 md:!h-42 lg:!h-51`}
                    >
                        <div
                            className={`w-full h-full flex items-center justify-center gap-1 font-estedad-regular text-[10px] md:text-xs lg:text-base text-gray-8 py-2 md:py-3 lg:py-6 md:px-4 px-2  lg:px-8`}
                        >
                            <div className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3.5 w-20 md:w-30 h-full">
                                <div
                                    className={`w-14 h-14 md:h-20 lg:h-24 lg:w-24 md:w-20 rounded-full relative`}
                                >
                                    <Image
                                        src={u1}
                                        alt="comment"
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <p className="flex flex-col items-center gap-1 text-[10px] text-gray-5 md:text-xs lg:text-sm">
                                    <span>آرزوی محمد علیزاده</span>
                                    <span>۲۳ اسفند ۱۴۰۱</span>
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center p-1 border-gray-4 border-r w-37 sm:w-49 md:w-70 lg:w-107 h-full text-justify cursor-pointer">
                                <h1>
                                    از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای
                                    گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های
                                    ترخینه واقعا تشکر میکنم.
                                </h1>
                            </div>
                            <div className="bottom-2 md:bottom-3 lg:bottom-6 left-4 md:left-6 lg:left-9 absolute flex justify-center items-center self-end md:gap-1 w-8 md:w-6 lg:w-12 h-4 md:h-6 lg:h-8">
                                <StarScore
                                    StarScore={`80`}
                                    className="mb-[2px] md:mb-[3px] lg:mb-[5px] w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5"
                                />
                                <p className="font-estedad-fd-bold">۴</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="!bottom-4 !z-20 relative flex justify-center items-center !gap-0 !m-0 mx-auto swiper-pagination"></div>
            </Swiper>
            <BtnSliderFood
                className="hidden top-[42%] md:left-12 xl:left-24 absolute md:flex !w-8 !h-8"
                classNameArrow="!w-6 !h-6"
                handleClick={handelNext}
                disabled={isEndSwiper}
            />
            <BtnSliderFood
                className="hidden top-[42%] md:right-12 xl:right-22 absolute md:flex !w-8 !h-8 rotate-180"
                classNameArrow="!w-6 !h-6"
                handleClick={handelPrev}
                disabled={isBeginningSwiper}
            />
        </div>
    );
}
