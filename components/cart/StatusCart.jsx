'use client'
import { useEffect, useState } from "react";
import ShoppingCart from "../ui/icons/shopping-cart";
import { LineStatus } from "../ui/icons/line-status";
import { Tick } from "../ui/icons/tick";
import Wallet2 from "../ui/icons/wallet-2";

export default function StatusCart({step}) {
    const [progress, setProgress] = useState({
        line1Score: 0,
        line2Score: 0,
        icon2Active: false,
        icon3Active: false,
    });

    useEffect(() => {
        if (step === 1) {
            setProgress({ line1Score: 50, line2Score: 0, icon2Active: false, icon3Active: false });
        }
        if (step === 2) {
            setProgress(p => ({ ...p, line2Score: 0, icon2Active: false, icon3Active: false }));
            const interval1 = setInterval(() => {
                setProgress(p => {
                    if (p.line1Score < 100) {
                        return { ...p, line1Score: Math.min(p.line1Score + 10, 100) };
                    } else {
                        clearInterval(interval1);
                        return p;
                    }
                });
            }, 100); 
            const timer2 = setTimeout(() => {
                setProgress(p => ({ ...p, icon2Active: true }));
            }, 400); 
            const interval2 = setInterval(() => {
                setProgress(p => {
                    if (p.line2Score < 50) {
                        return { ...p, line2Score: Math.min(p.line2Score + 5, 50) };
                    } else {
                        clearInterval(interval2);
                        return p;
                    }
                });
            }, 250); 
            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearTimeout(timer2);
            };
        }
        if (step === 3) {
             setProgress(p => ({ ...p, line2Score: 50, icon3Active: false }));
            const interval3 = setInterval(() => {
                setProgress(p => {
                    if (p.line2Score < 100) {
                        return { ...p, line2Score: Math.min(p.line2Score + 5, 100) };
                    } else {
                        clearInterval(interval3);
                        return p;
                    }
                });
            }, 100);
            const timer3 = setTimeout(() => {
                setProgress(p => ({ ...p, icon3Active: true }));
            }, 400);
            return () => {
                clearInterval(interval3);
                clearTimeout(timer3);
            };
        }

    }, [step]);

    return (
        <>
        <div className="flex justify-center items-center gap-3 mx-4 my-10 h-10">

            <div className={`flex items-center gap-1 transition-all duration-500 ${step >= 1 ? "text-primary" : "text-gray-3"}`}>
                <div className="flex place-content-center w-8 h-8">
                    <ShoppingCart
                        className={`${step >= 1 ? "fill-primary" : "fill-gray-300"}  ${step===1?"w-8":"w-6"}  transition-all duration-500`}
                    />
                </div>
                <p className={`text-sm transition-all duration-500 ${step === 1 ? "font-estedad-bold text-base" : "font-estedad-regular"}`}>
                    سبد خرید
                </p>
            </div>

            <LineStatus id="1" size={100} score={progress.line1Score} className="w-20" />

            <div className={`flex items-center gap-1 transition-all duration-700 ${step>=2 ? "text-primary" : "text-gray-3"}`}>
                <div className="flex place-content-center w-8 h-8">
                    <Tick
                        className={`${progress.icon2Active ? "fill-primary" : "fill-gray-3"}  ${step===2?"w-8":"w-6"}  transition-all duration-700 ease-in-out`}
                    />
                </div>
                <p className={`text-sm transition-all duration-700 text-transparent bg-clip-text ${step===2 ? "font-estedad-bold text-base" : "font-estedad-regular"}
                    ${progress.icon2Active ? "bg-primary " : "bg-gray-3"}`}>
                    تکمیل اطلاعات
                </p>
            </div>

            <LineStatus id="2" size={100} score={progress.line2Score} className="w-20" />

            <div className={`flex items-center gap-1 transition-all duration-700 ${step===3? "text-primary" : "text-gray-3"}`}>
                <div className="flex place-content-center w-8 h-8">
                    <Wallet2
                        className={`${progress.icon3Active ? "fill-primary " : "fill-gray-3"}  ${step===3?"w-8":"w-6"}  transition-all duration-700 ease-in-out`}
                    />
                </div>
                <p className={`text-sm transition-all ease-initial duration-700 text-transparent bg-clip-text ${step===3? "font-estedad-bold text-base" : "font-estedad-regular"}
                    ${progress.icon3Active ? "bg-primary" : "bg-gray-3"}`}>
                    پرداخت
                </p>
            </div>
        </div>
        </>
    );
}
