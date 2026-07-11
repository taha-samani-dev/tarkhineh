"use client"

export default function SelectMethodBox({data, method, setMethod}) {
    const {option, label, Icon} = data
    return (
        <div className={`lg:flex items-center justify-between px-2 xl:px-6 h-32 lg:h-28.5 w-full border border-gray-4 rounded-lg`}>
            <div className={`flex gap-1 text-gray-8 border-b border-gray-4 py-2 lg:border-none`}>
                <Icon className={`w-4 md:w-6 fill-gray-8`} />
                <p className={`text-sm md:text-base font-estedad-regular`}>{label}</p>
            </div>
            {option.map(({Icon, name, label,description}, index) => (
                <div className={`flex items-center gap-1  py-4 lg:p-0 rounded-lg cursor-pointer`} key={index} onClick={() => setMethod(name)}>
                    <div className={`w-4 h-4 rounded-full border border-gray-4 flex items-center justify-center`}>
                        <div className={`${method===name?"bg-primary":""} m-px rounded-full w-3 h-3`}></div>
                    </div>
                    <div className={`flex gap-2 lg:gap-0 xl:gap-2`}>
                        <div className={`font-estedad-regular ${method===name?"text-primary":"text-gray-5"}`}>
                            <h3 className={`text-xs lg:text-sm`}>{label}</h3>
                            <p className={`text-[10px] lg:block hidden`}>{description}</p>
                        </div>
                        <Icon className={`w-4 lg:w-6 ${method===name?"fill-primary":"fill-gray-5"}`}/>
                    </div>
                </div>
            ))}
        </div>
    )
}