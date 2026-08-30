import LikeIcon from "@/components/ui/icons/like-icon";
import StarScore from "@/components/ui/icons/star-score";
import {addSeparator, formatToPersian} from "@/lib/utils/NumberNormalize";
import {ImageContainer} from "@/components/ui/image/ImageContainer";
import {AppImage} from "@/components/ui/image/AppImage";
import {data} from "@/constans/constans";
import {AddToCartButton} from "@/components/branches/AddtoCartButton";
import { foods } from "@/constans/foods";

export function FoodItem({food = foods[0]}) {
  return (
    <div className="bg-white border border-gray-4 rounded-lg w-full h-full">
      {/* pic food */}
      <ImageContainer className="relative rounded-t-lg w-full h-27 md:h-36 lg:h-50 xl:h-64" >
        <AppImage publicId={"/foods/food_test_1/food.jpg"} className="rounded-t-lg object-cover select-none" alt={"دلمه برگ کلم"} sizes={"(max-width:1280) 288px,(max-width:1024) 256px,(max-width:768) 208px,(max-width:320) 168px"} />
      </ImageContainer>
      {/* caption */}
      <div className="justify-between items-center px-2 md:px-3 lg:px-4 w-full">
        {/* title food */}
        <div className="flex justify-center items-center my-1 lg:my-2 h-5.5 md:h-7.5 lg:h-9 font-estedad-regular md:font-estedad-medium lg:font-estedad-semi-bold text-xs md:text-sm lg:text-xl select-none">
          {food.label}
        </div>

        {/* property food */}
        <div className="flex justify-between items-center w-full h-10 md:h-13 select-none">
          <div className="flex flex-col gap-2">
            {/* add to favorite */}
            <div className="flex items-center gap-1 gap-y-4 h-4 lg:h-4.5">
              <span className="">
                <LikeIcon className={"w-4 h-4 stroke-gray-5 cursor-pointer md:w-5 md:h-5"} />
              </span>
              <p className="hidden lg:flex font-estedad-regular text-[10px] text-gray-5">
                {"افزودن به علاقمندی‌ها"}
              </p>
            </div>
            {/* score */}
            <div className="flex items-center gap-1 h-4.5 lg:h-8">
              <StarScore percentScore={food.score} />
              <p className="font-estedad-regular lg:font-estedad-medium text-[12px] lg:text-sm">
                ۴
              </p>
              <span className="hidden lg:flex font-estedad-fd-regular text-[10px]">
                ({food.countScore || 0} امتیاز)
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* off */}
            {food.discount >0 && <div className="flex justify-end items-center gap-0.5 lg:gap-2 h-4.5 font-estedad-fd-regular text-[10px] sm:text-xs md:text-sm">
              <div className="text-gray-5 line-through">{addSeparator(formatToPersian(food.price.toString()))}</div>
              <div
                  className="flex justify-center items-center bg-error-extralight px-2 rounded-3xl h-full text-error"
              >
                ٪{formatToPersian(food.discount.toString())}
              </div>
            </div>}
            {/* price */}
            <div className="flex items-center gap-1 h-4.5 lg:h-7 font-estedad-fd-regular text-gary-8 text-xs md:text-sm lg:text-base">
              {addSeparator(formatToPersian(((food.price * (100 - food.discount)) / 100).toString()))} تومان
            </div>
          </div>
        </div>

        {/* add to cart btn */}
        <AddToCartButton food={food} />
      </div>
    </div>
  );
}
