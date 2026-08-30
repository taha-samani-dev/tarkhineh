"use client";

import { useState, useRef, useEffect } from "react";
import testimg from "@/public/foods/food_test_2/test-order-food.jpg";
import Image from "next/image";
import { addSeparator, formatToPersian } from "@/lib/utils/NumberNormalize";
import Button from "@/components/ui/buttons/Button";
export default function OrderItemsBox({ items = [] }) {
  const [show, setShow] = useState(false);
  const itemsContainerRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const checkWrap = () => {
      const el = itemsContainerRef.current;
      if (!el) return;

      const children = Array.from(el.children);
      if (children.length <= 1) {
        setIsOverflow(false);
        return;
      }

      const firstTop = children[0].offsetTop;

      const wrapped = children.some((child) => child.offsetTop !== firstTop);

      setIsOverflow(wrapped);
    };

    checkWrap();
    window.addEventListener("resize", checkWrap);

    return () => window.removeEventListener("resize", checkWrap);
  }, []);

  return (
    <>
      <div
        ref={itemsContainerRef}
        className={`flex flex-wrap duration-800 transition-all ease-in-out justify-center md:justify-between items-center gap-2 md:gap-4 font-estedad-regular text-[10px] text-gray-8 leading-[180%] overflow-hidden ${
          show ? "max-h-[1000px]" : "max-h-24 md:max-h-34"
        }`}
      >
        {Array.from({ length: 6 }).map((item, index) => {
          return (
            <div
              className="border border-gray-4 rounded-lg w-23 md:w-31"
              key={index}
            >
              <div className="relative w-full h-12 md:h-20">
                <Image
                  src={testimg}
                  alt={`${index}`}
                  className="rounded-t-lg object-cover"
                  fill
                />
                <div
                  className="bottom-1 left-1 z-10 absolute flex justify-center items-center bg-white px-1 py-px rounded-sm h-4"
                  dir="ltr"
                >
                  <p className="">x</p>
                  <p className="">{formatToPersian(2)}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center py-0.5">
                <p className="">کوکو سبزی</p>
                <div className="flex justify-center items-center gap-1">
                  <p className="">{addSeparator(formatToPersian(270_000))}</p>
                  <p className="">تومان</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isOverflow && (
        <div className="flex flex-col items-center my-2 h-8 md:h-10 overflow-hidden">
          <div className="w-60 h-8 md:h-10">

              <Button className={`duration-200 font-estedad-regular ease-in-out transition-all h-full w-full ${
                  show ? "translate-y-0" : "-translate-y-full"
              }`} style="textBTN" onClick={() => setShow(false)}>
                مشاهده کمتر
              </Button>

              <Button   className={`duration-200 font-estedad-regular ease-in-out transition-all h-full w-full ${
                  show ? "" : "-translate-y-full"
              }`} style="textBTN" onClick={() => setShow(true)}>
                مشاهده همه سفارشات
              </Button>

          </div>
        </div>
      )}
    </>
  );
}
