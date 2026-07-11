"use client"
import { EmptyCard } from "../ui/icons/empty-card";
import {usePathSegments} from "@/hooks/usePathSegments";
import Button from "@/components/ui/buttons/Button";
import Link from "next/link";

export default function EmptyCartBox() {
    const {currentBranch} = usePathSegments()
    return (
        <div className={`w-full md:h-105.5 h-94 mb-10 `}>

            <div className={`w-auto h-full mx-4 md:mx-8 xl:mx-27 border border-gray-4 rounded-lg relative flex items-center justify-center`}>

                <div className={`w-full h-full absolute inset-0 flex items-center justify-center z-0`}>
                    <EmptyCard className={`sm:w-81.25 sm:h-78.25 w-50 h-48 fill-gray-3`}/>
                </div>

                <h1 className={`font-estedad-regular align-middle z-10  text-sm sm:text-base md:text-xl text-gray-7`}>شما
                    در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
                </h1>

                <Link href={"/branches/" + currentBranch.name} className={'absolute bottom-30 flex items-center'}>
                    <Button style={'stroke'} className={'px-8 py-2 text-xs sm:text-sm md:text-base font-estedad-medium'}>
                        منوی رستوران
                    </Button>
                </Link>

            </div>
        </div>
    )
}
