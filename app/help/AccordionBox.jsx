import React from 'react'

export default function AccordionBox({children}) {
    return (
        <div className={`w-full px-4 md:px-8 xl:px-27 pb-4`}>
            <div className={`w-full my-4 border border-gray-4 rounded-lg `}>
                {children}
            </div>
        </div>
  )
}
