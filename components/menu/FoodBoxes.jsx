"use client"
import { addSeparator, formatToPersian } from "@/lib/utils/NumberNormalize";
import Image from "next/image";
import food from "@/public/foods/food_test_0/food.jpg";
import LikeIcon from "../ui/icons/like-icon";
import StarRate from "../ui/icons/star-rate";

export default function FoodBoxes({data}) {
    return (
        <div className="px-2 md:px-8 xl:px-27 w-full">
            {data.map((item, i) => {
                return (
                    <div key={i} id={item.tag} className="mb-3 w-full">
                        <p className="mb-1 py-4 font-estedad-bold text-base md:text-lg lg:text-xl xl:text-2xl">
                            {item.name}
                        </p>
                        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 w-full">
                            {Array.from({ length: 10 }).map((_, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="flex gap-0 lg:gap-2.5 bg-white border border-gray-4 rounded-lg w-full h-25 lg:h-39.5"
                                    >
                                        {/* image food */}
                                        <div className="relative rounded-r-lg h-full aspect-[92/100]">
                                            <Image
                                                src={food}
                                                alt=""
                                                fill
                                                className={`object-cover rounded-r-lg`}
                                            />
                                        </div>
                                        {/* caption food */}
                                        <div className="flex flex-col justify-between space-y-1 mx-1.5 lg:mx-2.5 py-1.5 lg:py-3 w-full max-w-full h-full">
                                            <div className={`w-full h-[45px] lg:h-24 flex justify-between gap-0.5`}>
                                                {/* name food and contion */}
                                                <div className={`lg:max-w-66 flex flex-col justify-between`}>
                                                    <h3 className={`font-estedad-regular lg:font-estedad-semi-bold text-xs md:text-sm lg:text-xl`}>
                                                        کوفته برنجی
                                                    </h3>
                                                    <p
                                                        className={`text-[10px] lg:text-sm font-estedad-regular line-clamp-1 lg:line-clamp-2 leading-[180%]`}
                                                    >
                                                        برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو
                                                        پیاز
                                                    </p>
                                                </div>

                                                <div className={`max-h-full lg:max-h-13 lg:self-end flex flex-col justify-between lg:mt-2.5`}>
                                                    {/*   main price and discount */}
                                                    <div
                                                        className={`font-estedad-regular flex gap-2 items-center max-h-full justify-end`}
                                                    >
                                                        <div
                                                            className={`font-estedad-fd-regular text-[10px] lg:text-base text-gray-5 line-through`}
                                                        >
                                                            {addSeparator(formatToPersian("180000"))}
                                                        </div>
                                                        <div
                                                            className={`h-[19px] px-1 bg-error-extralight rounded-lg grid place-items-center`}
                                                        >
                                                            <div
                                                                className={`text-[10px] lg:text-xs text-error flex w-auto`}
                                                            >
                                                                <p className={``}>{formatToPersian("35")}</p>
                                                                <span className={``}>%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* final price with discount*/}
                                                    <div
                                                        className={`flex gap-1 font-estedad-regular min-h-[18] items-center  text-[10px] lg:text-lg justify-end`}
                                                    >
                                                        <p className={`font-estedad-fd-regular`}>
                                                            {addSeparator(formatToPersian("145000"))}
                                                        </p>
                                                        <p className={``}>تومان</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className={`w-full h-8 lg:h-10 flex items-center justify-between min-[328px]:gap-0`}
                                            >
                                                <div className="flex justify-center items-center min-[328px]:gap-1">
                                                    <LikeIcon className="lg:hidden w-4"/>
                                                    <StarRate className="mb-0.5 w-4 lg:w-6" score={93}/>
                                                </div>
                                                <div
                                                    className={`min-w-23 w-full max-w-45 md:max-w-50 lg:max-w-40 xl:max-w-66 h-8 lg:h-10 bg-primary font-estedad-regular lg:font-estedad-medium text-[10px] lg:text-base text-white flex items-center justify-center rounded-sm`}
                                                >
                                                    افزودن به سبد خرید
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
