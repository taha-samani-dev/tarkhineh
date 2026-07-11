"use client";

import BtnClose from "../../ui/icons/btn-close";
import SearchInput from "../../home/SearchInput";
import {useModal} from "@/store/Modal.store";

export default function SearchModal() {
  const open = useModal(s=>s.open)
  const closeModal = useModal(s=>s.closeModal);
  return (
      <div
          className={`lg:flex hidden duration-600 transition-all ease-in-out w-dvw h-dvh min-h-dvh inset-0 bg-[#000000]/60 z-70 justify-center items-center fixed backdrop-blur-[3px] ${
              open === "search"
                  ? ""
                  : "absolute scale-0 -top-full! -left-full! rounded-[100%]"
          }`}
      >
        <div className="z-50 fixed inset-x-auto sm:inset-auto lg:inset-x-[calc(50%-300px)] bg-white rounded-lg w-80 sm:w-150 h-40 sm:h-54 lg:h-63 sm:max-h-63 overflow-x-hidden overflow-y-auto">
          <div className="flex justify-between items-center bg-gray-3 p-2 sm:p-3 md:p-6 w-full h-12 sm:h-16 lg:h-21">
            <div className="p-0.5 sm:p-0 w-8 sm:w-10 h-8 sm:h-10"></div>
            <div className="font-estedad-semi-bold text-sm sm:text-xl">جستجو</div>
            <div className="p-0.5 sm:p-0 w-8 sm:w-10 h-8 sm:h-10">
              <button
                  type="text"
                  className="flex justify-center items-center hover:bg-white ml-1 p-1 rounded-lg w-6 sm:w-10 h-6 sm:h-10 active:scale-90 cursor-pointer"
                  onClick={closeModal}
              >
                <BtnClose className="bg-gray-8" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 py-5.5 sm:py-9 lg:-py-11 w-full">
            <p className="font-estedad-regular text-gray-8 text-sm sm:text-base">
              لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
            </p>
            <SearchInput className="w-full max-w-102.25 h-10" href={`/search`} />
          </div>
        </div>
      </div>
  );
}
