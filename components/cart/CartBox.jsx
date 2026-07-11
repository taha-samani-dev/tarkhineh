'use client'
import { addSeparator, formatToPersian } from '@/lib/utils/NumberNormalize'
import { Trash } from '../ui/icons/trash'
import StarRate from '../ui/icons/star-rate'
import Image from 'next/image'
import { useCartStore } from '@/store/Cart.store'
import { usePathSegments } from '@/hooks/usePathSegments'

export default function CartBox({items, step}) {
    const {currentBranch} = usePathSegments()
    const addFood = useCartStore((s)=>s.addFood)
    const removeFood = useCartStore((s)=>s.removeFood)
    const clearFood = useCartStore((s)=>s.clearFood)
    const carts = useCartStore((s)=>s.carts)
    const currentCart = carts[currentBranch.name] || []

    return (
        <div className={`min-w-full px-1 hidden sm:block h-full rounded-lg border border-gray-4 p-6 pb-0 overflow-y-auto `} dir="ltr" >
            {currentCart.map((food, index)=>(
            <div className={`flex items-center justify-center h-40 border rounded-lg border-gray-4 mx-4 mb-6`} dir="rtl" key={index}>
                <div className={`aspect-42/39 h-full relative`} >
                    <Image src={"/foods/food_test_1/food.jpg"} fill className={`object-cover rounded-r-lg`} alt={food.label} />
                </div>

                <div className={`w-full h-full flex flex-col justify-between p-4 lg:p-6 font-estedad-regular`}>
                    <div className={`flex items-center justify-between`}>
                        <h2 className={`xl:text-xl lg:text-lg md:text-base font-estedad-semi-bold`}>{food.label}</h2>
                        <div onClick={()=>(clearFood(currentBranch.name, food.id))}>
                            <Trash className={"flex place-content-center cursor-pointer w-8 h-8 p-1 fill-error bg-error-extralight rounded-lg hover:bg-error-light/50 overflow-hidden"}/>
                        </div>
                    </div>

                    <div className={`flex justify-between h-full items-center py-0.5`}>
                        <h3 className={`xl:text-sm text-xs`}>{food.content}</h3>
                        {food.discount > 0 && <div className={`flex font-estedad-fd-regular gap-2 self-end`}>
                            <p className={`xl:text-base text-sm text-gray-4 line-through`}>{addSeparator(formatToPersian(food.price.toString()))}</p>
                            <div className={`text-xs text-error bg-error-extralight rounded-lg flex items-center justify-center px-1`} dir="ltr">
                                <span>%</span>
                                <p>{formatToPersian(food.discount.toString())}</p>
                            </div>
                        </div>}
                    </div>

                    <div className={`flex justify-between items-center`}>
                        <div className={`flex xl:gap-4 gap-2 items-center justify-center`}>
                            <StarRate className="w-4 xl:w-6" score={60} />
                            <div className={`flex items-center gap-2 text-sm font-estedad-fd-regular bg-tint-1 rounded-sm overflow-hidden border border-tint-1 h-8`}>
                                <div className={'h-full flex items-center justify-center text-[10px] lg:text-base overflow-hidden'}>
                                    <button className={'w-6 xl:w-8 h-full bg-tint-1 cursor-pointer font-estedad-fd-regular flex place-content-center text-2xl active:scale-95 hover:bg-error-light/50'} onClick={()=>(removeFood(currentBranch.name, food.id))} >
                                        {food.quantity>1?(
                                            <p className={"text-2xl w-full h-full flex content-center justify-center"}>-</p>
                                        ):(
                                            <Trash className={'w-4 md:w-5 xl:w-6 fill-error'} />
                                        )}
                                    </button>
                                    <div className={'flex items-center bg-gray-1 px-2 justify-center h-full w-8'}>
                                        <p className={'text-base xl:text-xl font-estedad-regular leading-[100%]'}>
                                            {formatToPersian(food.quantity).toString()}
                                        </p>
                                    </div>
                                    <button className={'w-6 xl:w-8 h-full bg-tint-1 cursor-pointer font-estedad-fd-regular text-2xl active:scale-95 hover:bg-tint-2'} onClick={()=>(addFood(currentBranch.name, food))} >+</button>
                                </div>
                            </div>
                        </div>
                        <div className={`text-gray-8 flex gap-0.5 items-center justify-center`} >
                            <p className={`xl:text-xl lg:text-lg text-base font-estedad-fd-regular `}>{addSeparator(formatToPersian(((1-(food.discount/100))*food.price).toString()))}</p>
                            <p className={`xl:text-lg lg:text-base text-sm`}>تومان</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
