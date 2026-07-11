"use client";
import Button from "@/components/ui/buttons/Button";
import BtnClose from "../../ui/icons/btn-close";
import {useModal} from "@/store/Modal.store";

export default function Confirm({
  title = "حذف محصول",
  children = "همه محصولات سبد خرید شما حذف شود؟",
  action = () => {},
  actionText = "حذف",
  typeAction = "fill",
  colorAction = "error",
  back = () => {},
  backText = "بازگشت",
  typeBack = "fill",
  colorBack = "primary",
}) {
  const open = useModal((s)=>s.open)
  const closeModal = useModal((s)=>s.closeModal)
  return (
    <div
      className={`flex duration-600 transition-all ease-in-out w-dvw h-dvh min-h-dvh inset-0 bg-[#000000]/60 z-70 justify-center items-center fixed backdrop-blur-[3px] ${
        open==="confirm" ? "" : "absolute -translate-x-full"
      }`}
    >
      <div className="z-70 fixed sm:inset-auto bg-white rounded-lg w-74 sm:w-98 overflow-x-hidden overflow-y-auto">
        <div className="flex justify-between items-center bg-gray-3 p-2 sm:p-3 w-full h-14 sm:h-16">
          <div className="p-0.5 sm:p-0 w-8 sm:w-10 h-8 sm:h-10"></div>
          <div className="font-estedad-semi-bold text-sm sm:text-xl">
            {title}
          </div>
          <div className="p-0.5 sm:p-0 w-8 sm:w-10 h-8 sm:h-10">
            <div
              className="flex justify-center items-center w-7 sm:w-10 h-7 sm:h-10 cursor-pointer"
              onClick={closeModal}
            >
              <BtnClose className="w-0.5! h-5!" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-2 md:py-4 w-full">
          <p className="my-3 md:my-4 font-estedad-regular text-gray-8 text-sm sm:text-base">
            {children}
          </p>
          <div className="flex gap-4 md:gap-8 my-3 md:my-4 h-10 font-estedad-medium text-base text-center align-middle">

              <Button
                style={typeBack}
                className={`sm:w-29 font-estedad-regular w-32 h-full`}
                color={colorBack}
                onClick={() => {
                  back();
                  closeModal()
                }}
              >
                {backText}
              </Button>


              <Button
              className={`sm:w-29 w-32 h-full font-estedad-regular`}
              onClick={() => {
                action();
                closeModal()
              }}
                  color={colorAction} type={typeAction}>
                {actionText}
              </Button>

          </div>
        </div>
      </div>
    </div>
  );
}
