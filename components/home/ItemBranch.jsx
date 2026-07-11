"use client";

import Link from "next/link";
import AllPicBtn from "../ui/icons/all-picture-btn";
import Expand from "../ui/icons/expand";
import ArrowLeft from "../ui/icons/arrow-left";
import { ImageContainer } from "../ui/image/ImageContainer";
import { AppImage } from "../ui/image/AppImage";
import { data } from "@/constans/constans";
import {useModal} from "@/store/Modal.store";
import Button from "@/components/ui/buttons/Button";

export default function ItemBranch({ branch, key }) {
  const branches = data.branches
  const setPayload = useModal(s=>s.setPayload)
  const openModal = useModal(s=>s.openModal)

  const handleClick = () => {
    const branchCurrent = branches.find(item => item.name === branch.name);
    setPayload(branchCurrent.photos);
    openModal("allPhotoBranch")
  };
  const {addressBranch,href ,mainPhoto, label}= branch

  return (
      <div
          className="lg:block relative flex hover:shadow-cards-3 hover:shadow-gray-4 mx-auto border border-gray-4 hover:border-primary rounded-lg w-[calc(100%-20px)] lg:w-72 lg:h-86 overflow-hidden leading-[120%] transition-all duration-300 ease-in-out lg:hover:[&_.branch-img]:h-45 lg:hover:[&_div_.btn-show-picture]:flex"
          key={key}
      >
        <ImageContainer className={`relative w-full h-full lg:h-57 transition-all duration-300 branch-img ease`}>
          <AppImage publicId={mainPhoto} className={`z-0 absolute inset-0 rounded-t-none lg:rounded-t-lg rounded-r-lg lg:rounded-r-none object-cover select-none`} alt={label}/>
          <div className="lg:hidden right-1.5 bottom-1.5 z-10 absolute stroke-white w-4 h-4">
            <Expand click={handleClick} className="cursor-pointer" />
          </div>
          <div className="hidden absolute inset-0 justify-center items-center bg-black/60 w-full h-full btn-show-picture">
            <AllPicBtn click={handleClick} className="fill-gray-1 cursor-pointer"/>
          </div>
        </ImageContainer>

        <div className="p-2 lg:pt-4 w-full h-full flex flex-col justify-center md: gap-2 lg:h-26 relative ">
          <div className="w-full">
            <h2 className="font-estedad-semi-bold text-sm lg:text-xl text-center select-none">
              {"شعبه" + " " + label}
            </h2>
          </div>
          <p className="w-full font-estedad-medium text-[10px] text-gray-7 lg:text-sm text-center line-clamp-2 select-none">
            {addressBranch}
          </p>
        <Button
            style={"textBTN"}
            className="-bottom-12 lg:absolute text-xs lg:text-sm mx-auto left-0 lg:translate-x-1/2 border font-estedad-regular border-shade-2 rounded-lg w-28 lg:w-34 h-6 lg:h-8 gap-1! flex items-center transition-all duration-600 link-branch ease-in-out"
            iconLeft={<ArrowLeft className="fill-shade-2 w-4 h-full" />}>
          <Link href={href}>
            {"صفحه شعبه"}
          </Link>
        </Button>
        </div>
      </div>
  );
}
