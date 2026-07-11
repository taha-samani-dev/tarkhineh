"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import Image from "next/image";
import ArrowLeft from "@/components/ui/icons/arrow-left";
import useSlider from "@/hooks/useSlider";
import {useState} from "react";

export const Gallery = ({allPhoto}) => {
    const {swiperRef, mainSwiperRef, thumbsSwiper, setThumbsSwiper, handelNext, handelPrev} = useSlider()
    if (allPhoto.length === 0) return
    const [activeSlide, setActiveSlide] = useState(0)
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={0}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    mainSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    const index = swiper.activeIndex;
                    setActiveSlide(index);
                    if (thumbsSwiper) {
                        thumbsSwiper.slideTo(index);
                    }
                }}
                thumbs={
                    thumbsSwiper && !thumbsSwiper.destroyed
                        ? { swiper: thumbsSwiper }
                        : undefined
                }
                modules={[FreeMode, Navigation, Thumbs]}
                className="!w-full !h-full cursor-grab"
            >
                {allPhoto.map((item, index) => (
                    <SwiperSlide className="!w-full !h-full" key={index}>
                        <div className="relative w-full h-full">
                            <Image fill className="object-cover" src={item.photo} alt={item.text} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`w-full relative bottom-34 flex sm:justify-center items-center h-34`}>
                <Swiper
                    onSwiper={setThumbsSwiper}

                    onSlideChange={(swiper) => {
                        const index = swiper.activeIndex;
                        setActiveSlide(index);
                        if (mainSwiperRef.current) {
                            mainSwiperRef.current.slideTo(index);
                        }
                    }}
                   /* slidesOffsetAfter={88}
                    slidesOffsetBefore={88}*/
                    slidesPerView={7}
                    breakpoints={{0:{slidesPerView:"auto"}, 640:{slidesPerView:7}}}
                    spaceBetween={0}
                    modules={[Navigation, Thumbs]}
                    className="bottom-0 !z-50 !absolute !flex justify-center sm:[&_.swiper-wrapper]:justify-center !items-center mx-auto mb-6 !px-22 pb-4 !w-full h-18 md:h-20 lg:h-22 !overflow-visible cursor-pointer"
                >
                    {allPhoto.map((item, index) => (
                        <SwiperSlide className="relative !w-18 lg!w-22 md:!w-20 h-full" key={index} onClick={()=>{
                            swiperRef.current.slideTo(index);
                            mainSwiperRef.current.slideTo(index);
                        }}>
                            <Image
                                src={item.photo}
                                alt={item.text}
                                fill
                                className={`object-cover p-2 rounded-sm ${activeSlide === index && "!p-0 border !border-white" }`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="sm:hidden bottom-0 absolute flex justify-between items-center mb-2 w-[100%] h-22">
                <div className="z-60 relative flex justify-center items-center w-[12%] h-22">
                    <div
                        className="z-50 flex justify-center items-center bg-white rounded-full w-6 h-6"
                        onClick={handelPrev}
                    >
                        <ArrowLeft className="fill-gray-8 px-1 w-5 h-5 rotate-180" />
                    </div>
                    <div className="z-0 absolute inset-0 bg-linear-to-r from-[#000000]/60 to-[#000000]/20 w-full h-full"></div>
                </div>
                <div className="z-60 relative flex justify-center items-center w-[12%] h-22">
                    <div
                        className="z-50 flex justify-center items-center bg-white rounded-full w-6 h-6"
                        onClick={handelNext}
                    >
                        <ArrowLeft className="fill-gray-8 px-1 w-5 h-5" />
                    </div>
                    <div className="z-0 absolute inset-0 bg-linear-to-r from-[#000000]/60 to-[#000000]/20 w-full h-full"></div>
                </div>
            </div>
        </>
    )
}
