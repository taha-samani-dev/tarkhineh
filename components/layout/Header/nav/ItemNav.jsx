"use client";

import Link from "next/link";
import ArrowDown from "../../../ui/icons/arrow-down";
import { useState } from "react";

export default function ItemNav({
  children,
  haspopup = false,
  popupComponent = null,
  classNamePopup = "",
}) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <li className="body-xl text-gray-7 px-2">
      {haspopup === false ? (
        <Link href={"/"} className="">
          {children}
        </Link>
      ) : (
        <div
          className="relative flex items-center gap-1  px-2 cursor-pointer"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
          onClick={() => setShowPopup(!showPopup)}
        >
          <span className="">{children}</span>
          <ArrowDown
            className={`fill-gray-6 w-4 h-4
              duration-500 ease ${showPopup ? "rotate-180" : "rotate-0"}`}
          />
          <div className={`absolute top-[calc(50%+20px)] ${classNamePopup}`}>
            {showPopup && popupComponent}
          </div>
        </div>
      )}
    </li>
  );
}
