import Button from "@/components/ui/buttons/Button";
import { EmptyCard } from "@/components/ui/icons/empty-card";
import Link from "next/link";
import Order from "../../../components/profile/Order";
import OrderFilterBox from "../../../components/profile/OrderFilterBox";
import { Suspense } from "react";


export default function page() {
  // const orders = []
  const orders = [{name:""}]
  const data = [
    {
      branche:"شعبه اقدسیه",
      deliveryMethod:"Courier" | "Person",
      status:0,
      createdAt:1764494459952,
      items:[
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
      ],
      address:"اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
     },
    {
      branche:"شعبه اقدسیه",
      deliveryMethod:"Courier" | "Person",
      status:0,
      createdAt:1764494459952,
      items:[
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
      ],
      address:"اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
     },
    {
      branche:"شعبه اقدسیه",
      deliveryMethod:"Courier" | "Person",
      status:0,
      createdAt:1764494459952,
      items:[
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
      ],
      address:"اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
     },
    {
      branche:"شعبه اقدسیه",
      deliveryMethod:"Courier" | "Person",
      status:0,
      createdAt:1764494459952,
      items:[
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
      ],
      address:"اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
     },
    {
      branche:"شعبه اقدسیه",
      deliveryMethod:"Courier" | "Person",
      status:0,
      createdAt:1764494459952,
      items:[
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
      ],
      address:"اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
     },
    {
      branche:"شعبه اقدسیه",
      deliveryMethod:"Courier" | "Person",
      status:0,
      createdAt:1764494459952,
      items:[
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
        {name:"کوکو سبزی",price:1000_000, discount:20, count:3,photo:"/foods/food_test_2/test-order-food.jpg"},
      ],
      address:"اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
     },
  ]
  const priceWithDiscount = data[0].items.map((item)=>{
    return (item.price * ((100-Number(item.discount))/100))
  })
  const priceWithoutDiscount = data[0].items.map((item)=>(item.price ))

  const total =(list) =>{ return list.reduce((totalList, pro)=>totalList+pro)}
  return (
  <div className="" >
  {/* empyt order box */}
  {orders.length === 0 && (
    <div className="md:h-97.5 sm:h-85 h-60 relative flex items-center justify-center w-full md:border-none border border-gray-4 rounded-lg">
      <EmptyCard className={`absolute -z-10 fill-gray-3 sm:w-81.25 sm:h-78.25 w-50 h-48`} />
      <div className="sm:space-y-6 space-y-4 md:space-y-8 font-estedad-regular text-center">
        <h1 className="font-estedad-regular align-middle z-10  text-sm sm:text-base md:text-xl text-gray-7">شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</h1>

        <Link href={'/'}>
          <Button className="flex w-38 md:w-72 mx-auto  text-xs sm:text-sm md:text-base font-estedad-medium" style="stroke" >منوی رستوران</Button>
        </Link>
      </div>
    </div>
  )}
  {/* order box */}
  {orders.length >=1 && (
    <div className="">
      <Suspense>
      <OrderFilterBox/>
      </Suspense>
      <div dir="ltr" className="space-y-6 md:h-263 md:overflow-y-auto lg:px-6" >
        <Order orders={data} />
      </div>

    </div>
  )}

  </div>
);
}
