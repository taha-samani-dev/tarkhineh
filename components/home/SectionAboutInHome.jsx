import Features from "./Features";
import Link from "next/link";
import ArrowLeft from "../ui/icons/arrow-left";
import Button from "../ui/buttons/Button";
import { ImageContainer } from "../ui/image/ImageContainer";
import { AppImage } from "../ui/image/AppImage";
import {data} from "@/constans/constans";
import {BackFilterContainer} from "@/components/common/BackFilterContainer";

export default function SectionAboutInHome() {
    const {photo,title,text,label,href }= data.sectionAbout;
    return (
        <ImageContainer className={`relative select-none flex flex-wrap justify-evenly mt-18 w-full h-120 lg:h-98 text-white`}>
            <BackFilterContainer />
            <AppImage publicId={photo} alt={"bg about in home"} className="-z-12 absolute inset-0 w-full h-full object-cover" />
            <div className="mx-auto my-auto px-10 md:px-10 py-4 w-full lg:w-140 md:min-w-96 ">
                <h2 className="font-estedad-regular md:font-estedad-bold text-base md:text-lg lg:text-2xl">
                    {title}
                </h2>
                <p className="mt-2 md:mt-4 lg:mt-6 font-estedad-regular text-[10px] md:text-base lg:text-xl text-justify">
                    {text}
                </p>
                <Button className={`mt-2 lg:mt-4 w-28 md:w-38 lg:w-46 h-8 justify-self-end lg:h-10 font-estedad-regular text-[10px] md:text-base lg:text-lg hover:[&_svg]:fill-primary`} iconLeft={<ArrowLeft className="fill-white w-4 lg:w-6 h-4 lg:h-6"/>} style="stroke" color="white">
                    <Link href={href}>
                        {label}
                    </Link>
                </Button>
            </div>
            <Features />
        </ImageContainer>
    );
}
