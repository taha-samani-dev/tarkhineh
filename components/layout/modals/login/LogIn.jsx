"use client";

import PhoneInputForm from "./PhoneInputForm";
import LegendForm from "./LegendForm";
import {useModal} from "@/store/Modal.store";
import {useLogin} from "@/hooks/useLogin";
import {BackButton} from "@/components/layout/modals/login/BackButton";
import BrandIcon from "@/components/ui/icons/brand-icon";
import BrandName from "@/components/ui/icons/brand-name";
import {CloseButton} from "@/components/layout/modals/login/CloseButton";
import {CodeInputForm} from "@/components/layout/modals/login/CodeInputForm";

export default function LogIn() {
    const open = useModal(s=>s.open)
    const {ref,closeModal,phoneEntered, setPhone,phone,code, isValid,handleChange,handlePaste,handleKeyDown, stop,time, checkPhone, enterPhone, resendCode,editPhone,verifyCode} = useLogin()
    console.log("1")
    return (
        <div
            className={`duration-600 transition-all ease-in-out w-dvw h-dvh min-h-dvh inset-0 bg-[#000000]/60 z-70 flex justify-center items-center fixed backdrop-blur-[3px] ${
                open === "login"
                    ? ""
                    : "absolute scale-0 -top-full! -left-full! rounded-[100%]"
            }`}
        >
            <div className="z-70 fixed inset-x-auto sm:inset-auto bg-white rounded-lg w-80 sm:w-98 h-70 sm:h-75.5 overflow-x-hidden overflow-y-hidden">
                <div className="flex justify-between sm:p-6 px-4 py-3 w-full h-17 sm:h-20">
                    <BackButton onClick={editPhone} isEnable={phoneEntered} />
                    <div className="flex self-end gap-1 sm:mb-0 w-10 sm:w-25.5 h-10 sm:h-8">
                        <BrandIcon className="fill-primary" />
                        <BrandName className="hidden sm:flex fill-primary" />
                    </div>
                    <CloseButton onClick={closeModal} />
                </div>
                <LegendForm phone={phone} phoneEntered={phoneEntered} />
                <PhoneInputForm phoneEntered={phoneEntered} setPhone={setPhone} phone={phone} checkPhone={checkPhone} enterPhone={enterPhone} />
                <CodeInputForm ref={ref} code={code} phoneEntered={phoneEntered} stop={stop} handleChange={handleChange} handlePaste={handlePaste} handleKeyDown={handleKeyDown} time={time} resendCode={resendCode} editPhone={editPhone} isValid={isValid} verifyCode={verifyCode} />
            </div>
        </div>
    );
}
