"use client";

import Confirm from "@/components/layout/modals/Confirm";
import { useRouter} from "next/navigation";
import {useEffect } from "react";
import {useModal} from "@/store/Modal.store";
import {useAuth} from "@/store/Auth.store";

export default function LogoutPage() {
    const openModal = useModal((s)=>s.openModal)
    const logout = useAuth(s=>s.logout)
    const router = useRouter()
    useEffect(()=>{
        openModal("confirm")
    },[])
    return (
        <Confirm
            actionText="خروج"
            title="خروج"
            action={() => {
                router.push("/")
                logout()
            }}
            back={()=>{
                router.back()
            }}
        >
            آیا مایل به خروج از حساب کاربری خود هستید؟
        </Confirm>
    );
}
