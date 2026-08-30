'use client'

import CartBox from "@/components/cart/CartBox";
import Delivery from "@/components/cart/Delivery";
import EmptyCartBox from "@/components/cart/EmptyCartBox";
import FactorBox from "@/components/cart/FactorBox";
import Payment from "@/components/cart/Payment";
import StatusCart from "@/components/cart/StatusCart";
import { usePathSegments } from "@/hooks/usePathSegments";
import { useCartStore } from "@/store/Cart.store";
import { useState } from "react";

export default function Cart() {
    const [step , setStep] = useState(1)
  const address = [{}];
  const {currentBranch} = usePathSegments()
  const carts = useCartStore(s=>s.carts)
  const currentCart = carts[currentBranch.name] || []
  console.log(currentCart);
  return (
    <div>
      {/*status cart*/}
      <StatusCart step={step} />

      {/*box cart empty*/}
      {currentCart.length === 0 && <EmptyCartBox />}

      {/* main box cart */}
        {currentCart.length>0 &&(
            <div
                className={`w-full lg:h-146 mb-10 px-4 md:px-8 xl:px-27 grid grid-cols-12 gap-2 lg:gap-6`}
            >
                <div
                    className={`col-span-12 lg:col-span-7 w-full  lg:h-151 overflow-x-hidden overflow-y-auto transition-all ease-in-out duration-700  ${step === 1 ? "h-0 sm:h-115" : "h-100"}`}>
                    <div
                        className={`flex transition-all ease-in-out duration-700 h-full gap-[4%] ${step === 1 ? "sm:translate-x-[0%]" : step === 2 ? "sm:translate-x-[104%] translate-x-0" : step === 3 ? "translate-x-[104%] sm:translate-x-[208%]" : ""}`}>
                        {/* #step 1 */}
                        <CartBox items={currentCart} step={step}/>

                        {/* #step 2 */}
                        <Delivery address={address}/>

                        {/* #step 3 */}
                        <Payment/>
                    </div>

                </div>

                {/* invoice | factor #step all */}
                <FactorBox items={currentCart} setStep={setStep} step={step}/>
            </div>
        )}
    </div>
  );
}