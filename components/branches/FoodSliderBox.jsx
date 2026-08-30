"use client";

import { FoodSlider } from "@/components/branches/FoodSlider";

export function FoodSliderBox({title, textColorTitle = "", bgContainer = ""}) {
  return (
      <div className={`xl:h-137 lg:h-124 md:h-102  h-83 flex flex-col px-4 py-8 md:px-8 xl:px-27 ${bgContainer}`}>
        <div className="flex mb-4 w-full h-6 lg:h-8.5 select-none">
          <h2 className={`text-base lg:text-2xl font-estedad-bold ${textColorTitle}`}>
            {title}
          </h2>
        </div>
        <div className="w-full md:h-73 lg:h-95 xl:h-108">
          <FoodSlider />
        </div>
      </div>
  );
}
