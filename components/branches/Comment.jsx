import React from "react";
import CommentSlider from "./CommentSlider";

export default function Comment() {
  return (
    <div className="w-full leading-[120%]">
      <div className="flex justify-center items-center w-full">
        <h3 className="my-4 font-estedad-bold text-gray-8 text-base md:text-xl lg:text-2xl">
          نظرات کاربران
        </h3>
      </div>
      <CommentSlider />
    </div>
  );
}
