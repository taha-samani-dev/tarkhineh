"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Tik from '../icons/tik'
import ArrowLeft from '../icons/arrow-left'
import { useSearchParams } from 'next/navigation'



export default function ChipsButton({children, category, setCategory ,continuedParam="", paramName="category"}) {
    const path = useSearchParams()
    const isActive = category===path.get(paramName)
    const href = continuedParam===""?`?${paramName}=${category}`:`?${paramName}=${category}&${continuedParam}`
    return (
        <Link
            href={href}
            onClick={(e)=>{
                setCategory(category)
            }}
            className="z-10 relative flex justify-center items-center gap-1 lg:gap-1 bg-gray-3 lg:hover:bg-gray-4 px-2 rounded-lg lg:rounded-[64px] w-auto h-6 md:h-8 overflow-hidden font-estedad-regular transition-all duration-500 ease-in-out"
            >
            <div className={`-z-10 absolute rounded-[64] scale-0 w-full aspect-5/4 transition-transform duration-500  ease-in-out ${isActive ? "scale-100 bg-gray-4" : "scale-30 "}`}></div>
            <div
                className={`duration-500 ease-in-out flex items-center justify-center ${isActive ? "w-3 md:w-4":"w-0"}`}
            >
                <Tik className="w-3 md:w-4 h-2 md:h-3" />
            </div>
            <p 
                className={`transition-all duration-500 ease-in-out w-auto ${isActive ?"text-primary":"text-gray-8"} text-[10px] md:text-base`}
            >
                {children}
            </p>
            <div
                className={`duration-500 ease-in-out flex items-center justify-center ${isActive ? "w-0":"w-3 md:w-4"} `}
            >
                <ArrowLeft className="fill-gray-8 my-auto w-3 md:w-4 h-3 md:h-4" />
            </div>
        </Link>
    )
}
