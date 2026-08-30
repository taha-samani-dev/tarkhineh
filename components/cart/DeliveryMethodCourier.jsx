import CloseCircle from "../ui/icons/close-circle";
import Edit2 from "../ui/icons/edit-2";
import { EmptyCard } from "../ui/icons/empty-card";
import Location from "../ui/icons/locatin";
import { Trash } from "../ui/icons/trash";
import {formatPhone} from "@/components/layout/modals/login/helper";
import React, {useState} from "react";
import AddressCard from "@/components/ui/AddressCard";
const addresses = [
    {id:1,textAddress:"تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",label:"محل کار",userName:"سردار وظیفه",phone:"09123456789",selfDelivery: true,lat: 36.726811911742125,lng: 53.80843877792359,},
    {id:2,textAddress:"تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",label:"محل کار",userName:"سردار وظیفه",phone:"09123456789",selfDelivery: true,lat: 36.726811911742125,lng: 53.80843877792359,},
]
export default function DeliveryMethodCourier({address}) {
    const [selectedAddress, setSelectedAddress] = useState(1);
    return (
    <div className={`flex flex-col h-71 lg:h-52 w-full border border-gray-4 rounded-lg xl:px-6 px-4 py-2`}>
        <div className={`flex justify-between items-center  border-b border-gray-4 py-2`}>
            <div className={`flex text-base font-estedad-regular text-gray-8 gap-1 items-center justify-center`}>
                <Location className={`w-6`}/>
                <p className={``}>ادرس ها</p>
            </div>
            <div className={`flex items-center justify-center font-estedad-regular text-xs text-primary `}>
                <CloseCircle className={`fill-primary w-4`}/>
                <p className={``}>افزودن آدرس</p>
            </div>
        </div>

        <div className={`w-full h-full grid grid-cols-2  items-center justify-center py-4 gap-2 xl:gap-6 overflow-y-auto`}>
            {address.length===0 && (
                <>
                <EmptyCard className={`w-33 h-32 inset-auto absolute`} />
                <p className={`text-sm font-estedad-regular z-50 text-gray-6`}>شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!</p>
                </>
            )}
            {address.length!==0 && (
                <>
                    {addresses.map((address, index) => (
                        <AddressCard address={address} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} selectedMod={true} key={address.id} />
                    ))}
                </>
            )}
        </div>
    </div>
  )
}
