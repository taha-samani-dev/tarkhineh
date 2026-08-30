import PaymentSuccessfull from "@/components/ui/icons/payment-successfull";
import PaymentUnsuccessfull from "@/components/ui/icons/payment-unsuccessfull";
import { formatToPersian } from "@/lib/utils/NumberNormalize";

export default function PaymentResult({ status = "success", transactionId }) {
  const isSuccess = status === "success";

  const title = isSuccess
    ? "پرداخت شما با موفقیت انجام شد!"
    : "پرداخت شما ناموفق بود!";

  const Icon = isSuccess ? PaymentSuccessfull : PaymentUnsuccessfull;
  const titleColor = isSuccess ? "text-primary" : "text-error";

  return (
    <div className="flex flex-col justify-center items-center p-8">
        <Icon className={`md:w-64 w-40 h-38 md:h-60 my-4`} />
        
        <h1 className={`${titleColor} font-estedad-bold text-base md:text-[40px] py-4`}>
            {title}
        </h1>

        <div className={`flex py-2 font-estedad-regular text-xs md:text-xl ${isSuccess && "text-primary"}`}>
            <h4>کد پیگیری تراکنش شما:</h4>
            <p>{" " + formatToPersian(transactionId || "—")}</p>
        </div>

        <div className="flex gap-2 md:gap-6 py-8 font-estedad-regular md:font-estedad-medium text-primary text-xs md:text-base">
            <button className={`border-primary rounded-sm w-36 md:w-46 h-8 md:h-10 text-center ${isSuccess && "border"}`}>
            بازگشت به صفحه اصلی
            </button>

            <button
            className={`w-36 md:w-46 h-8 md:h-10 text-center border border-primary rounded-sm ${
                isSuccess ? "bg-primary text-white" : ""
            }`}
            >
            پرداخت مجدد
            </button>
        </div>
    </div>
  );
}
