"use client"

import { formatToPersian } from "@/lib/utils/NumberNormalize"
import { useRef, useState } from "react"

export default function TextArea({id, name, className, maxLength, disabled=false, showCounter=false, children}) {
    const [value, setValue] = useState()
    const [focus, setFocus] = useState(false)
    const input = useRef()
    const handleChange = (e) => {
        setValue(e.target?.value)
    }
    return (
        <div className={`relative w-full flex justify-center cursor-pointer items-center gap-1 py-1 border rounded-sm font-estedad-regular text-xs md:text-sm ${focus
            ? "border-primary"
            : "border-gray-4"
        } ${className} ${showCounter?"mb-8":""}`} onClick={()=>input.current?.focus()}>
            <textarea ref={input} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} value={value || ""} id={id} name={name} maxLength={maxLength} className={`w-full resize-none border-none outline-none h-full`} onChange={handleChange} >
            </textarea>
            <label form={id} className={`absolute select-none transition-all duration-300 ease right-4  ${
            focus || (value && value.length>=1)
              ? "z-10 -top-3 text-xs bg-white"
              : "text-xs top-2 md:text-sm -z-1"
          } ${
            disabled? "text-gray-7"
              :focus ? "text-primary"
              : value && value.length>=1 ? "text-gray-8"
              : ""
          }`}>
                {children}
            </label>
            {showCounter && (
                <p className="-bottom-6 left-4 absolute font-estedad-fd-regular">{formatToPersian(`${value?.length || 0}/${maxLength}`)}</p>
            )}
        </div>
    )
}  