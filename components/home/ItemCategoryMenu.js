"use client";

import { ImageContainer } from "@/components/ui/image/ImageContainer";
import { AppImage } from "@/components/ui/image/AppImage";
import Button from "@/components/ui/buttons/Button";
import {useModal} from "@/store/Modal.store";

export default function ItemCategoryMenu({image, isRounded = true, alt, text, key, name,}) {
    const openModal = useModal(s=>s.openModal)
    const setPayload = useModal(s=>s.setPayload)
    return (
        <div key={key} className="md:w-82 xl:w-full w-38 relative flex flex-col justify-end items-center gap-2 mx-auto" >
            <ImageContainer className={`mx-auto relative ${isRounded? "w-30 h-30 md:w-60 md:h-60  rounded-full overflow-hidden" : "w-18 h-36 md:w-35 md:h-72 "}`}>
                <AppImage alt={alt} className={`select-none ${isRounded? "object-cover rounded-[50%]": "object-contain absolute -top-5! md:-top-10!"}`} publicId={image}  />
            </ImageContainer>
            <Button
                className={`shadow-gray-4 font-estedad-regular shadow-cards-2 bg-white md:h-12 h-8 text-xs md:text-xl w-24 md:w-39`}
                style="textBTN"
                onClick={() => {
                    setPayload([{href: `/menu?category=${name}`, default :"/menu?category=main-food"}])
                    openModal("selectBranch")
                }} >
                {text}
            </Button>
            <div className="absolute bottom-6 left-1 w-36 h-20 md:w-full md:h-40 bg-primary rounded-lg -z-10 shadow-gray-4 shadow-cards-2"/>
        </div>
    );
}
