"use client"

import {useState} from "react";
import Button from "@/components/ui/buttons/Button";
import {formatToPersian} from "@/lib/utils/NumberNormalize";
import {Trash} from "@/components/ui/icons/trash";
import { useCartStore } from "@/store/Cart.store";
import { usePathSegments } from "@/hooks/usePathSegments";

export function AddToCartButton({food}) {
    const [clicked, setClicked] = useState(false);
    const [showquantityer, setShowquantityer] = useState(false);
    const {currentBranch} = usePathSegments()
    const addFood = useCartStore((s)=>s.addFood)
    const removeFood = useCartStore((s)=>s.removeFood)
    const clearFood = useCartStore((s)=>s.clearFood)
    const carts = useCartStore((s)=>s.carts)
    const _food = carts[currentBranch.name]?.find((i)=>i.id===food.id) || {}
    const quantity = _food.quantity || 0
    const handleClick = () => {
        setClicked(true);
        handelAdd()
        setTimeout(()=>{
            setShowquantityer(true)
        },1000)

    }
    const restStatusButton = () =>(setClicked(false),setShowquantityer(false))
    const handleRemove = ()=> (quantity===1&&restStatusButton(), removeFood(currentBranch.name, food.id))
    const handelAdd = () => (addFood(currentBranch.name, food))
    const handleClearFood = () => (restStatusButton(), clearFood(currentBranch.name, food.id))

    console.log(quantity);
    return (
        <div className={'w-full h-8 lg:h-10 my-2 md:my-3 lg:my-4'}>
            {!showquantityer && (
                <Button onClick={handleClick} className="px-2 lg:px-4 py-2 w-full h-8 lg:h-10 font-estedad-regular lg:font-estedad-medium text-[10px] lg:text-base text-center cursor-pointer select-none" style={clicked ?"stroke":"fill"} >
                    {clicked?"افزوده شد!":"افزودن به سبد خرید"}
                </Button>
            ) }
            {showquantityer && (
                <div className={'flex justify-between items-center h-full w-full '}>
                    <button className={'md:w-8 h-full w-6  active:scale-95'} onClick={handleClearFood}>
                        {quantity>1 && (<div
                            className={"flex place-content-center cursor-pointer w-full h-full bg-error-extralight rounded-lg hover:bg-error-light/50 overflow-hidden"}>
                            <Trash className={'w-4 md:w-5 lg:w-6 fill-error'}/>
                        </div>)}
                    </button>
                    <div className={'h-full  flex items-center justify-center text-[10px] lg:text-base rounded-lg overflow-hidden'}>
                        <button className={'w-6 md:w-8 h-full bg-tint-1 cursor-pointer font-estedad-fd-regular flex place-content-center text-2xl active:scale-95 hover:bg-error-light/50'} onClick={handleRemove}>
                            {quantity>1?(
                                <p className={"w-full h-full flex place-content-center text-2xl leading-[170%] justify-center"}>-</p>
                            ):(
                                <Trash className={'w-4 md:w-5 lg:w-6 fill-error'} />
                            )}
                        </button>
                        <div className={'flex items-center bg-gray-1 px-2 md:px-4 justify-center h-full w-10'}>
                            <p className={'text-base md:text-xl font-estedad-regular leading-[100%]'}>
                                {formatToPersian(quantity).toString()}
                            </p>
                        </div>
                        <button className={'w-6 md:w-8 h-full bg-tint-1 cursor-pointer font-estedad-fd-regular text-2xl active:scale-95 hover:bg-tint-2'} onClick={handelAdd}>+</button>
                    </div>
                </div>
            )}
        </div>
    )
}