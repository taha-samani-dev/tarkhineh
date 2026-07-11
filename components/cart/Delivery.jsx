import DeliveryMethodBox from "./DeliveryMethodBox";
import DeliveryMethodCourier from "./DeliveryMethodCourier";
import DeliveryMethodPerson from "./DeliveryMethodPerson";
import OrderDescription from "./OrderDescription";
import {useState} from "react";
import Truck from "@/components/ui/icons/Truck";
import TruckFast from "@/components/ui/icons/truck-fast";
import ShoppingBag from "@/components/ui/icons/ShoppingBag";

export default function Delivery({address}) {
    const [method, setMethod] = useState('Courier')
    const DeliveryData= {
        label:"روش تحویل سفارش",
        Icon:Truck,
        option : [
            {Icon:TruckFast,name:"Courier",label:"ارسال توسط پیک",description:"توسط پیک رستوران ارسال شود."},
            {Icon:ShoppingBag,name:"Person",label:"تحویل حضوری",description:"توسط پیک رستوران ارسال شود."},
        ]
    }
    return (
        <div className={`min-w-full  px-1 flex gap-6 flex-col `}>
            {/* delivery method */}
            <DeliveryMethodBox DeliveryData={DeliveryData} method={method} setMethod={setMethod} />

            {/* box address */}
            {method === "Courier" && <DeliveryMethodCourier address={address} />}

            {/* box branch address */}
            {method === "Person" && (<DeliveryMethodPerson/>)}

            {/* order description */}
            <OrderDescription/>
        </div>
  )
}
