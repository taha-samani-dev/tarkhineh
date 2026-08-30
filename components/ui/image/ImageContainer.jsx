"use client"

import {createContext, useContext, useLayoutEffect, useRef, useState} from "react";

const ImageContext = createContext(null)

export function ImageContainer({children,defaultWidth=100, defaultHeight=100, className}) {
    const imageRef = useRef(null)
    const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight })
    useLayoutEffect(() => {
        if (!imageRef.current) return

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect
            setSize({
                width: Math.round(width),
                height: Math.round(height),
            })
        })

        observer.observe(imageRef.current)
        return () => observer.disconnect()
    }, [])
    return (
        <div className={`relative ${className}`} ref={imageRef}>
            <ImageContext.Provider value={{size}}>
                {children}
            </ImageContext.Provider>
        </div>
    )
}

export function useImage(){
    const context = useContext(ImageContext)
    if(!context){
        throw new Error("useImage must be used within the imageProvider")
    }
    return context;
}
