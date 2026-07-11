"use client";
import Image from "next/image";
import BtnClose from "../../ui/icons/btn-close";
import { useRouter } from "next/navigation";
import {useModal} from "@/store/Modal.store";
import {data} from "@/constans/constans";

export default function SelectBranch() {
  const router = useRouter();
  const branches = data.branches;
  const open = useModal(s=>s.open)
  const closeModal = useModal(s=>s.closeModal)
  const payload = useModal(s=>s.payload)
  const payloadHref = !payload[0] ?"": payload[0].href ? payload[0].href :payload[0].default;
  return (
      <div
          className={` w-dvw h-dvh min-h-dvh rounded-none duration-1000 transition-all ease-in-out inset-0 bg-[#000000]/60 z-70 flex justify-center items-center fixed backdrop-blur-[3px] ${
              open === "selectBranch" ? "" : "absolute scale-0 -top-full! rounded-[100%]"
          }`}
      >
        <div
            className={`duration-1000 transition-all ease-in-out fixed md:w-186 sm:w-150 lg:w-202 w-76 inset-x-auto sm:h-auto h-full max-h-120  sm:inset-auto lg:inset-x-[calc(50%-24rem)] z-60 rounded-lg bg-white pb-3 overflow-y-auto `}
        >
          <div className="flex justify-between items-center p-2 md:p-3 w-full h-12 md:h-16">
            <div className="flex justify-center items-center w-7 sm:w-10 h-7 sm:h-10"></div>
            <p className="font-estedad-semi-bold text-text-color-modal text-lg sm:text-xl text-center">
              {"انتخاب شعبه"}
            </p>
            <button
                type="text"
                className="flex justify-center items-center bg-white hover:bg-error-extralight ml-1 p-1 rounded-lg w-6 sm:w-10 h-6 sm:h-10 active:scale-90 cursor-pointer"
                onClick={closeModal}
            >
              <BtnClose className="bg-gray-8" />
            </button>
          </div>
          <div className="flex justify-center pt-1 lg:pt-16">
            <p className="font-estedad-regular text-text-color-modal text-sm lg:text-base text-center">
              {"برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:"}
            </p>
          </div>
          <div className="gap-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-1 py-2 sm:pt-3 w-full">
            {branches.map(({label,href,mainPhoto,addressBranch}, index) => (
                <div
                    className="lg:block relative flex hover:shadow-cards-3 hover:shadow-gray-4 mx-auto border border-gray-4 rounded-lg w-[calc(100%-20px)] lg:w-46 h-20 lg:h-65 overflow-hidden transition-all duration-300 cursor-pointer ease"
                    key={index}
                    onClick={() => {
                      router.push(`${href}${payloadHref}`);
                      closeModal()
                    }}
                >
                  <div className="relative w-full h-full lg:h-45 transition-all duration-300 branch-img ease">
                    <Image
                        src={mainPhoto}
                        className="z-0 absolute inset-0 rounded-t-none lg:rounded-t-lg rounded-r-lg lg:rounded-r-none object-cover select-none"
                        fill
                        alt={label}
                    />
                  </div>
                  <div className="flex flex-col justify-evenly items-center px-1 w-full h-full lg:h-20">
                    <div className="w-full">
                      <h6 className="font-estedad-medium text-text-color-modal text-sm lg:text-base text-center select-none">
                        {"شعبه" + " " + label}
                      </h6>
                    </div>
                    <div className="pt-1 w-full font-estedad-regular text-[10px] text-gray-7 lg:text-xs text-center select-none">
                      {addressBranch}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
