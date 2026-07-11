"use client";

import { useRef, useState } from "react";
import InfoCircle from "../icons/info-circle";

export default function Input({
  iconLeft = null,
  iconRight = null,
  placeholder = "شماره همراه",
  errorMsg = "پر کردن این فیلد الزامی است!",
  errorIcon = <InfoCircle className={`w-4 h-4 fill-error`} />,
  valueState = useState(""),
  value = "",
  errorState = useState(false),
  type = "text",
  name,
  id,
  dir,
  maxLength,
  inputMode,
  disabled = false,
  onChange = null,
  isTransparent = false,
}) {
  const [valueS, setValue] = valueState;
  const [isFocus, setFocus] = useState(false);
  const [showError, setShowError] = errorState;
  const inputRef = useRef(null);
  const targetValue = onChange===null?valueS:value
  return (
    <div>
      <div
        className={`relative w-full flex justify-center cursor-pointer items-center gap-1 py-1 border rounded-sm h-8 md:h-10 font-estedad-regular text-xs md:text-sm ${
          showError
            ? "border-error"
            : isFocus
            ? "border-primary"
            : "border-gray-4"
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="right-4 -z-1 absolute w-4 md:w-6 h-4 md:h-6 select-none">
          {iconRight}
        </div>

        <label
          form={id}
          className={`absolute select-none transition-all duration-300 ease-in-out px-0.5 ${
            iconRight === null ? "right-4" : "right-8 md:right-10 "
          }  ${
            isFocus || targetValue !== ""
              ? "z-10 -translate-y-full text-xs bg-white"
              : "text-xs md:text-sm -z-1"
          } ${
            disabled
              ? "text-gray-7"
              : showError
              ? "text-error"
              : isFocus
              ? "text-primary"
              : targetValue === ""
              ? ""
              : "text-gray-8"
          }`}
        >
          {placeholder}
        </label>

        <input
          className={`w-full h-full ${
            iconRight !== null ? "mr-9 md:mr-11" : "mr-4"
          } ${
            iconLeft !== null ? "ml-9 md:ml-11" : "ml-4"
          } outline-none border-none `}
          type={type}
          value={targetValue}
          onChange={(e) => {
            onChange !== null || typeof onChange === "function"
              ? onChange(e)
              : setValue(e.target.value);
          }}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={(e) => {
            setFocus(false);
          }}
          name={name}
          id={id}
          ref={inputRef}
          dir={dir}
          inputMode={inputMode}
          maxLength={maxLength}
          disabled={disabled}
        />

        <div className="left-4 -z-1 absolute w-4 md:w-6 h-4 md:h-6 select-none">
          {iconLeft}
        </div>
      </div>

      {/*  */}
      <div
        className={` gap-1 py-0.5  select-none cursor-default items-center ${
          showError ? "flex" : "hidden"
        } text-error text-[10px] font-estedad-regular`}
      >
        {errorIcon}
        <p className="">{errorMsg}</p>
      </div>
    </div>
  );
}
