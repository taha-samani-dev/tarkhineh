"use client"
import Link from "next/link";
import user from "@/public/users/defaltUser.png"
import { formatPhone } from "../layout/modals/login/helper";
import { formatToPersian } from "@/lib/utils/NumberNormalize";
import User from "../ui/icons/user";
import Wallet2 from "../ui/icons/wallet-2";
import Wallet2Solid from "../ui/icons/wallet-Solid";
import UserSolid from "../ui/icons/user-solid";
import HeartSolid from "../ui/icons/heart-solid";
import LocationSolid from "../ui/icons/location-solid";
import LogoutSolid from "../ui/icons/logout-solid";
import Logout from "../ui/icons/logout";
import Heart from "../ui/icons/heart";
import Image from "next/image";
import Location from "../ui/icons/locatin";
import {usePathSegments} from "@/hooks/usePathSegments";
import {profileSidebarStore} from "@/store/ProfileSidebar.store";


const deactivate = "w-4 h-4 fill-primary"
const active = "w-5 h-5 fill-primary"
const profileLinks = [
    {label:"پروفایل",icon:<User className={deactivate}/>,iconSolid:<UserSolid className={active}/>,href:"information"},
    {label:"پیگیری سفارشات",icon:<Wallet2 className={deactivate}/>,iconSolid:<Wallet2Solid className={active}/>,href:"track-order"},
    {label:"علاقمندی‌ها",icon:<Heart className={deactivate}/>,iconSolid:<HeartSolid className={active}/>,href:"favorite"},
    {label:"آدرس‌های من",icon:<Location className={deactivate}/>,iconSolid:<LocationSolid className={active}/>,href:"address"},
    {label:"خروج",icon:<Logout className={deactivate}/>,iconSolid:<LogoutSolid className={active}/>,href:"logout"},
]


export default function SidebarProfile() {
    const closeSidebar = profileSidebarStore(s=>s.closeSidebar)
    const sidebarOpen = profileSidebarStore((s=>s.sidebarOpen))

    const {path} = usePathSegments();
    const activePath = path.length===3 && path[2]==="edit"?"information":path[1]
    const indexActive = profileLinks.findIndex((i)=>activePath===i.href)
    return (
        <div className={`top-[59] md:top-[110] left-0 z-70 lg:z-60 lg:static fixed flex flex-col gap-2 col-span-6 bg-white px-5 lg:px-2 py-4 lg:border border-gray-4 rounded-lg w-full lg:h-86 h-full font-estedad-regular duration-500 transition-all ease-in-out ${!sidebarOpen && "translate-x-full lg:translate-x-0"}`}>

            <div className="flex gap-4 xl:gap-8 w-full h-12 lg:h-22">
                <div className="relative border border-gray-4 rounded-full w-12 lg:w-22 h-full">
                    <Image src={user} fill className="object-cover" alt="user"/>
                </div>
                <div className="flex flex-col justify-evenly">
                    <p className="justify-self-center text-sm lg:text-base">کاربر ترخینه</p>
                    <p className="justify-self-end font-estedad-fd-regular text-[10px] text-gray-7 lg:text-xs" dir="ltr">{formatPhone(formatToPersian("09148643350"))}</p>
                </div>
            </div>

            <div className="bg-primary rounded-xl w-full h-[1]"></div>

            <div className="relative flex flex-col gap-1 text-sm">
                <div className={`absolute  lg:w-[3] lg:rounded-l-xl w-[2] h-9.5 bg-primary rounded-l-sm right-0 duration-500 ease-in-out transition-all`} style={{ top: `${43 * indexActive}px` }}></div>
                {profileLinks.map(({label, icon,iconSolid,href}, index)=>(
                    <div className="flex items-center pr-1 w-full h-9.5 hover:text-primary hover:scale-96 transition-all duration-500 ease-in-out" key={index}>
                        <Link href={`/profile/${href}`} className="flex items-center gap-1 w-full h-5.5"
                              onClick={closeSidebar}>
                            <span className="flex justify-center items-center w-5 h-5">{activePath===href?iconSolid:icon}</span>
                            <span className={`${activePath===href?"text-base text-primary":"text-sm"} `}>{label}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
