"use client";
import Link from "next/link";
import Popup from "./Popup";
import ArrowDown from "../../../ui/icons/arrow-down";
import {usePathSegments} from "@/hooks/usePathSegments";
import {useModal} from "@/store/Modal.store";
import {data} from "@/constans/constans";
import {usePath} from "@/hooks/usePath";

export default function HeaderNav() {
  const {currentBranch, MenuLinks,} = usePath();
  const { current} = usePathSegments();
  const {branches} = data
  const setPayload = useModal(s=>s.setPayload)
  const openModal = useModal(s=>s.openModal)
  const items = [
    {label:"صفحه اصلی",name:"/",width:120, right:0,popup:null,onClick:null,enablePopup:false},
    {label:"شعبه",name:"branch",width:100, right:128,popup:branches,onClick:null,enablePopup:true},
    {label:"منو",name:"menu",width:60, right:236,popup:MenuLinks,onClick:()=>(openModal("selectBranch"), setPayload([{href: `/menu?category=main-food`, default :"/menu?category=main-food"}])),enablePopup:Boolean(currentBranch)},
    {label:"اعطای نمایندگی",name:"franchise",width:144, right:304,popup:null,onClick:null,enablePopup:false},
    {label:"درباره ما",name:"about-us",width:100, right:456,popup:null,onClick:null,enablePopup:false},
    {label:"تماس با ما",name:"contact-us",width:100, right:564,popup:null,onClick:null,enablePopup:false},
  ]
  const itemActive = items.find((i)=>i.name===current) || ""
  const activeStyle = (name) => {
    return current===name ? "font-estedad-bold text-primary [&_.arrowDown]:fill-primary" : "text-gray-7" +
        " font-estedad-regular" +
        " [&_.arrowDown]:fill-gray-7"
  }
  return (
      <nav className="w-166 h-full relative hidden lg:flex justify-center items-center z-50">
        <ul className="flex justify-center items-center h-13 gap-2">
          {items.map(({label, name,width, onClick,popup,enablePopup}, index) => (
              <li style={{width}}  className={`hover:font-estedad-bold flex place-items-center justify-center gap-1 hover:text-primary text-xl cursor-pointer duration-500 ease-linear transition-all relative ${activeStyle(name)} ${popup && "hover:[&_.popup]:block" +
              " hover:[&_.arrowDown]:rotate-x-180 [&_.popup]:hidden"} `} key={index}>
                {enablePopup && (
                    <>
                      <button type="button">
                        {currentBranch && name==="branch" ?currentBranch.label: label}
                      </button>
                      <ArrowDown className={`w-4 arrowDown h-4 transition-all duration-300 ease-linear`}/>
                      <Popup className="popup top-[calc(50%+18px)] z-10 shadow-popup w-36 h-auto font-estedad-regular text-base rounded-sm text-black absolute right-0" data={popup} />
                    </>
                )}
                {!enablePopup && (
                    <>
                      {popup && (
                          <button className={'cursor-pointer'} type={"button"} onClick={onClick}>
                            {label}
                          </button>
                      )}
                      {!popup && (
                          <Link href={`/${name}`} className="">
                            {label}
                          </Link>
                      )}
                    </>
                )}
              </li>
          ))}
        </ul>
        <div className={` absolute z-10 duration-500 ease-linear transition-all bottom-10  h-[1.5px] bg-primary rounded-full`} style={itemActive?{right:itemActive.right, width:itemActive.width}:null}/>
      </nav>
  );
}
