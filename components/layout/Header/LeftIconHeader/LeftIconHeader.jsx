"use client";

import SearchNormal from "@/components/ui/icons/search-normal";
import ShoppingCart from "@/components/ui/icons/shopping-cart";
import User from "@/components/ui/icons/user";
import BoxIcon40 from "@/components/layout/Header/LeftIconHeader/BoxIcon40";
import ArrowDown from "@/components/ui/icons/arrow-down";
import Popup from "@/components/layout/Header/nav/Popup";
import {usePathSegments} from "@/hooks/usePathSegments";
import {useModal} from "@/store/Modal.store";
import {useAuth} from "@/store/Auth.store";
import {data} from "@/constans/constans";
import {usePath} from "@/hooks/usePath";
import {useRouter} from "next/navigation";

export default function LeftIconHeader() {
    const isAuthenticated = useAuth(s=>s["isAuthenticated"]);
    const openModal = useModal(s=>s.openModal)
    const {path,currentBranch,current} = usePathSegments();
    const setPayload = useModal(s=>s.setPayload)
    const router = useRouter()
    const profilePopup = data.profilePopup
    return (
        <div className="flex justify-end items-center gap-2 w-24 min-[1140]:w-38.5 h-13 transition-all duration-300 ease-in-out">

            <BoxIcon40 className={`cursor-pointer  duration-300 transition-all ease-in-out min-[1140]:block hidden ${path[0] === "search" ? "bg-primary [&_.search]:fill-white" : "bg-tint-1 [&_.search]:fill-primary"}`} href="" ariaLabel={"search"}>
                <SearchNormal className={`duration-300 transition-all search ease-in-out w-4 md:w-6`} onclick={()=>openModal("search")}/>
            </BoxIcon40>

            <BoxIcon40
                className={`duration-300 transition-all ease-in-out ${ current === "cart" ? "bg-primary [&_.shoppingCart]:fill-white" : "bg-tint-1 [&_.shoppingCart]:fill-primary"}`}
                ariaLabel={"Shopping Cart"}
                onClick={()=>{
                    if(currentBranch){
                        router.push(`/branches/${currentBranch.name}/cart`);
                    } else {
                        setPayload([{href: `/cart`, default :"/cart"}])
                        openModal("selectBranch")
                    }
                }}
            >
                    <ShoppingCart className={`duration-300 shoppingCart transition-all ease-in-out w-4 md:w-6`}/>
            </BoxIcon40>

            <BoxIcon40
                className={`cursor-pointer duration-300 transition-all [&_.popup]:hidden ease-in-out flex items-center gap-1 justify-center relative ${isAuthenticated ? "hover:[&_.popup]:block w-8.5 md:w-14.5 hover:[&_.arrowDown]:rotate-x-180 [&_.arrowDown]:rotate-x-0" :" [&_.arrowDown]:hidden"} ${path[0] === "profile" ? "bg-primary [&_.userIcon]:fill-white [&_.arrowDown]:fill-white " : "bg-tint-1 [&_.userIcon]:fill-primary [&_.arrowDown]:fill-primary"}`}
                ariaLabel={"Profile"}
                onClick={() => (!isAuthenticated && openModal("login"))}>
                <User className={`duration-300 userIcon transition-all ease-in-out w-4 md:w-6`}/>
                <ArrowDown className={`duration-300 arrowDown transition-all ease-in-out w-2 h-2 md:w-4 md:h-4`}/>
                <Popup className="top-7 md:top-10.5 left-0 z-10 absolute bg-white shadow-popup mx-auto rounded-sm w-38 h-auto font-estedad-regular text-black popup" data={profilePopup} />
            </BoxIcon40>

        </div>
    );
}
