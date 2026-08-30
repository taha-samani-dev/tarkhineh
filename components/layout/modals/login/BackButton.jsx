"use client"

import ArrowLeft from "@/components/ui/icons/arrow-left";

export function BackButton({ onClick, className="w-6 h-6", isEnable }) {
    return (
        <div className={className}>
            {isEnable && (
                <div onClick={onClick}>
                    <ArrowLeft className={"rotate-180 fill-gray-7"} />
                </div>
            )}
        </div>
    )
}