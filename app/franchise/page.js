import franchise from "@/public/franchise/franchise.jpg"
import HeaderPicture from "../help/HeaderPicture";
import Bank from "@/components/ui/icons/bank";
import Book from "@/components/ui/icons/book";
import Chart from "@/components/ui/icons/chart";
import EmptyWallet from "@/components/ui/icons/empty-wallet";
import Input from "@/components/ui/inputs/Input";
import Button from "@/components/ui/buttons/Button";
import Upload from "@/components/ui/icons/upload";

const item = {id:0, label: "",headerLabel:"همین الان به خانواده بزرگ ترخینه بپیوندید!", name:"", picture:franchise }
const feachers = [
  {
    label: "بیش از 20 شعبه فعال در سراسر کشور",
    Icon:Bank
  },
  {
    label: "تسهیلات راه‌اندازی رستوران و تجهیز آن",
    Icon:EmptyWallet
  },
  {
    label: "طرح‌های تشویقی ارتقای فروش",
    Icon:Chart 
  },
  {
    label: "اعطای دستورالعمل پخت غذاها",
    Icon:Book
  },
]
const terkhinehBenefits = [
  "مشاوره در امور حقوقی، مالی و مالیاتی",
  "استفاده از برند شناخته شده ترخینه",
  "پشتیبانی بازاریابی و منابع انسانی",
  "به حداقل رساندن ریسک سرمایه گذاری",
  "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
  "تسریع روند بازگشت سرمایه",
  "طرح های تشویقی برای ارتقا فروش",
  "مشاوره های تخصصی جهت مدیریت رستوران"
];

export default function page() {
  return (
  <div className="">
    <HeaderPicture categoryIndex={0} tabItems={[item]} />
    <div className=" px-4 md:px-8 xl:px-27">
      <div className="flex flex-wrap my-6 md:my-8 lg:my-12 w-full justify-center gap-y-4 gap-x-2 md:gap-12">
        {feachers.map(({label, Icon}, index) => (
          <div key={index} className="flex flex-col md:w-46 md:h-55 w-32 gap-2 md:gap-4 justify-between items-center">
            <div className="md:w-35 md:h-35 h-16 w-16 rounded-full border-4 border-primary flex items-center justify-center">
              <Icon className="md:w-20 md:h-20 w-10 h-10 fill-primary" />
            </div>
            <p className="md:text-lg text-xs sm:text-base text-center text-wrap font-estedad-regular ">{label}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex h-px bg-gray-4"></div>
      <div className="my-6 md:my-8 lg:my-12">
        <p className="md:text-xl sm:text-lg text-base  w-full text-center font-estedad-bold mb-6">مزیت دریافت نمایندگی</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-200 gap-x-8 gap-y-4 mx-auto text-xl font-estedad-regular">
          {terkhinehBenefits.map((text, index) =>{
            return (
              <div key={index} className="flex items-center justify-start gap-y-1 gap-x-2">
                <div className="w-4 h-4 rounded-sm border-2 border-primary rotate-45"></div>
                <p className="md:text-lg text-xs sm:text-base font-estedad-regular">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full flex h-px bg-gray-4"></div>
      <div className="my-6 md:my-8 lg:my-10">
        <p className="md:text-xl sm:text-lg text-base  w-full text-center font-estedad-bold mb-6">دریافت مشاوره</p>
        <form className="mx-auto flex gap-y-8 flex-col">
          <div className="grid grid-cols-1 max-w-70 w-full sm:max-w-120 md:max-w-360 md:w-full gap-y-4 justify-center mx-auto md:grid-cols-3 gap-x-4">
            <Input id={'fullName'} placeholder="نام و نام‌خانوادگی"  name={'fullName'} />
            <Input id={'phoneNumber'} placeholder="شماره تماس"  name={'phoneNumber'} />
            <Input id={'time'} placeholder="زمان ایده‌آل"  name={'time'} />
          </div>

            <Button className="md:w-37 md:text-base text-xs w-32 h-8 md:h-10 mx-auto font-estedad-regular">درخواست مشاوره</Button>

        </form>
      </div>
      <div className="w-full flex h-px bg-gray-4 my-6 md:my-8 "></div>
      <div className="w-full border border-gray-4 rounded-sm md:rounded-lg my-8 px-6">
          <p className="md:text-xl sm:text-lg text-base lg:text-2xl w-full text-center font-estedad-bold my-6 md:my-10">فرم درخواست نمایندگی</p>

          <p className="text-sm md:text-lg font-estedad-regular text-gray-8">مشخصات فردی متقاضی</p>
          <div className="grid grid-cols-1 max-w-70 w-full sm:max-w-120 md:max-w-360 md:w-full gap-y-4 justify-center mx-auto md:grid-cols-3 gap-x-4 my-6">
            <Input id={'fullName'} placeholder="نام و نام‌خانوادگی"  name={'full_name'} />
            <Input id={'nationalCode'} placeholder="کد ملی"   name={'national_code'} />
            <Input id={'phoneNumber'} placeholder="شماره تماس"  name={'phone_number'} />
          </div>

          <p className="text-sm md:text-lg font-estedad-regular text-gray-8">آدرس ملک متقاضی</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-full md:max-w-150 lg:max-w-full w-full mx-auto  lg:grid-rows-3 gap-4 h-96 md:h-112 lg:h-38 my-6">
            <div className=" col-span-1">
            <Input id={'phoneNumber'} placeholder="استان"  name={'province'} />
            </div>
            <div className=" col-span-1">
            <Input id={'phoneNumber'} placeholder="شهر"  name={'city'} />
            </div>
            <div className=" col-span-1 row-span-3 lg:order-0 order-2 bg-amber-200">
            </div>
            <div className=" col-span-1 row-span-1">
              <Input id={'phoneNumber'} placeholder="منطقه"  name={'area'} />
            </div>
            <div className=" col-span-1 row-span-2">
            <Input id={'phoneNumber'} placeholder="آدرس دقیق"  name={'exact_address'} />
            </div>
          </div>

          <p className="text-sm md:text-lg font-estedad-regular text-gray-8">مشخصات ملک متقاضی</p>
          <div className="grid grid-cols-1 max-w-70 w-full sm:max-w-120 md:max-w-360 md:w-full gap-y-4 justify-center mx-auto md:grid-cols-3 gap-x-4 my-6">
            <Input id={'fullName'} placeholder="نوع مالکیت"  name={'type_of_ownership'} />
            <Input id={'nationalCode'} placeholder="مساحت ملک (متر مربع)"   name={'Property_areaarea'} />
            <Input id={'phoneNumber'} placeholder="سن بنا"  name={'age_area'} />
          </div>

          <p className="text-sm md:text-lg font-estedad-regular text-gray-8 my-4">امکانات ملک متقاضی</p>
          <div className="grid grid-cols-1 md:grid-cols-2 my-2 ">
            <div className="">
              <p className="text-sm md:text-base font-estedad-regular text-gray-8">ملک متقاضی:</p>
              <div className="gap-y-4 sm:w-100 w-75 gap-x-8 mt-6 grid grid-cols-2 grid-rows-2" >
                <div className="flex gap-1 sm:w-40 w-35 h-6 items-center hover:bg-tint-1 rounded-lg px-1">
                  <input className="align-middle" type="checkbox" id="business_license" name="business_license" />
                  <label className="cursor-pointer select-none w-full text-sm mb-0.5" htmlFor="business_license">پروانه کسب دارد.</label>
                </div>
                <div className="flex gap-1 sm:w-40 w-35 h-6 items-center hover:bg-tint-1 rounded-lg px-1">
                  <input className="align-middle" type="checkbox" id="kitchen" name="kitchen" />
                  <label className="cursor-pointer select-none w-full text-sm mb-0.5" htmlFor="kitchen">آشپزخانه دارد.</label>
                </div>
                <div className="flex gap-1 sm:w-40 w-35 h-6 items-center hover:bg-tint-1 rounded-lg px-1">
                  <input className="align-middle" type="checkbox" id="parking" name="parking" />
                  <label className="cursor-pointer select-none w-full text-sm mb-0.5" htmlFor="parking">پارکینگ دارد.</label>
                </div>
                <div className="flex gap-1 sm:w-40 w-35 h-6 items-center hover:bg-tint-1 rounded-lg px-1">
                  <input className="align-middle" type="checkbox" id="warehouse" name="warehouse" />
                  <label className="cursor-pointer select-none w-full text-sm mb-0.5" htmlFor="warehouse">انبار دارد.</label>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm md:text-base font-estedad-regular text-gray-8">تصاویر ملک</p>
              <div className="flex justify-center items-center h-48 border-2 border-gray-4 rounded-sm" >
              <div className="flex justify-center items-center flex-col w-full h-full gap-1">
                <Upload className="fill-primary w-16 h-16 "/>
                <p className="w-full flex justify-center">تصاویری از ملک را بارگذاری کنید...</p>
              </div>
              </div>
            </div>
          </div>

            <Button className="w-46 mx-auto my-6 h-8 md:h-10 font-estedad-regular">ثبت اطلاعات</Button>
      </div>
    </div>
  </div>
);
}

