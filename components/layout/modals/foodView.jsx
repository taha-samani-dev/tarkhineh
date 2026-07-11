"use client";

import BtnClose from "@/components/ui/icons/btn-close";
import { Gallery } from "@/components/ui/sliders/gallery";
import StarRate from "@/components/ui/icons/star-rate";
import {useModal} from "@/store/Modal.store";
import {data} from "@/constans/constans";

export const FoodView = () => {
  const closeModal = useModal(s=>s.closeModal)
  const open = useModal(s=>s.open)
  const foodId = 1575 - 5481 - 1842 - 8424;
  const food = data.foods.find((i) => i.id === foodId);
  return (
    <>
      {open === "foodView" && (
        <div
          className={`w-dvw h-dvh min-h-dvh rounded-none duration-1000 transition-all ease-in-out inset-0 bg-[#000000]/60 z-50 flex justify-center items-center fixed backdrop-blur-[3px] ${
              open === "foodView" ? "" : "absolute scale-0 -top-! rounded-[100%]"
          }`}
        >
          <div
            className={`duration-1000 transition-all ease-in-out fixed md:w-186 sm:w-150 lg:w-202 w-80 inset-x-auto min-h-75 max-h-dvh h-auto  sm:inset-auto lg:inset-x-[calc(50%-24rem)] z-60 rounded-lg bg-white overflow-y-auto `}
          >
            <div className="flex justify-between items-center p-2 md:p-3 w-full h-12 md:h-16">
              <div className="flex justify-center items-center w-7 sm:w-10 h-7 sm:h-10"></div>
              <p className="font-estedad-semi-bold text-text-color-modal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center">
                {`اطلاعات محصول`}
              </p>
              <button
                type="text"
                className="flex justify-center items-center bg-white hover:bg-error-extralight ml-1 p-1 rounded-lg w-6 sm:w-10 h-6 sm:h-10 active:scale-90 cursor-pointer"
                onClick={() => {
                  closeModal()
                }}
              >
                <BtnClose className="bg-gray-8" />
              </button>
            </div>

            <div
              className={`w-full h-88 md:h-99 lg:h-110 overflow-hidden relative`}
            >
              <Gallery allPhoto={food.allPhoto} />
            </div>

            <div className={`sm:p-4 py-1 px-3`}>
              <div
                className={`flex items-center justify-between gap-4 font-estedad-regular text-sm sm:text-lg`}
              >
                <p>پاستا سبزیجات</p>
                <div>
                  <StarRate
                    numberStar={5}
                    score={80}
                    className={`w-4 md:w-5 lg:w-6`}
                  />
                </div>
              </div>
              <div
                className={`flex justify-between gap-4 font-estedad-fd-regular text-[10px] sm:text-sm`}
              >
                <p className={``}>
                  پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده، پاستا، قارچ،
                  گوجه، کدوی خوردشده، پیاز{" "}
                </p>
                <p className={`whitespace-nowrap`}>(۶۲ نظر)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
