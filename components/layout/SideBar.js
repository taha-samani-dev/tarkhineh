"use client";

import BtnClose from "../ui/icons/btn-close";
import BrandName from "../ui/icons/brand-name";
import MenuBboard from "../ui/icons/menu-board";
import HomeHashtag from "../ui/icons/home-hashtag";
import HomeIcon from "../ui/icons/home-icon";
import Profile2User from "../ui/icons/profile-2-user";
import CallCalling from "../ui/icons/call-calling";
import Link from "next/link";
import ArrowDown from "../ui/icons/arrow-down";
import {usePathSegments} from "@/hooks/usePathSegments";
import { useState } from "react";
import {useModal} from "@/store/Modal.store";
import {data} from "@/constans/constans";
import {usePath} from "@/hooks/usePath";
import {ImageContainer} from "@/components/ui/image/ImageContainer";
import {AppImage} from "@/components/ui/image/AppImage";
import {BackFilterContainer} from "@/components/common/BackFilterContainer";

export default function SideBar() {
  const {currentBranch, MenuLinks} = usePath();
  const open = useModal(s=>s.open)
  const closeModal = useModal(s=>s.closeModal)
  const openModal =useModal(s=>s.openModal)
  const {path, current} = usePathSegments();
  const [openItem, setOpenItem] = useState(null);
  const branches = data.branches

  return (
    <div
      className={`duration-700 transition-all ease-in-out lg:hidden fixed inset-0 w-full z-120! ${
          open === "sidebar" ? "" : "absolute -right-full!"
      }`}
      onClick={() => {
        closeModal()
        setOpenItem(null);
      }}
    >
      <div
        className={`duration-700 transition-all z-50! ease-in-out lg:hidden fixed inset-0 w-64 sm:w-84 md:w-94 h-dvh bg-white top-0 min-h-dvh  flex justify-center items-center ${
            open === "sidebar"  ? "" : "absolute -right-full!"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full overflow-y-auto">
          {/* header */}
          <ImageContainer className="w-full relative h-23.5">
            <AppImage publicId={'/home_photo/sidebar/sidebar.jpg'} alt={"رستوران ترخینه"} className="absolute object-cover w-full! -z-12" />
            <BackFilterContainer/>
            <div className="w-full h-full p-4 flex justify-between">
              <BrandName className="fill-white w-17 z-0" />
              <div
                className={` w-10 h-10 flex items-center justify-center cursor-pointer z-200`}
                onClick={() => {
                  closeModal()
                  setOpenItem(null);
                }}
              >
                <BtnClose className={`bg-white`} />
              </div>
            </div>
          </ImageContainer>

          <ul className="w-ful h-41 mt-2 mx-1">
            <li className="">
              <Link
                href={"/"}
                className={`w-full h-auto flex gap-2 items-center hover:text-xl  hover:text-primary hover:bg-gray-3 px-1 py-1 rounded-xs hover:[&_svg:first-child]:w-6 hover:[&_svg:first-child]:h-6   ${
                  current === "/"
                    ? "text-xl font-estedad-bold text-primary"
                    : "font-estedad-regular text-lg text-gray-8"
                }`}
                onClick={() => {
                  closeModal()
                  if (openItem!==null) setOpenItem(null);
                }}
              >
                <HomeIcon
                  className={
                   current === "/"
                      ? "w-6 h-6 fill-primary"
                      : "w-4 h-4 fill-gray-8"
                  }
                />
                <p className="">صفحه اصلی</p>
              </Link>
              <div className="w-auto h-px bg-gray-4 rounded-sm mx-1" />
            </li>

            <li className="">
              <div
                className={`w-full h-auto flex justify-between items-center hover:text-xl  hover:text-primary hover:bg-gray-3 px-1 py-1 rounded-xs hover:[&_svg:first-child]:w-6 hover:[&_svg:first-child]:h-6   cursor-pointer ${
                  current==="menu"
                    ? "text-xl font-estedad-bold text-primary"
                    : "text-lg text-gray-8 font-estedad-regular"
                }`}
                onClick={() => {
                  if (currentBranch) {
                    setOpenItem("menu");
                  } else {
                    openModal("selectBranch")
                    if (openItem!==null) setOpenItem(null);
                  }
                }}
              >
                <div className="flex gap-2 items-center">
                  <MenuBboard
                    className={`fill-gray-8 ${
                      current==="menu" ? "w-6 h-6 fill-primary" : "w-4 h-4"
                    }`}
                  />
                  <p className="">منو</p>
                </div>
                <ArrowDown
                  className={`w-4 h-4 transition-all duration-300 ease-linear 
                            ${currentBranch ? " fill-gray-7 " : ""}
                            ${openItem==="menu" ? " rotate-180 " : " rotate-0 "}
                            ${current==="menu" ? " fill-primary " : ""}`}
                />
              </div>
              {currentBranch && (
                <ul
                  className={`w-[calc(100%-1rem)] duration-500 transition-all ease-in-out mr-4 ${
                    openItem!=="menu" ? "scale-y-0 h-0" : " h-37 "
                  }`}
                >
                  {MenuLinks.map(({label,href}, index) => {
                    return (
                      <li key={index} className="">
                        {index !== 0 && (
                          <div className="w-auto h-px bg-gray-4 rounded-p mx-1" />
                        )}
                        <Link
                          href={href}
                          className={`w-full h-auto flex gap-2 items-center font-estedad-regular text-lg hover:text-xl text-gray-8 hover:text-primary hover:bg-gray-3 px-1 py-1 rounded-xs hover:[&_svg:first-child]:w-6 hover:[&_svg:first-child]:h-6  `}
                          onClick={() => {
                            if (openItem!==null) setOpenItem(null);
                            closeModal()
                          }}
                        >
                          <p className="">{label}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
              <div className="w-auto h-px bg-gray-4 rounded-sm mx-1" />
            </li>

            <li className="">
              <div
                className={`w-full h-auto flex justify-between items-center font-estedad-regular text-lg hover:text-xl text-gray-8 hover:text-primary hover:bg-gray-3 px-1 py-1 rounded-xs hover:[&_svg:first-child]:w-6 hover:[&_svg:first-child]:h-6   cursor-pointer ${
                  current==="branch" && "text-xl! font-estedad-bold! text-primary!"
                }`}
                onClick={() => {
                  setOpenItem("branch");
                }}
              >
                <div className="flex gap-2 items-center">
                  <HomeHashtag
                    className={`${
                      current==="branch"
                        ? "w-6 h-6 fill-primary"
                        : "fill-gray-8 w-5 h-5"
                    }`}
                  />
                  <p className="">{currentBranch?.label || "شعبه"}</p>
                </div>

                <ArrowDown
                  className={`w-4 h-4 transition-all duration-300 ease-linear ${
                    openItem==="branch" ? " rotate-180! " : " rotate-0 "
                  } ${current==="branch" ? " fill-primary! " : "fill-gray-7"}`}
                />
              </div>
              {
                <ul
                  className={`w-[calc(100%-1rem)] duration-500 transition-all ease-in-out mr-4 h-37 ${
                    openItem!=="branch" && "scale-y-0 h-0!"
                  }`}
                >
                  {branches.map(({label,href}, index) => {
                    return (
                      <li key={index} className="">
                        {index !== 0 && (
                          <div className="w-auto h-px bg-gray-4 rounded-p mx-1" />
                        )}
                        <Link
                          href={href}
                          className={`w-full h-auto flex gap-2 items-center font-estedad-regular text-lg hover:text-xl text-gray-8 hover:text-primary hover:bg-gray-3 px-1 py-1 rounded-xs hover:[&_svg:first-child]:w-6 hover:[&_svg:first-child]:h-6  `}
                          onClick={() => {
                            closeModal()
                            setOpenItem(null);
                          }}
                        >
                          <p className="">{label}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              }
              <div className="w-auto h-px bg-gray-4 rounded-sm mx-1" />
            </li>

            <li className="">
              <Link
                href={"/about-us"}
                className={`w-full h-auto flex gap-2 items-center font-estedad-regular text-lg hover:text-xl text-gray-8 hover:text-primary hover:bg-gray-3 px-1 py-1 rounded-xs hover:[&_svg:first-child]:w-6 hover:[&_svg:first-child]:h-6   ${
                  path[0] === "about-us" &&
                  "text-xl1 font-estedad-bold! text-primary!"
                }`}
                onClick={() => {
                  openModal()
                  if (openItem!==null) setOpenItem(null);
                }}
              >
                <Profile2User
                  className={`${
                    path[0] === "about-us"
                      ? "w-6 h-6 fill-primary"
                      : "fill-gray-8 w-5 h-5"
                  }`}
                />
                <p className="">درباره ما</p>
              </Link>
              <div className="w-auto h-px bg-gray-4 rounded-sm mx-1" />
            </li>

            <li className="">
              <Link
                href={"/contact-us"}
                className={`w-full h-auto flex gap-2 items-center font-estedad-regular text-lg hover:text-xl text-gray-8 hover:text-primary hover:bg-gray-3 px-1 py-1 rounded-xs hover:[&_svg:first-child]:w-6 hover:[&_svg:first-child]:h-6   ${
                  path[0] === "contact-us" &&
                  "text-xl! font-estedad-bold! text-primary!"
                }`}
                onClick={() => {
                  openModal()
                  if (openItem!==null) setOpenItem(null);
                }}
              >
                <CallCalling
                  className={`${
                    path[0] === "contact-us"
                      ? "w-6 h-6 fill-primary"
                      : "fill-gray-8 w-5 h-5"
                  }`}
                />
                <p className="">تماس با ما</p>
              </Link>
              <div className="w-auto h-px bg-gray-4 rounded-sm mx-1" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
