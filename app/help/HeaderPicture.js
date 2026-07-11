import Image from 'next/image'


export default function HeaderPicture({tabItems, categoryIndex}) {
    return (
    <div className={`w-full max-h-84 select-none relative duration-300 ease-in-out transition-transform aspect-2/1 md:aspect-3/1 lg:aspect-4/1 flex justify-center items-center`}>
        <div className={`w-full flex items-center justify-center place-content-center font-estedad-bold text-tint-1 text-center`}>
            {tabItems.map(({headerLabel, id})=>{
                return (
                <p key={id} className={`w-full absolute duration-300 ease-in-out transition-transform text-base md:text-[40px] `} style={{ transform: `translateX(${(categoryIndex - id) * 100}%)` }} >
                    {headerLabel}
                </p>
                )
            })}
        </div>
        <div className={`w-full h-full absolute -z-1`}>
            {tabItems.map(({name, label, picture, id})=>{
                return <Image key={id} className={`w-full -z-1 absolute object-cover duration-300 ease-in-out transition-transform`} style={{ transform: `translateX(${(categoryIndex - id) * 100}%)` }} src={picture} fill alt={`${label} |${name} tarkhineh`} />
            })}
        </div>
        <div className="-z-1 absolute inset-0 bg-[#21402B80]/50 w-full h-full" />
        <div className="-z-1 absolute inset-0 bg-[#0000008C]/55 w-full h-full" />
    </div>
  )
}
