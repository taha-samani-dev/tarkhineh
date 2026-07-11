import React from "react";
import ArrowLeft from "./arrow-left";

export default function BtnChipsSlider({
  className = "",
  classNameArrow = "",
  disabled = false,
  handleClick = () => {},
}) {
  return (
    <>
      {disabled || (
        <div
          className={`z-10 -translate-y-1/2 border border-gray-4 rounded-sm flex items-center justify-center cursor-pointer ${className}`}
          onClick={handleClick}
        >
          <ArrowLeft className={`w-4 h-4 fill-primary ${classNameArrow}`} />
        </div>
      )}
    </>
  );
}
