import Button from "@/components/ui/buttons/Button";
import CardPos from "@/components/ui/icons/card-pos";
import Edit from "@/components/ui/icons/edit";
import Input from "@/components/ui/inputs/Input";
import Link from "next/link";

export default function page() {
  const HBD = (      
    <span className="flex items-center gap-0.5">
      <p className="text-[10px] md:text-xs">تاریخ تولد</p>
      <p className="text-[10px]">(اختیاری)</p>
    </span>
  )
  return (
  <div className="md:flex grid grid-cols-1 justify-items-center gap-x-4 gap-y-2  md:gap-y-6 flex-wrap md:content-start justify-center pb-4 lg:py-12 lg:h-150">
    <div className="w-74 md:w-84 lg:w-80 xl:w-90 ">
    <Input disabled valueState={["طاها",null]} placeholder="نام" />
      
    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90 ">
    <Input disabled valueState={["",null]} placeholder="نام خانوادگی " />

    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90 ">
    <Input disabled valueState={["",null]} placeholder="آدرس ایمیل" />

    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90 ">
    <Input disabled valueState={["09922506099",null]} placeholder="شماره همراه" dir={`ltr`} />

    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90 ">
    <Input disabled valueState={["",null]} placeholder={HBD} />

    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90 ">
    <Input disabled valueState={["",null]} placeholder="نام نمایشی" />

    </div>
        <Link href={'/profile/information/edit'}>
        <Button  className="w-74 md:w-84 lg:w-80 xl:w-90 flex justify-center font-estedad-regular" style="stroke" iconRight={<Edit className={`w-4 h-4 fill-primary md:w-6 md:h-6`}/>}>
        ویرایش اطلاعات شخصی
        </Button>
        </Link>
  </div>)
}
