'use client'
import { addSeparator, formatToPersian } from "@/lib/utils/NumberNormalize";
import { Trash } from "../ui/icons/trash";
import FactorCartBox from "./FactorCartBox";
import { Warning } from "../ui/icons/warning";
import Button from "../ui/buttons/Button";
import { useAuth } from "@/store/Auth.store";
import ArrowLeft from "../ui/icons/arrow-left";
import { useModal } from "@/store/Modal.store";
import TickCircle from "../ui/icons/tick-circle";
import Card from "../ui/icons/card";
import {useCartStore} from "@/store/Cart.store";
import {usePathSegments} from "@/hooks/usePathSegments";

export default function FactorBox({items, step,className="", setStep}) {
    const isAuthenticated = useAuth(s=>s.isAuthenticated)
    const openModal = useModal(s=>s.openModal)
    const clearCart = useCartStore(s=>s.clearCart)
    const {currentBranch} = usePathSegments()
  return (
        <div className={`lg:col-span-5 px-1 col-span-12 h-full ${className}`} >
            <div className={`w-full rounded-lg border border-gray-4 p-2 pt-0 md:p-6`}>
                
                {/**/}
                    <div className={`hidden sm:flex w-full items-center justify-between border-b border-gray-4 h-0 sm:h-8 place-content-center  pb-4`}>
                        <div className={`flex transition-all duration-500 ease-in-out overflow-hidden font-estedad-regular text-gray-8 items-center justify-between gap-1`}>
                            <p className={`text-base`}>سبد خرید</p>
                            <p className={`text-sm`}>(4)</p>
                        </div>
                        <div className={`hidden md:flex`} onClick={()=>(clearCart(currentBranch.name))}>
                            <Trash className={"flex place-content-center cursor-pointer w-8 h-8 p-1 fill-error bg-error-extralight rounded-lg hover:bg-error-light/50 overflow-hidden"}/>
                        </div>
                    </div>
                    {/* food cart in factor */}
                    <div className={`${step===1?"h-46 sm:h-0 border-b p-2 sm:p-0 sm:border-none":'sm:h-46 p-0 sm:-2 border-none sm:border-b h-0'} flex overflow-hidden w-full items-center justify-between  transition-all duration-1000 ease-in-out border-gray-4`}>
                        <div className={`w-full h-full overflow-y-auto`} dir="ltr">
                            <FactorCartBox items={items} />
                        </div>
                    </div>
                {/**/}
                <div className={`flex font-estedad-regular text-sm py-4 border-b border-gray-4 px-1 items-center justify-between`}>
                    <p className={``}>تخفیف محصولات</p>
                    <div className={`flex gap-1 text-gray-7`}>
                        <span>{addSeparator(formatToPersian('60000'))}</span>
                        <p>تومان</p>
                    </div>
                </div>
                {/**/}
                <div className={`font-estedad-regular flex flex-col gap-2 py-4 border-b border-gray-4`} >
                    <div className={`flex items-center justify-between text-sm `}>
                        <p className={``}>هزینه ارسال</p>
                        <div className={`flex gap-1 text-gray-7`}>
                            <span className={`font-estedad-fd-regular`}>{addSeparator(formatToPersian('0'))}</span>
                            <p>تومان</p>
                        </div>
                    </div>
                    <div className={`flex gap-2`}>
                        <Warning className={``}/>
                        <p className={`text-[10px] text-warning leading-[180%]`}>هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
                    </div>
                </div>
                {/**/}
                <div className={`font-estedad-regular flex items-center justify-between py-4`}>
                    <p className={`text-sm`}>مبلغ قابل پرداخت</p>
                    <div className={`flex gap-1 text-primary`}>
                        <span className={`font-estedad-fd-regular`}>{addSeparator(formatToPersian('542000'))}</span>
                        <p>تومان</p>
                    </div>
                </div>
                {/**/}
                {!isAuthenticated && step===1 && (
                    <Button className={`w-full`} onClick={()=>openModal('login')} >
                        ورود/ثبت‌نام
                    </Button>
                )}
                {isAuthenticated && step===1 && (
                    <Button className={`w-full`} onClick={()=>setStep(2)} iconLeft={<ArrowLeft className="fill-white w-6 h-6"/>}>
                       تکمیل اطلاعات
                    </Button>
                )}
                {step===2 && (
                    <Button className="w-full" onClick={()=>setStep(3)} iconRight={<TickCircle className={`w-6 h-6 fill-white`}/>}>
                        ثبت سفارش
                    </Button>
                )}
                {step===3 && (
                    <Button className="w-full" onClick={()=>setStep(3)} iconRight={<Card className={`w-6 h-6 fill-white`}/>}>
                        تایید و پرداخت
                    </Button>
                )}
            </div>
        </div>
  )
}
