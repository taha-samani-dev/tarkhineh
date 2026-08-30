"use client";

import {useModal} from "@/store/Modal.store";

export default function SidebarIcon() {
  const openModal = useModal(s=>s.openModal)
  return (
    <div className="lg:hidden flex w-17 h-6">
      <div
        className="flex flex-col justify-center items-center gap-[3.5px] px-[2.5px] py-[6.25px] w-6 h-6 cursor-pointer"
        onClick={() => {
          openModal("sidebar");
        }}
      >
        <div className="bg-primary rounded-full w-[19.5px] h-[1.5px]" />
        <div className="bg-primary rounded-full w-[19.5px] h-[1.5px]" />
        <div className="bg-primary rounded-full w-[19.5px] h-[1.5px]" />
      </div>
    </div>
  );
}
