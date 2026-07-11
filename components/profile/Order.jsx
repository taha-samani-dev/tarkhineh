"use client";

import Button from "@/components/ui/buttons/Button";
import Box from "@/components/ui/icons/box";
import Calendar from "@/components/ui/icons/calendar";
import Clock from "@/components/ui/icons/clock";
import HomeIcon from "@/components/ui/icons/home-icon";
import {LineStatus} from "@/components/ui/icons/line-status";
import Location from "@/components/ui/icons/locatin";
import TickCircle from "@/components/ui/icons/tick-circle";
import TruckFast from "@/components/ui/icons/truck-fast";
import Wallet2 from "@/components/ui/icons/wallet-2";
import {convertGregorianToJalali} from "@/lib/jalaliDate";
import {addSeparator, formatToPersian} from "@/lib/utils/NumberNormalize";
import {useState} from "react";
import OrderItemsBox from "./OrderItemsBox";
import Confirm from "@/components/layout/modals/Confirm";
import {useModal} from "@/store/Modal.store";

export default function Order({ orders }) {
  const handleTimeOrder = (orderCreatedAt) => {
    const gDate = new Date(orderCreatedAt);
    const jDate = convertGregorianToJalali(
      gDate.getFullYear(),
      gDate.getMonth() + 1,
      gDate.getDate()
    );
    return (
      <>
        <p className="">
          {jDate.weekDayName} {formatToPersian(jDate.day)} {jDate.monthName},
          ساعت{" "}
        </p>
        <p className="" dir="ltr">
          {formatToPersian(gDate.getHours().toString())}:
          {formatToPersian(gDate.getMinutes().toString())}
        </p>
      </>
    );
  };

  const priceDiscount = (data) => {
    return data.items.map(
        (item) => item.price * (Number(item.discount) / 100)
    );
  };
  const priceWithoutDiscount = (data) => {
    return data.items.map((item) => item.price)
  };
  const total = (list) => {
    return list.reduce((totalList, pro) => totalList + pro);
  };
  const step = 1;
  const [target, setTarget] = useState(null);
  const openModal = useModal((s=>s.openModal))
  return (
    <>
      {orders.map((order, index) => {
        return (
          <div
            dir="rtl"
            className="mt-1 md:mt-2 px-2 md:px-6 py-4 border border-gray-4 rounded-sm font-estedad-regular text-[10px] text-gray-7 md:text-xs leading-[180%]"
            key={index}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-gray-6 text-xs md:text-sm">
                {order.branche}
              </h2>
              <div className="flex gap-2 md:gap-3">
                <p className="bg-gray-3 px-3 py-1 rounded-sm text-gray-8">
                  {order.deliveryMethod === "Courier"
                    ? "ارسال توسط پیک"
                    : "تحویل حضوری"}
                </p>
                <p
                  className={`rounded-sm px-3 py-1 ${
                    order.status === -1
                      ? "bg-error-extralight text-error"
                      : order.status === 0
                      ? "bg-warning-extralight text-warning"
                      : "bg-tint-1 text-primary"
                  }`}
                >
                  {order.status === -1
                    ? "لغو شده"
                    : order.status === 0
                    ? "جاری"
                    : "تحویل شده"}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div className="flex justify-center items-center gap-1">
                  <Calendar className={`w-4 h-4 fill-gray-7`} />
                  <div className="flex gap-1">
                    {handleTimeOrder(order.createdAt)}
                  </div>
                </div>
                <div className="hidden md:flex">
                  <div className="flex gap-1">
                    <p className="">مبلغ:</p>
                    <p className="">
                      {addSeparator(
                        formatToPersian(total(priceWithoutDiscount(order)))
                      )}
                    </p>
                    <p className="">تومان</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="">تخفیف:</p>
                    <p className="">
                      {addSeparator(
                        formatToPersian(total(priceDiscount(order)))
                      )}
                    </p>
                    <p className="">تومان</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <Clock className={`w-4 h-4 fill-gray-7`} />
                <div className="flex gap-1">
                  <p className="">تحویل تا</p>
                  <p className="text-primary" dir="ltr">
                    ۲۵:۳۳
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Location className={`w-4 h-4 fill-gray-7 text-[10]`} />
              <p className="">{order.address}</p>
            </div>

            <div className="flex">
              <div className="md:hidden flex items-center gap-1">
                <Wallet2 className="fill-gray-6 w-4 h-4" />
                <div className="flex gap-1">
                  <p className="">مبلغ:</p>
                  <p className="">
                    {addSeparator(
                      formatToPersian(total(priceWithoutDiscount(order)))
                    )}
                  </p>
                  <p className="">تومان</p>
                </div>
                <div className="flex gap-1">
                  <p className="">تخفیف:</p>
                  <p className="">
                    {addSeparator(formatToPersian(total(priceDiscount(order))))}
                  </p>
                  <p className="">تومان</p>
                </div>
              </div>
            </div>

            {/* status order */}
            <div className="flex justify-center items-center my-4 w-full text-xs min-[1200px]:text-sm">
              <div className="flex justify-center items-center gap-1">
                <HomeIcon
                  className={`${
                    step > 1
                      ? " fill-primary md:w-6 md:h-6 w-4 h-4"
                      : step === 1
                      ? "fill-primary md:w-8 md:h-8 w-6 h-6 "
                      : "md:w-6 md:h-6 w-4 h-4 fill-gray-6"
                  }`}
                />
                <p
                  className={`hidden md:block ${
                    step > 1
                      ? "text-primary"
                      : step === 1
                      ? "text-base font-estedad-bold text-primary"
                      : ""
                  }`}
                >
                  در حال آماده‌سازی
                </p>
              </div>

              <LineStatus
                className={`md:hidden block `}
                size={104}
                score={step > 1 ? 100 : step === 1 ? 50 : 0}
                id="m1"
              />
              <LineStatus
                className={`hidden md:block`}
                size={140}
                score={step > 1 ? 100 : step === 1 ? 50 : 0}
                id="d1"
              />

              <div className="flex justify-center items-center gap-1">
                {order.deliveryMethod === "Courier" ? (
                  <>
                    <TruckFast
                      className={`${
                        step > 2
                          ? " fill-primary md:w-6 md:h-6 w-4 h-4"
                          : step === 2
                          ? "fill-primary md:w-8 md:h-8 w-6 h-6 "
                          : "md:w-6 md:h-6 w-4 h-4 fill-gray-6"
                      }`}
                    />
                    <p
                      className={`hidden md:block ${
                        step > 2
                          ? "text-primary"
                          : step === 2
                          ? "text-base font-estedad-bold text-primary"
                          : ""
                      }`}
                    >
                      ارسال توسط پیک
                    </p>
                  </>
                ) : (
                  <>
                    <Box
                      className={`${
                        step > 2
                          ? " fill-primary md:w-6 md:h-6 w-4 h-4"
                          : step === 2
                          ? "fill-primary md:w-8 md:h-8 w-6 h-6 "
                          : "md:w-6 md:h-6 w-4 h-4 fill-gray-6"
                      }`}
                    />
                    <p
                      className={`hidden md:block ${
                        step > 2
                          ? "text-primary"
                          : step === 2
                          ? "text-base font-estedad-bold text-primary"
                          : ""
                      }`}
                    >
                      آماده تحویل
                    </p>
                  </>
                )}
              </div>

              <LineStatus
                className={`md:hidden block `}
                size={104}
                score={step > 2 ? 100 : step === 2 ? 50 : 0}
                id="m1"
              />
              <LineStatus
                className={`hidden md:block`}
                size={140}
                score={step > 2 ? 100 : step === 2 ? 50 : 0}
                id="d2"
              />

              <div className="flex justify-center items-center gap-1">
                <TickCircle
                  className={`${
                    step > 3
                      ? " fill-primary md:w-6 md:h-6 w-4 h-4"
                      : step === 3
                      ? "fill-primary md:w-8 md:h-8 w-6 h-6 "
                      : "md:w-6 md:h-6 w-4 h-4 fill-gray-6"
                  }`}
                />
                <p
                  className={`hidden md:block ${
                    step > 3
                      ? "text-primary"
                      : step === 3
                      ? "text-base font-estedad-bold text-primary"
                      : ""
                  }`}
                >
                  تحویل سفارش
                </p>
              </div>
            </div>
            {/*  */}

            <OrderItemsBox step={step} />
            <div className="flex justify-center md:justify-end mt-4 h-8 md:h-10">
              {step === 1 && (

                  <Button
                      className="w-24 md:w-32 font-estedad-regular"
                    style="stroke"
                    color="error"
                    onClick={() => {
                      setTarget(order);
                      openModal("confirm")
                    }}
                  >
                    لغو سفارش
                  </Button>

              )}
              {step === 3 && (
                  <Button  className="font-estedad-regular" style="stroke">سفارش مجدد</Button>
              )}
            </div>
          </div>
        );
      })}
      <div className="" dir="rtl">
        <Confirm
          title="لغو سفارش"
          actionText="لغو سفارش"
          action={() => {
            console.log(target);
          }}
        >
          آیا از لغو سفارش خود مطمئن هستید؟
        </Confirm>
      </div>
    </>
  );
}
