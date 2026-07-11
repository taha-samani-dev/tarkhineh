"use client";

import dynamic from "next/dynamic";
import Location from "../ui/icons/locatin";
import { formatToPersian } from "@/lib/utils/NumberNormalize";
import Button from "../ui/buttons/Button";

const StaticMap = dynamic(() => import("../maps/StaticMap"), {
  ssr: false,
});

export default function DeliveryMethodPerson() {
  const address = {
    position: [35.68, 51.39],
    nameBranch: "اکباتان",
    textAddress: "اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف",
    phones: ["54891254", "54891255"],
    cityCode: "021",
    workingHours: "همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
  };
  return (
    <div
      className={`flex w-full border border-gray-4 rounded-lg md:px-4 md:py-4 px-4 py-2 justify-between font-estedad-regular gap-2`}
    >
      <div
        className={`md:max-w-full w-full md:w-auto  md:flex flex-col justify-between h-full`}
      >
        <div className="flex gap-1 py-2 border-gray-4 border-b md:border-none">
          <Location className="fill-gray-8 w-4 md:w-6 h-4 md:h-6" />
          <h2 className="text-gray-8 text-sm md:text-base">
            {"آدرس شعبه" + " " + address.nameBranch}
          </h2>
        </div>

        <div className="py-2 text-gray-7 text-xs">
          <p className="">{address.textAddress}</p>

          {address.phones.map((i, index) => (
            <p className="" key={index}>
              {"شماره تماس" +
                " " +
                formatToPersian((index + 1).toString()) +
                ":" +
                " "}
              <span className="" dir="ltr">
                {formatToPersian(address.cityCode) + "-" + formatToPersian(i)}
              </span>
            </p>
          ))}

          <p className="">{"ساعت کاری:" + " " + address.workingHours}</p>
        </div>

        <div className="hidden md:flex justify-center items-center w-full">
          <a href="#" >
            <Button className="w-38 font-estedad-regular" style="stroke">مشاهده در نقشه</Button>
          </a>
        </div>
      </div>
      <div className={`hidden md:flex w-80 lg:w-66 h-60 relative`}>
        <div className="-z-10 absolute inset-0 flex justify-center items-center bg-tint-1 rounded-lg w-full h-full">
          در حال بارگذاری نقشه...
        </div>
        <StaticMap position={address.position} />
      </div>
    </div>
  );
}
