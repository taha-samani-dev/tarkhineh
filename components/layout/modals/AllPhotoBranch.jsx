"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import BtnClose from "../../ui/icons/btn-close";
import { Gallery } from "@/components/ui/sliders/gallery";
import {useModal} from "@/store/Modal.store";
import {useTimer} from "@/hooks/useTimer";

export default function AllPhotoBranch() {
  const open = useModal(s=>s.open);
  const closeModal = useModal(s=>s.closeModal)
  const payload = useModal(s=>s.payload);
  if (!payload[0]?.photo) return;

  return (
    <div
      className={`duration-600 transition-all ease-in-out w-dvw h-dvh min-h-dvh inset-0 bg-[#000000]/60 z-70 flex justify-center items-center fixed backdrop-blur-[3px] ${
        open === "allPhotoBranch"
          ? ""
          : "absolute scale-0 -top-full! -left-full! rounded-[100%]"
      }`}
    >
      <div className="z-50 fixed inset-x-auto rounded-lg w-76 sm:w-150 md:w-186 lg:w-202 h-auto min-h-75 max-h-202 overflow-x-hidden">
        <div className="top-2 left-2 z-50 absolute w-7 sm:w-10 h-7 sm:h-10">
          <button type="text" className="flex justify-center items-center bg-white hover:bg-error-extralight ml-1 p-1 rounded-lg w-6 sm:w-10 h-6 sm:h-10 active:scale-90 cursor-pointer" onClick={closeModal}>
            <BtnClose className="bg-gray-8" />
          </button>
        </div>

        <div
          className={`w-full h-88 md:h-99 lg:h-110 overflow-hidden relative`}
        >
          <Gallery allPhoto={payload}/>
        </div>
      </div>
    </div>
  );
}
