"use client"
import ShoppingBag from "../ui/icons/ShoppingBag";
import Truck from "../ui/icons/Truck";
import TruckFast from "../ui/icons/truck-fast";
import SelectMethodBox from "@/components/cart/SelectMethodBox";


export default function DeliveryMethodBox({DeliveryData ,method, setMethod}) {
    return (
        <SelectMethodBox data={DeliveryData} method={method} setMethod={setMethod} />
    )
}
