"use Client"
import {useState} from 'react'
import DiscountShape from '../ui/icons/discount-shape'
import WalletMoney from '../ui/icons/wallet-money'
import CardPos from '../ui/icons/card-pos'
import Wallet2 from '../ui/icons/wallet-2'
import Card from '../ui/icons/card'
import Warning2 from '../ui/icons/warning-2'
import SelectMethodBox from "@/components/cart/SelectMethodBox";
import Image from "next/image";


export default function Payment() {
    const [paymentGateway, setPaymentGateway] = useState("saman");
    const [paymentMethod, setPaymentMethod] = useState("internet")
    const PaymentData= {
        label:"روش پرداخت",
        Icon:WalletMoney,
        option : [
            {Icon:CardPos,name:"internet",label:"پرداخت اینترنتی",description:"توسط پیک رستوران ارسال شود."},
            {Icon:Wallet2,name:"AtHome",label:"پرداخت در محل",description:"توسط پیک رستوران ارسال شود."},
        ]
    }
    const paymentGateways = [
        {name:"saman", picture:"/banks-payment/saman.jpg"},
        {name:"mellat", picture:"/banks-payment/mellat.jpg"},
        {name:"parsian", picture:"/banks-payment/parsian.jpg"},
    ]
    return (
        <div className={`min-w-full  px-1 flex gap-2 md:gap-6 flex-col font-estedad-regular`}>
            <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-8 px-2 py-2 border border-gray-4 rounded-lg w-full md:h-22">
                <div className="flex gap-2 pb-2 border-gray-4 border-b md:border-none">
                    <DiscountShape className={`w-6 h-6 fill-gray-8`}/>
                    <p className="md:text-base">ثبت کد تخفیف</p>
                </div>
                <div className="flex gap-4 md:gap-6 md:p-0 py-1 max-w-full">
                    <input className='px-4 border border-gray-4 rounded-sm outline-none w-48 md:w-auto h-8 md:h-10 text-xs md:text-sm' placeholder='کد تخفیف' type="text" />
                    <button className="bg-gray-4 px-2 md:px-4 py-2 rounded-sm h-8 md:h-10 text-[10px] text-white md:text-base">ثبت کد</button>
                </div>
            </div>
            <SelectMethodBox data={PaymentData} method={paymentMethod} setMethod={setPaymentMethod} />

            {paymentMethod==="internet"  && (
                <div className="flex md:flex-row flex-col gap-2 p-2 md:p-4 border border-gray-4 rounded-lg w-full">
                <div className="flex items-center gap-2 pt-4 pb-4 border-gray-4 border-b md:border-none w-full md:w-34 h-6 font-estedad-regular text-gray-8">
                    <Card className={`w-4 h-4 md:w-6 md:h-6 fill-gray-8`}/>
                    <h3 className="font-estedad-regular text-sm md:text-base">درگاه پرداخت</h3>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-center md:justify-start items-center gap-4">
                        {paymentGateways.map(({name, picture}, index)=> (
                            <div key={index} className={`relative active:scale-105 transition-all duration-300 ease-out border rounded-sm w-16 sm:w-24 h-16 sm:h-24 cursor-pointer ${paymentGateway===name?"border-primary":"border-gray-4 scale-95"}`} onClick={()=>setPaymentGateway(name)}>
                                <Image className='rounded-sm object-cover' fill src={picture} alt={`bank ${name}`}/>
                            </div>
                        ))}
                        
                    </div>
                    <div className="">
                        <h4 className="text-[10px] text-gray-7 md:text-xs text-center">پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌</h4>   
                        <p className="text-[10px] text-gray-7 text-center">(لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)</p>
                    </div>
                </div>

                </div>
            )}

            {paymentMethod==="AtHome" && (
                <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-6 bg-gray-1 px-2 md:px-4 py-2 md:py-8 border border-gray-4 rounded-lg w-full">
                    <div className="flex gap-2 py-2 border-gray-4 border-b md:border-none">
                        <Warning2 className={`fill-gray-7 md:w-6 md:h-6 w-4 h-4`}/>
                        <h4 className="text-sm md:text-base whitespace-nowrap">قابل توجه</h4>
                    </div>
                    <p className="text-[10px] text-gray-7 leading-[180%]">
                        هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
                    </p>
                </div>
            )}

        </div>
  )
}