"use client";
import useSlider from "@/hooks/useSlider";
import ChipsButton from "@/components/ui/buttons/ChipsButton";
import SearchNormal from "@/components/ui/icons/search-normal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import ArrowLeft from "@/components/ui/icons/arrow-left";

export default function FavoriteFilterBox() {
  const [querySearch, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const router = useRouter();
  const continuedParam = querySearch === "" ? "" : `search=${querySearch}`;
  const {
    swiperRef,
    isEndSwiper,
    isBeginningSwiper,
    handelPrev,
    handelNext,
    updateSwiperState,
  } = useSlider();
  const categoryList = [
    { name: "همه", category: "all" },
    { name: "غذای اصلی", category: "main-food" },
    { name: "پیش غذا", category: "pre-food" },
    { name: "دسر", category: "desert" },
    { name: "نوشیدنی", category: "drink" },
  ];
  console.log(swiperRef.current?.activeIndex);
  return (
    <div className="relative flex lg:flex-row flex-col lg:justify-between items-center gap-2 lg:gap-4 lg:my-2 lg:px-6 md:h-24 lg:h-10">
      <div className="lg:block relative flex py-2 lg:py-4 w-full overflow-hidden">
        <Swiper
          className={`justify-center! mx-auto! w-auto max-w-full! flex! `}
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
          {categoryList.map(({ name, category }, index) => {
            return (
              <SwiperSlide
                className="w-auto! overflow-hidden relative!"
                key={index}
                onClick={(e) => {
                  swiperRef.current?.slideTo(index);
                }}
              >
                <ChipsButton
                  category={category}
                  setCategory={setCategory}
                  continuedParam={continuedParam}
                >
                  {name}
                </ChipsButton>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex-none w-full sm:w-88 h-8 md:h-10 grow-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (querySearch.trim().length === 0) {
              router.push(`?category=${category}`);
            } else {
              router.push(`?category=${category}&search=${querySearch.trim()}`);
            }
          }}
          className="flex justify-between items-center px-3 border border-gray-4 rounded-lg h-full"
        >
          <input
            type="text"
            value={querySearch ?? ""}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="جستجو"
            className="bg-transparent py-3 outline-none w-full h-auto font-estedad-regular text-gray-8 placeholder:text-gray-8 text-xs"
          />
          <div className="flex justify-center items-center">
            <SearchNormal className="fill-black w-4 md:w-6 h-4 md:h-6" />
          </div>
        </form>
      </div>
    </div>
  );
}
