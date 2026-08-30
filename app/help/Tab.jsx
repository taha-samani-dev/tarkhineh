"use client"
import Link from "next/link"
import { createContext, useContext, useLayoutEffect, useRef, useState } from "react"

const tabContext = createContext(null)

export function TabBox({children, activeTab, className='', paramName="category", updateKey=null}){
    const tabRefs = useRef({})
    const [underLinePosition,setPosition] = useState({left:0, width:0})
    useLayoutEffect(() => {
        const el = tabRefs.current[activeTab]
        if(el) setPosition({left:el.offsetLeft,width:el.offsetWidth})
    },[activeTab,updateKey])
    return (
        <tabContext.Provider value={{tabRefs, activeTab, paramName}}>
            <div className={`w-full select-none h-10 md:h-12 xl:h-16 duration-500 ease-in transition-all bg-gray-3 px-4 md:px-8 xl:px-27 relative ${className}`} >
                <div className={`flex items-center gap-4 h-full font-estedad-regular`}>{children}</div>
                <div className={`absolute h-0.5 bg-primary duration-400 ease transition-all bottom-1 xl:bottom-2`} style={{left:underLinePosition.left, width:underLinePosition.width}}></div>
            </div>
        </tabContext.Provider>
    )
}

function useTab(){
    const context = useContext(tabContext)
    if (!context) {
        throw new Error("useTab must be used within a TabProvider")
    }
    return context
}

export function TabItem({children,name}){
    const {tabRefs, activeTab, paramName} = useTab()
    return (
        <Link 
        key={name}
        scroll={false}
        href={`?${paramName}=${name}`}
        className={`hover:text-primary flex items-center justify-center p-1 xl:py-2 rounded-lg active:scale-99 hover:bg-tint-2 text-xs md:text-base lg:text-lg xl:text-xl text-center  ${activeTab === name ?"font-estedad-medium text-primary": "text-gray-7 font-estedad-regular "}`}

        ref={(el)=>{tabRefs.current[name]=el}}
        >
            {children}
        </Link>
    )

}

