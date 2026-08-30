"use client";
import {useEffect, useState} from "react";
import ChipsList from "./ChipsList";
import ShoppingCart from "@/components/ui/icons/shopping-cart";
import Link from "next/link";
import Button from "../ui/buttons/Button";
import { TabBox, TabItem } from "@/app/help/Tab";
import {usePathSegments} from "@/hooks/usePathSegments";
import {useSearchParams} from "next/navigation";
import {data} from "@/constans/constans";

const tabs = [
  { label: "غذای اصلی", name: "main-food" },
  { label: "پیش غذا", name: "pre-food"},
  { label: "دسر", name: "desert"},
  { label: "نوشیدنی", name: "drink"},
];
export default function FilterBox({ data }) {
  const [hasScrollToTab, setScrollToTab] = useState(false);
  const {currentBranch} = usePathSegments()
  const param = useSearchParams()
  const paramName = "category"
  const category = param.get(paramName);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const width = window.innerWidth;
      let threshold;
      if (width < 768) threshold = 175;
      else if (width < 1024) threshold = 260;
      else threshold = 335;
      setScrollToTab(scrollY >= threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <>
        {/*category*/}
        <div className={`w-dvw ${hasScrollToTab?"fixed! top-16 md:top-28.5 z-20 max-w-360":""}`}>
          <TabBox paramName={paramName} activeTab={category} updateKey={hasScrollToTab} >
            {tabs.map(({label, name})=>{
                return (
                    <TabItem key={name} name={name}>
                      {label}
                    </TabItem>
                )
              })}
          </TabBox>
          {/* chips */}
          <ChipsList data={data} />
          {/*button cart*/}
          <div className={`w-full max-w-360 mx-auto absolute`}>
            <Link href={`/branches/${currentBranch.name}/cart`} className={`rounded-sm absolute xl:left-27 md:left-8 left-2 mt-2.5 flex justify-center items-center`}>
              <Button
                  className={`w-full h-8 md:h-10 px-2 font-estedad-regular`}
                  style="stroke"
                  iconRight={<ShoppingCart className={`fill-primary lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4`}/>}
              >
                  تکمیل خرید
              </Button>
            </Link>
          </div>
        </div>
        {/*  empty box filter*/}
        <div className={`w-full ${hasScrollToTab && "h-32 md:h-36 lg:h-28 xl:h-32"} `}/>
      </>
  );
}
