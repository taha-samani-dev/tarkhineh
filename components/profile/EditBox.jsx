"use client"
import Button from "@/components/ui/buttons/Button"
import Input from "@/components/ui/inputs/Input"
import Link from "next/link"
import { useState } from "react"

export default function EditBox() {
const HBD = (      
    <span className="flex items-center gap-0.5">
      <p className="text-[10px] md:text-xs">تاریخ تولد</p>
      <p className="text-[10px]">(اختیاری)</p>
    </span>
  )
  const name = useState("طاها")
  const lastName = useState("سامانی")
  const email = useState("tahasamaniss@gmail.com")
  const phone = useState("09922506099")
  const hbd = useState("25/08/1383")
  const nickName = useState("tss") 
  return (
  <form action={"post"} className="md:flex flex-wrap justify-center justify-items-center md:content-start gap-x-4 gap-y-4 md:gap-y-6 grid grid-cols-1 lg:py-12 pb-4 lg:h-150">
    <div className="w-74 md:w-84 lg:w-80 xl:w-90">
    <Input valueState={name} placeholder="نام" />
      
    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90">
    <Input valueState={lastName} placeholder="نام خانوادگی " />

    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90">
    <Input valueState={email} type="email" dir={`ltr`} placeholder="آدرس ایمیل" />

    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90">
    <Input valueState={phone} placeholder="شماره همراه" dir={`ltr`} />

    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90">
    <Input valueState={hbd} placeholder={HBD} />

    </div>
    <div className="w-74 md:w-84 lg:w-80 xl:w-90">
    <Input valueState={nickName} placeholder="نام نمایشی" />

    </div>
    <div className="flex justify-center md:justify-end gap-2 mx-auto w-74 md:w-172 lg:w-164 xl:w-184">
      <Link href={'/profile/information'}>
        <Button className="flex font-estedad-regular justify-center" style="stroke" >
        انصراف 
        </Button>
      </Link>
      <Link href={'/profile/information'} >
        <Button className="font-estedad-regular" type="submt" onClick={(e)=>{console.log(e)}} >ذخیره اطلاعات</Button>
      </Link>
      
    </div>

  </form>)
}
