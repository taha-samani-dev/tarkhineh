"use client";
import Input from "@/components/ui/inputs/Input";
import Button from "@/components/ui/buttons/Button";
import Edit from "@/components/ui/icons/edit";
import dynamic from "next/dynamic";

const StaticMap = dynamic(() => import("../../maps/StaticMap"), { ssr: false });

export default function AddressFormStep({
  address,
  lat,
  lng,
  handleChange,
  setStep,
  onSubmit,
  onCancel,
}) {
  return (
    <div className="p-6 w-full h-dvh sm:h-full overflow-y-auto">
      <div className={`sm:hidden w-full h-64 pb-4`}>
        <StaticMap position={[lat ?? 0, lng ?? 0]} />
        <button
          className="-top-12 right-2 z-1020 relative flex justify-center items-center gap-2 bg-primary active:bg-shade-2 rounded-sm w-8 h-6 active:scale-110 targets-center"
          onClick={() => {
            setStep(1);
          }}
        >
          <Edit className={`w-4 h-4 fill-white`} />
        </button>
      </div>
      <div className="my-2 w-full h-8 sm:h-10">
        <Input
          name={"label"}
          placeholder="عنوان آدرس"
          value={address?.label || ""}
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
        />
      </div>

      <div
        className="flex gap-1 my-4 h-6 cursor-pointer targets-center"
        onClick={(e) => {
          handleChange("selfDelivery", !address.selfDelivery);
        }}
      >
        <div
          className={`w-4 h-4 rounded-xs border border-primary flex targets-center justify-center  ${
            address.selfDelivery && "bg-primary"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1839_45712)">
              <rect width="16" height="16" rx="2" />
              <path
                d="M6.50203 12C6.21978 12 5.93754 11.9034 5.71472 11.6964L3.32309 9.47477C2.8923 9.0746 2.8923 8.41225 3.32309 8.01207C3.75388 7.6119 4.46691 7.6119 4.8977 8.01207L6.50203 9.50237L12.1023 4.30013C12.5331 3.89996 13.2461 3.89996 13.6769 4.30013C14.1077 4.7003 14.1077 5.36266 13.6769 5.76283L7.28933 11.6964C7.06651 11.9034 6.78427 12 6.50203 12Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1839_45712">
                <rect width="16" height="16" rx="2" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="font-estedad-regular text-sm select-none">
          تحویل گیرنده خودم هستم
        </p>
      </div>

      <div className="space-y-2 my-2">
        {address.selfDelivery || (
          <div className="w-full h-8 sm:h-10">
            <Input
              placeholder="نام و نام‌خانوادگی تحویل گیرنده"
              name={"userName"}
              value={address?.userName || ""}
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>
        )}
        <div className="w-full h-8 sm:h-10">
          <Input
            placeholder={
              address.selfDelivery ? "شماره همراه" : "شماره همراه تحویل گیرنده"
            }
            name={"phone"}
            value={address?.phone || ""}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
      </div>

      <div
        className={`w-full h-25 sm:h-45 rounded-sm border border-gray-4 my-4`}
      >
        <textarea
          placeholder="آدرس دقیق شما"
          className="p-2 px-4 outline-none w-full font-estedad-regular text-sm resize-none"
          value={address?.textAddress || ""}
          name="textAddress"
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
        ></textarea>
      </div>

      <div className="flex justify-center gap-6 sm:gap-6 w-full h-8 sm:h-10 font-estedad-regular sm:font-estedad-medium text-xs sm:text-base leading-[120%] targets-center">
          <Button className="sm:hidden block w-full h-full text-center font-estedad-regular" style="textBTN" onClick={oncancel}>
            انصراف
          </Button>

          <Button
              className="hidden sm:block w-full h-full text-center font-estedad-regular"
            style="textBTN"
            onClick={() => {
              setStep(1);
            }}
          >
            ویرایش آدرس انتخابی
          </Button>

          <Button className="w-full h-full font-estedad-regular" onClick={onSubmit}>ثبت آدرس</Button>
      </div>
    </div>
  );
}
