import HeaderPicture from "../help/HeaderPicture";
import contactUs from "@/public/contact-us/cotactUs.jpg"
import x from "@/public/branches/ekbatan/main/ekbatan_main.jpg"
import Image from "next/image";
import Button from "@/components/ui/buttons/Button";
import AllPicBtn from "@/components/ui/icons/all-picture-btn";
const item = {id:0, label: "",headerLabel:"با ترخینه در تماس باشید.", name:"", picture:contactUs }
export default function page() {
  return (
  <div>
    <HeaderPicture categoryIndex={0} tabItems={[item]} />

    <div className="my-6 md:my-8 px-4 md:px-8 xl:px-27">
      <div className="gap-6 md:gap-8 flex flex-col">
        {Array.from({length:4}).map((i,index)=>{
          return (
          <div key={index} className="lg:[&_.caption_.button-container_div]:scale-0 md:hover:[&_.caption_.button-container_div]:scale-100 hover:shadow-cards-3 hover:shadow-gray-4 [&_.pic-box_div]:hidden lg:hover:[&_.pic-box_div]:flex cursor-grab flex flex-col lg:flex-row border border-gray-4 rounded-sm lg:h-60 xl:h-65 md:rounded-lg overflow-hidden">
            <div className={`pic-box md:h-full w-full lg:w-auto aspect-20/7  lg:aspect-14/7 xl:aspect-15/7 relative `}>
              <Image className="absolute object-cover " src={x} fill alt="5"/>
              <div className="absolute inset-0 justify-center items-center bg-black/60 w-full h-full btn-show-picture">
              <AllPicBtn className="fill-gray-1 cursor-pointer" />
              </div>
            </div>
            <div className={`caption flex w-full flex-col gap-4 md:gap-4 lg:gap-6 items-center justify-between my-3 md:my-4 lg:my-6 px-2 md:px-4 lg:px-6`}>
              <h2 className="w-full font-estedad-semi-bold sm:text-base text-sm md:text-xl text-center">شعبه چالوس</h2>
              <div className="space-y-2 leading-[140%] w-full text-[10px] text-gray-6 sm:text-sm md:text-sm font-estedad-regular text-center">
                <p className="">چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی</p>
                <div className="flex items-center justify-center w-full">
                  <p className="">شماره تماس:</p>
                  <p className="">۰۲۱-۵۴۸۹۱۲۵۲-۵۳</p>
                </div>
                <p className="">بجز روز‌های تعطیل ۱۲ تا ۲۳ ساعت کاری: همه‌روزه از ساعت</p>
              </div>
              <div className="button-container w-full items-center justify-center text-[10px] md:text-base flex gap-4">
                  <Button className="h-6 md:h-10 sm:h-8 sm:w-28 w-26 md:w-33 font-estedad-regular  duration-200 ease-in transition-all" style="stroke">
                    صفحه شعبه
                  </Button>
                  <Button className="h-6 font-estedad-regular md:h-10 sm:h-8 sm:w-28 w-26 md:w-33  duration-200 ease-in transition-all">
                    دیدن در نقشه
                  </Button>
              </div>
            </div>
          </div>
        )}
      )}
      </div>
    </div>

  </div>
  );
}
