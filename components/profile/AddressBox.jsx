"use client";

import AddAddress from "@/components/layout/modals/AddAddress";
import Confirm from "@/components/layout/modals/Confirm";
import { formatPhone } from "@/components/layout/modals/login/helper";
import Button from "@/components/ui/buttons/Button";
import Edit2 from "@/components/ui/icons/edit-2";
import { Trash } from "@/components/ui/icons/trash";
import { formatToPersian } from "@/lib/utils/NumberNormalize";
import { useState } from "react";
import {useModal} from "@/store/Modal.store";
import AddressCard from "@/components/ui/AddressCard";
const addresses = [
    {id:1,textAddress:"تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",label:"محل کار",userName:"سردار وظیفه",phone:"09123456789",selfDelivery: true,lat: 36.726811911742125,lng: 53.80843877792359,},
    {id:2,textAddress:"تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",label:"محل کار",userName:"سردار وظیفه",phone:"09123456789",selfDelivery: true,lat: 36.726811911742125,lng: 53.80843877792359,},
]
export default function AddressBox() {
    const uAddress = [
        {
            id: 0,
            lat: 36.726811911742125,
            lng: 53.80843877792359,
            title: "محل کار",
            selfDelivery: true,
            phone: "09123456789",
            fullName: "سردار وظیفه",
            exactAddress: "تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
        },
        {
            id: 1,
            lat: 36.726811911742125,
            lng: 53.80843877792359,
            title: "محل کار",
            selfDelivery: true,
            phone: "09922506099",
            fullName: "سردار وظیفه",
            exactAddress: "تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
        },
    ];

    const openModal = useModal((s)=>s.openModal)
    const [userAddress, setUserAddress] = useState(addresses);
    const [target, setTarget] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const onDelete = (item) => {
        setTarget(item)
        openModal("confirm")
    }
    const onEdite = (item) => {
        setTarget(item);
        setOpen(true);
    }
    return (
        <>
            {addresses.map((item, index) => {
                return (
                    <AddressCard
                        onDelete={()=> {
                            onDelete(item)
                        }}
                        address={item}
                        onEdite={()=> {
                            onEdite(item)
                        }}
                        key={index} />
                )})}

                <Button
                className="lg:hidden font-estedad-regular col-span-2 mx-auto mt-2 w-38"
                onClick={() => {
                    setTarget(null);
                    setOpen(true);
                }}
                    style="stroke">افزودن آدرس جدید</Button>

            <Confirm
                title="حذف آدرس"
                typeBack="stroke"
                action={() => {
                    const c = userAddress.filter((i) => i.id !== target.id);
                    setUserAddress(c);
                }}
            >
                آیا از حدف آدرس مطمئن هستید؟
            </Confirm>

            <AddAddress
                target={target}
                userAddress={userAddress}
                setUserAddress={setUserAddress}
                openSate={[isOpen, setOpen]}
            />
        </>
    );
}
