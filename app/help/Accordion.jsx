"use client"

import ArrowDown from "@/components/ui/icons/arrow-down"
import { createContext, useContext, useRef, useState } from "react"

const AccordionContext = createContext(null)
const AccordionItemContext = createContext(null)

function Accordion({children}){
    const [openId, setOpen] = useState(null)
    const toggle = (id) =>{
        setOpen((i)=>(i===id?null:id))
    }
    return (
        <AccordionContext.Provider value={{openId, setOpen, toggle}}>
            <div>{children}</div>
        </AccordionContext.Provider>
    )
}

function ItemAccordion({ children, id }) {
    return (
        <AccordionItemContext.Provider value={{ id }}>
        <div
            className={`flex flex-col overflow-hidden`}
            
        >
            {children}
        </div>
        </AccordionItemContext.Provider>
    )
}

function useAccordion(){
    const context = useContext(AccordionContext)
    if (!context){
        throw new Error("useAccordion must be used within a AccordionProvider")
    }
    return context
}
function useAccordionItem() {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error("useAccordionItem must be used within a ItemAccordionProvider")
  }
  return context
}


function HeaderAccordion({children}){
    const { id } = useAccordionItem()
    const { openId,toggle } = useAccordion()
    const isOpen = openId === id
    return (
        <button className={`flex active:scale-99 duration-200 ease-in-out transition-all hover:bg-tint-1 px-4 md:px-6 rounded-lg justify-between  m-0 w-full font-estedad-regular text-xs md:text-xl cursor-pointer select-none gap-1 md:gap-2 py-2 md:py-4`} tabIndex={0} role="button" aria-expanded={isOpen} onClick={() => toggle(id)}>
            <p className={`${isOpen?"text-primary":"text-gray-8"} text-start`}>{children}</p>
            <ArrowDown className={`w-4 transition-all duration-300 ease-in-out h-4 md:w-8 md:h-8 ${isOpen?"fill-primary rotate-180":"fill-gray-8"}`}/>
        </button>
    )
}

function ContentAccordion({children}){
    const { id } = useAccordionItem()
    const { openId } = useAccordion()
    const isOpen = openId === id
    const ref = useRef(null)
    return (
        <div className="w-full transition-all duration-300 ease-in-out" style={{height:isOpen? ref.current?.offsetHeight:"0"}}>
            <div className={` text-[10px] px-2 md:px-4 pb-2 md:pb-4 ${isOpen?"":""} leading-[180%] font-estedad-regular md:text-base`} ref={ref}>
                {children}
            </div>
        </div>
    )
}


export {Accordion,ItemAccordion, HeaderAccordion, ContentAccordion}
