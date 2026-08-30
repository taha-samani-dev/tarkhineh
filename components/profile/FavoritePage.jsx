"use client";

import Button from "@/components/ui/buttons/Button";
import { EmptyCard } from "@/components/ui/icons/empty-card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FavoriteFilterBox from "./FavoriteFilterBox";
import Image from "next/image";
import LikeIcon from "@/components/ui/icons/like-icon";
import StarScore from "@/components/ui/icons/star-score";
import { addSeparator, formatToPersian } from "@/lib/utils/NumberNormalize";
import StarRate from "@/components/ui/icons/star-rate";
import test from "@/public/foods/food_test_1/food.jpg";
import NotFoundResult from "@/components/ui/icons/not-found-result";

export default function FavoritePage() {
  const favorite = [{}];
  const search = useSearchParams().get("search");

  console.log(search);
  const data =
    search === null
      ? favorite
      : favorite.find((i) => {
          return i === search;
        });
  console.log(data);
  return (
    <>
      {favorite.length === 0 && (
        <div className="relative flex justify-center items-center border border-gray-4 md:border-none rounded-lg w-full h-60 sm:h-85 md:h-97.5">
          <EmptyCard
            className={`absolute -z-10 fill-gray-3 sm:w-56 sm:h-54 w-50 h-48`}
          />
          <div className="space-y-4 sm:space-y-6 md:space-y-8 font-estedad-regular text-center">
            <h1 className="z-10 font-estedad-regular text-gray-7 text-sm sm:text-base md:text-xl align-middle">
              شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
            </h1>

            <Link
              href={"/public"}

            >
              <Button className="flex mx-auto w-38 md:w-72 font-estedad-medium text-xs sm:text-sm md:text-base" style="stroke">منوی رستوران</Button>
            </Link>
          </div>
        </div>
      )}
      {favorite.length !== 0 && (
        <div className=" ">
          <FavoriteFilterBox />

          <div
            dir="ltr"
            className="gap-2 md:gap-4 lg:gap-6 grid grid-cols-2 sm:grid-cols-3 my-4 md:px-6 py-4 lg:h-170 overflow-x-auto"
          >
            {data &&
              Array.from({ length: 12 }).map((i, index) => {
                return (
                  <div
                    dir="rtl"
                    className="border border-gray-4 rounded-sm md:rounded-lg font-estedad-regular"
                    key={index}
                  >
                    <div className="relative w-full aspect-38/26">
                      <Image
                        src={test}
                        fill
                        alt="00"
                        className="rounded-t-sm md:rounded-t-lg object-cover"
                      />
                    </div>
                    <div className="px-2 md:px-4">
                      <div className="flex justify-between py-2 md:py-4 md:font-estedad-bold">
                        <div className="text-sm md:text-lg">پاستا سبزیجات </div>
                        <div className="">
                          <LikeIcon className="w-4 md:w-6 h-4 md:h-6" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs md:text-base">
                        <div className="flex justify-center items-center gap-1">
                          <StarScore
                            className="min-[1120]:hidden"
                            percentScore="80"
                          />
                          <p className="min-[1120]:hidden">
                            {formatToPersian(4)}
                          </p>
                          <StarRate
                            className="hidden min-[1120]:block h-4 xl:h-5"
                            score={"80"}
                          />
                        </div>
                        <div className="flex gap-1">
                          <p className="">
                            {addSeparator(formatToPersian(150_000))}
                          </p>
                          <p className="">تومان</p>
                        </div>
                      </div>
                        <Button className="py-2 md:py-4 font-estedad-regular w-full">افزودن به سبد خرید</Button>
                    </div>
                  </div>
                );
              })}
            {data === undefined && (
              <div className="flex justify-center items-center col-span-2 sm:col-span-3 w-full">
                <NotFoundResult />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
