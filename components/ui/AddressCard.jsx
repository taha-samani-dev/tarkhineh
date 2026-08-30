"use client"

import Edit2 from "@/components/ui/icons/edit-2";
import {Trash} from "@/components/ui/icons/trash";
import {formatPhone} from "@/components/layout/modals/login/helper";
import {formatToPersian} from "@/lib/utils/NumberNormalize";

export default function AddressCard({address, selectedAddress=null, setSelectedAddress=null, selectedMod=false, onEdite=null, onDelete=null}) {
    const active = selectedAddress===address.id
    return (
        <div className={`flex flex-col justify-between space-y-1 col-span-2 lg:col-span-1 px-4 py-1 border rounded-lg  min-h-16 max-h-26 transition-all duration-300 ease-in-out ${selectedMod?"cursor-pointer  active:scale-98":""} ${active && selectedMod ?"bg-tint-1":"bg-gray-1"} ${active?"border-primary":"border-gray-4"}`} onClick={()=>{selectedMod && setSelectedAddress(address.id)}} >
            <div className="flex justify-between gap-2 my-1">
                <p className="font-estedad-regular text-[10px] sm:text-sm line-clamp-2 leading-[180%]">
                    {address.textAddress}
                </p>
                <div className="flex justify-center gap-4 h-6">
                    <button
                        className="flex place-content-center hover:bg-tint-1 rounded-sm w-6 sm:w-8 h-6 sm:h-8 active:scale-95 cursor-pointer"
                        onClick={onEdite}
                    >
                        <Edit2 className="fill-gray-8 hover:fill-primary w-4 sm:w-6" />
                    </button>
                    <button
                        className="flex place-content-center hover:bg-tint-1 rounded-sm w-6 sm:w-8 h-6 sm:h-8 active:scale-95 cursor-pointer"
                        onClick={onDelete}
                    >
                        <Trash
                            className={`sm:w-6 w-4 fill-gray-8 hover:fill-error`}
                        />
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-end font-estedad-regular text-[10px] text-gray-7 md:text-sm">
                <p className="w-13">{address.label}</p>
                <p className="text-center">{address.userName}</p>
                <p
                    className="w-21 font-estedad-fd-regular text-[8px] sm:text-xs"
                    dir="ltr"
                >
                    {formatPhone(formatToPersian(address.phone))}
                </p>
            </div>
        </div>
    )
}