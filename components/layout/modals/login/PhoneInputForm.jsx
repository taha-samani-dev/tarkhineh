"use client";

import Input from "@/components/ui/inputs/Input";
import Link from "next/link";

export default function PhoneInputForm({phoneEntered,phone, setPhone,checkPhone,enterPhone}) {
  return (
    <div
      className={`absolute w-full duration-400 transition-all ease-in-out ${
          phoneEntered ? "-translate-x-full" : ""
      }`}
    >
      <div className="mx-6 mt-3 sm:mt-6 mb-3">
      <Input 
      placeholder="شماره همراه" 
      name="phone"
      id="phone"
      dir="ltr"
      inputMode="numeric"
      maxLength={11}
      value={phone}
      onChange={(e)=>{
        setPhone(e.target.value.replace(/\D/g, ""))
      }}
      />

      </div>
      <div
        className={`h-10 mx-6 rounded-lg cursor-pointer ${
          checkPhone(phone) ? "bg-primary hover:bg-shade-2 [&_div_p]:text-white " : "[&_div_p]:text-gray-4 bg-gray-3"
        }`}
      >
        <div
          className="flex justify-center items-center w-full h-full"
          onClick={enterPhone}
        >
          <p className={`text-base font-estedad-medium`}>
            ادامه
          </p>
        </div>
      </div>
      <div className="flex mx-6 my-4">
        <div className="flex justify-center items-center w-full font-estedad-regular text-[10px] sm:text-xs">
          <p className="">ورود و عضویت در ترخینه به منزله</p>
          <Link href="/" className="text-primary">
            قبول قوانین و مقررات
          </Link>
          <p className=""> است.</p>
        </div>
      </div>
    </div>
  );
}
