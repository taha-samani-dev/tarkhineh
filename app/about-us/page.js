import aboutUs from "@/public/about-us/aboutUs.jpg"
import aboutPic from "@/public/about-us/aboutPic.jpg"
import HeaderPicture from "../help/HeaderPicture";
import Image from "next/image";
import {data} from "@/constans/constans";
const item = {id:0, label: "",headerLabel:"درباره ترخینه بیشتر بدانید!", name:"", picture:aboutUs }
const p0 = "رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت جلب رضایت مشتریان بوده است.رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند."
const p1 = "چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند."

export default function page() {
  const features= data.features
  return (
  <div>
    <HeaderPicture categoryIndex={0} tabItems={[item]} />
    <div className="md:my-10 my-4 px-4 md:px-8 xl:px-27 w-full">
      <p className="text-base md:text-2xl font-estedad-bold">
        درباره ما
      </p>
        <div className="font-estedad-regular my-4 gap4 text-[10px] sm:text-xs md:text-base lg:text-xl leading-[180%] xl:leading-[210%] text-justify">
          <div className="float-left  p-4 mr-3 mb-2 sm:mr-4  md:mr-6 md:mb-4 w-1/2 aspect-square relative rounded-sm md:rounded-lg overflow-hidden">
            <Image
              src={aboutPic}
              alt="about us"
              fill
              className="object-cover "
            />
          </div>

          <p className="">{p0}</p>
          <p className="">{p1}</p>
        </div>
    </div>
    <div className="w-full mt-4 md:mt-20 py-2 md:py-6 grid grid-cols-4 gap-1 text-gray-7 text-[10px] font-estedad-regular md:text-sm lg:text-lg justify-evenly bg-gray-3  md:h-30 lg:h-42">
      {features.map(({text,Icon},index)=>{
        return (
            <div key={index} className="flex md:gap-4 flex-col items-center justify-cente w-full first:border-r-0  md:border-r md:border-gray-4">
              <Icon className="fill-gray-8 w-4 sm:w-8 md:w-12  "/>
              <p className="text-wrap text-center leading-[180%]">{text}</p>
            </div>
        )
      })}
    </div>
  </div>
  );
}
