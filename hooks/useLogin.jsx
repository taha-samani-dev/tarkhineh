"use client"

import {useRef, useState} from "react";
import {useTimer} from "@/hooks/useTimer";
import {useAuth} from "@/store/Auth.store";
import {useModal} from "@/store/Modal.store";

export function useLogin(codeLength=5) {
    const authentication = useAuth(s=>s.authentication);
    const [phoneEntered, setPhoneEntered] = useState(false);
    const [phone , setPhone] = useState("");
    const ref = useRef({});
    const [code, setCode] = useState("")
    const [isValid, setValid] = useState(true);
    const {time,stop, setStop,restart} = useTimer()
    const closeModal = useModal(s=>s.closeModal)

    const updateCode = () => {
        const codeValue = Object.values(ref?.current).map((ref) => ref?.value || "").join("");
        setCode(codeValue);
    };
    const handleChange = (e, index) => {
        const value = e.target.value;
        setValid(true);
        if (!/^\d$/.test(value)) {
            e.target.value = "";
            return null;
        }
        if(index<4) ref.current[index + 1].focus();
        updateCode();
    };
    const handlePaste = (e) => {
        const paste = e.clipboardData.getData("text").replace(/\D/g, "");
        paste.split("").forEach((char, num) => {
            if (ref.current[num]) {
                ref.current[num].value = char;
            }
        });
        ref.current[Math.min(paste.length - 1, 4)].focus();
        updateCode();
    };
    const handleKeyDown = async (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            ref.current[index - 1].focus();
            setValid(true);
        }
        updateCode();
        if (e.key==="Enter" && e.target.value && index===codeLength - 1 ) {
            await verifyCode()
        }
    };

    // ----------------------------------------------------------------------------------------------
    const checkPhone = (phone) => (/^09\d{9}$/.test(phone.trim()))

    const sendCode = async (phone) => {
        // send phone to api
        return true
    }

    const resetOtp = async () => {
    //     post phone to api for del otp
        return true
    }

    const enterPhone = async () => {
        if (!checkPhone(phone)) return false
        const success = await sendCode(phone)
        if(!success) return false
        setPhoneEntered(true)
        setStop(false)
        return true
    }

    const resendCode = async () => {
        if (!stop || !phone) return false
        const success = await sendCode(phone)
        if (!success) return false
        setStop(false)
        restart()
        return true

    }

    const editPhone =async () => {
        if (phoneEntered) {
            await resetOtp()
        }
        setPhoneEntered(false)
        setCode('')
        setStop(true)
        restart()
    }

    const verifyCode = async () => {
        // send to api
        if (code!=="00000") {
            setValid(false)
            return false
        }
        setStop(true)
        setPhone("")
        setPhoneEntered(false)
        setCode("")
        setValid(true)
        authentication({name:"طاها سرپرست سامانی", phone:phoneEntered}) //example data
        closeModal()
        return true
    }

    return {ref,closeModal,phoneEntered,phone, setPhone,code, isValid,handleChange,handlePaste,handleKeyDown, stop,time, checkPhone, enterPhone, resendCode,editPhone,verifyCode}
}

