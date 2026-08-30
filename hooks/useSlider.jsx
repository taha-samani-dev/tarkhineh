"use client"

import {useRef, useState} from "react";

function useSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);
    const mainSwiperRef = useRef(null);
    const [isEndSwiper, setEndSwiper] = useState(false);
    const [isBeginningSwiper, setBeginningSwiper] = useState(true);
    const updateSwiperState = () => {
        if (swiperRef.current) {
            setEndSwiper(swiperRef.current.isEnd);
            setBeginningSwiper(swiperRef.current.isBeginning);
        }
    };
    const handelNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
            updateSwiperState();
        }
    };
    const handelPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
            updateSwiperState();
        }
    };
    return {swiperRef, isEndSwiper, isBeginningSwiper, handelPrev, handelNext, updateSwiperState , mainSwiperRef, thumbsSwiper,setThumbsSwiper};
}

export default useSlider;