import { addSeparator, formatToPersian } from "@/lib/utils/NumberNormalize";
import { Trash } from "../ui/icons/trash";

export default function FactorCartBox({items}) {
  return (
    <>
        {items.map((food, index)=> (
        <div key={index} dir="rtl" className={`${index%2===0?"bg-gray-3":"bg-gray-1"} font-estedad-regular w-full h-14 flex items-center justify-between p-2`}>
            <div className={``}>
                <div className={`w-full text-xs`}>{food.label}</div>
                <div className={`flex gap-2 items-center justify-center text-[10px] text-gray-7`}>
                    <div className={``}>
                        {addSeparator(formatToPersian(((1-(food.discount/100))*food.price).toString()))}
                    </div>
                    <p className="">تومان</p>
                </div>
            </div>
            <div className={`flex items-center justify-between h-8 w-14 bg-tint-1 border border-tint-1 rounded-sm px-1 gap-2 font-estedad-fd-regular text-primary`}>
                <p className={`text-xl `}>+</p>
                <p className={``}>1</p>
                <p className={``}><Trash className={`w-4 fill-primary`}/></p>
            </div>
            
        </div>)
    )}
    </>
  )
}
