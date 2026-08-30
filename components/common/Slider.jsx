"use client"
import {Autoplay, Pagination} from "swiper/modules";
import useSlider from "@/hooks/useSlider";
import ShapeSlider from "@/components/ui/icons/shape-slider";
import ArrowLeft from "@/components/ui/icons/arrow-left";
import {ImageContainer} from "@/components/ui/image/ImageContainer";
import {Swiper, SwiperSlide} from "swiper/react";
import {AppImage} from "@/components/ui/image/AppImage";
import {BackFilterContainer} from "@/components/common/BackFilterContainer";
import {HeaderSlide} from "@/components/common/HeaderSlide";
import {ActionButtonSlider} from "@/components/common/ActionButtonSlider";

export  function Slider ({
                             data,
                             className="w-full h-full",
                             loop=true,
                             spaceBetween=0,
                             autoplay={delay: 4000, disableOnInteraction: false},
                             speed=600,
                             paginationClickable=true}
) {
    const {swiperRef, handelNext, handelPrev} = useSlider()
    return (
        <>
            <ImageContainer className={className}>
                <Swiper
                    key={'4'}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full h-full"
                    loop={loop}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={spaceBetween}
                    autoplay={autoplay}
                    speed={speed}
                    pagination={{clickable: paginationClickable , el: ".swiper-pagination",}}
                >
                    {data.map(({text,photo, href,textLink}, index) => (
                        <SwiperSlide className="relative flex-col! w-full h-full cursor-grab flex!" key={index}>
                            <AppImage className={`-z-10 absolute`} alt={text} publicId={photo} priority />
                            <BackFilterContainer />
                            <HeaderSlide>{text}</HeaderSlide>
                            <ActionButtonSlider href={href} >{textLink}</ActionButtonSlider>
                        </SwiperSlide>
                    ))}
                    <div className={`absolute w-full bottom-0 flex justify-center items-end h-12`}>
                        <ShapeSlider className="-bottom-1 z-10 absolute fill-white w-20.5 md:w-38.5 h-4.75 sm:h-6 md:h-8" />
                    </div>
                    <div className="-bottom-0.5! md:bottom-0.5! z-12! absolute flex justify-center items-center m-0! w-full h-5! md:h-!8 swiper-pagination"></div>
                </Swiper>
                {/* ------------------------------------------------------------------------------- */}
                <button
                    className="hidden top-0 right-4 z-10 absolute md:flex place-items-center w-8 h-full cursor-pointer"
                    onClick={handelPrev}
                >
                    <ArrowLeft className="fill-white rotate-180" />
                </button>
                <button
                    className="hidden top-0 left-4 z-10 absolute md:flex place-items-center w-8 h-full cursor-pointer"
                    onClick={handelNext}
                >
                    <ArrowLeft className="fill-white" />
                </button>
                {/* ------------------------------------------------------------------------------ */}
            </ImageContainer>
        </>
    )
}
