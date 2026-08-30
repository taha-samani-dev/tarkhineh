"use client"

import ArrowLeft from "@/components/ui/icons/arrow-left"
import {usePathSegments} from "@/hooks/usePathSegments";
import {profileSidebarStore} from "@/store/ProfileSidebar.store";

const data = [
  {name:"پروفایل من", href:"information"},
  {name:"ویرایش اطلاعات شخصی", href:"edit"},
  {name:"سفارشات", href:"track-order"},
  {name:"علاقمندی‌ها", href:"favorite"},
  {name:"آدرس‌ها", href:"address"},
  {name:"خروج", href:"logout"},
]

export default function MainBoxProfile({children}) {
  const openSidebar = profileSidebarStore(s=>s.openSidebar)
  const {path} = usePathSegments();
  const activePage = data.find((i)=>{
    if(path[1]==="information"&& path.length===3){
      return i.href === path[2]
    }else{
      return i.href===path[1]
    }

  })
  return (
    <div className="lg:col-span-19 lg:py-6 pb-16 lg:border border-gray-4 rounded-lg min-h-80">

      <div className="lg:hidden flex justify-between items-center my-4 lg:my-6 lg:px-6 w-full">
        <div className="w-4 h-4 cursor-pointer" onClick={openSidebar}>
          <ArrowLeft className="fill-gray-8 w-4 h-4 rotate-180"/>
        </div>
        <h2 className="font-estedad-bold">{activePage.name}</h2>
        <div className="w-4 h-4"></div>
      </div>

      <h1 className="hidden lg:block lg:px-6 lg:pb-4 font-estedad-semi-bold text-xl">{activePage.name}</h1>
      <div className="px-6 w-full">
        <div className="bg-gray-4 w-full lg:h-[1]"></div>
      </div>
      {children}
    </div>
  )
}
