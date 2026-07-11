
import { formatPhone } from "./helper";
export default function LegendForm({phone,phoneEntered}) {
  return (
    <>
      <div
        className={`h-[29] w-full font-estedad-regular text-sm sm:text-base text-gray-8 flex justify-center items-center px-4`}
      >
        <p
          className={`absolute w-full text-center transition-all duration-400 ease-in-out ${
              phoneEntered ? "" : "translate-x-full"
          }`}
        >
          کد تایید
        </p>

        <p
          className={`absolute w-full text-center transition-all duration-400 ease-in-out ${
              phoneEntered ? "-translate-x-full" : ""
          }`}
        >
          ورود / ثبت ‌نام
        </p>
      </div>
      <div
        className={`h-[22] sm:mt-0 mt-2   font-estedad-regular text-xs text-gray-7 flex justify-center items-center`}
      >
        <p
          className={`absolute w-full text-center  transition-all duration-400 ease-in-out  px-4 ${
              phoneEntered ? "" : "translate-x-full"
          }`}
        >
          کد تایید پنج‌رقمی به شماره
          <span dir="ltr">{" " +  formatPhone(phone) + " "}</span>ارسال شد.
        </p>

        <p
          className={`absolute w-full text-center  transition-all duration-400 ease-in-out px-4 ${
              phoneEntered ? "-translate-x-full" : ""
          }`}
        >
          با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
        </p>
      </div>
    </>
  );
}
