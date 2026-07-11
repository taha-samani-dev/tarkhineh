"use client";

import {changeFormatTime} from "./helper";
import Clock from "@/components/ui/icons/clock";

export function CodeInputForm({ref,code,handleChange,handleKeyDown,isValid,handlePaste,phoneEntered,time,verifyCode, editPhone,stop,resendCode}) {
  return (
      <div
          className={`absolute w-full duration-400 transition-all ease-in-out ${
              phoneEntered ? "" : "translate-x-full"
          }`}
      >
        <div
            dir="ltr"
            className={`flex justify-center items-center mt-5 sm:mt-6 mb-2 rounded-lg relative gap-2`}
        >
          {Array.from({length:5}).map((_, index) => (
              <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={(el)=>ref.current[index] = el}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  onChange={(e) =>  handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={(e) => handlePaste(e)}
                  className={`text-center outline-none  border border-gray-4 sm:w-14 sm:h-10 w-12 h-8 rounded-lg 
              ${ref.current[index]?.value ? "border-primary" : ""}
              ${isValid ? "" : "border-error!"}
              `}
              />
          ))}
        </div>
        <div className="flex justify-between mx-6 h-5.5 font-estedad-regular text-xs">
          <div className="flex justify-center items-center gap-1 text-gray-7">
            {stop || (
                <>
                  <div className="">
                    <Clock />
                  </div>
                  <div className="w-5">
                    {time.minutes}:{changeFormatTime(time.seconds)}
                  </div>
                  <p className="">تا دریافت مجدد کد</p>
                </>
            )}
            {stop && (
                <p
                    className="text-primary cursor-pointer"
                    onClick={resendCode}
                >
                  دریافت مجدد کد
                </p>
            )}
          </div>
          <div
              className="text-primary hover:text-shade-4 cursor-pointer"
              onClick={editPhone}
          >
            ویرایش شماره
          </div>
        </div>
        <div
            className={`h-8 sm:h-10 mx-6 my-5 bg-gray-3 rounded-lg cursor-pointer ${
                 code.length === 5 && "bg-primary hover:bg-shade-2"
            }`}
            onClick={verifyCode} // fix over click

        >
          <div className="flex justify-center items-center w-full h-full">
            <p
                className={`text-xs sm:text-base font-estedad-medium text-gray-4  ${
                    code.length === 5 && "text-white"
                }`}
            >
              ثبت کد
            </p>
          </div>
        </div>
      </div>
  );
}
