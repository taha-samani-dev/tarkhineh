"use client"

import BtnClose from "@/components/ui/icons/btn-close";

export function CloseButton({onClick}) {
    return (
        <div
            className="flex justify-center items-center w-6 h-6 cursor-pointer"
            onClick={onClick}>
            <BtnClose className="w-0.5! h-4!" />
        </div>
    )
}