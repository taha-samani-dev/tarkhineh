"use client";

import BtnClose from "../../ui/icons/btn-close";
import ArrowLeft from "../../ui/icons/arrow-left";
import { useSearchParams } from "next/navigation";
import { useAddressForm } from "@/hooks/useAddressForm";
import AddressMapStep from "./AddressMapStep";
import AddressFormStep from "./AddressFormStep";

export default function AddAddress({
  target = null,
  openSate,
  setUserAddress,
  userAddress,
}) {
  const [isOpen, setOpen] = openSate;
  const searchParams = useSearchParams();

  const { step, setStep, isEdit,setIsEdit, address, handleChange, buildFinalAddress } =
    useAddressForm({
      target,
      userAddress,
      userName: "tss",
    });

  if (!address) return null;
  console.log(address.lat);
  const getLocation = (key) => {
    if (isEdit) {
      if (step === 1) {
        return Number(searchParams.get(key));
      } else {
        return address[key];
      }
    } else {
      return Number(searchParams.get(key));
    }
  };
  console.log(getLocation("lng"));
  console.log(address);
  const lat = getLocation("lat");
  const lng = getLocation("lng");

  const handleSubmit = () => {
    const finalAddress = buildFinalAddress({ lat, lng });

    setUserAddress((prev) =>
      isEdit
        ? prev.map((i) => (i.id === finalAddress.id ? finalAddress : i))
        : [...prev, finalAddress]
    );
    setStep(1);
    setOpen(false);
  };
  if (!address) return null;
  return (
    <div
      className={` w-dvw h-dvh right-0 translate-y-0 fixed min-h-dvh rounded-none duration-1000 items-center transition-transform ease-in-out top-16 sm:top-0 inset-0 bg-[#000000]/60 z-70 flex justify-center targets-center  sm:backdrop-blur-[3px] ${
        isOpen ? " " : "-translate-x-full rounded-full"
      }`}
    >
      <div
        className={` bg-white sm:rounded-lg overflow-x-hidden duration-1000 transition-all inset-0 translate-0 ease-in-out fixed w-full right-0   sm:inset-auto sm:w-150 z-70 overflow-y-auto `}
      >
        <div className="flex justify-between bg-gray-3 p-6 w-full h-18 sm:h-21 targets-center">
          <div className="flex justify-center w-7 sm:w-10 h-7 sm:h-10 targets-center">
            <div
              className="w-full sm:w-0 h-full cursor-pointer"
              onClick={() => {
                setStep(1);
                setOpen(false);
              }}
            >
              <ArrowLeft className="fill-gray-8 w-6 sm:w-0! rotate-180" />
            </div>
          </div>
          <p className="font-estedad-semi-bold text-text-color-modal text-lg sm:text-xl text-center">
            {step === 1 ? "افزودن آدرس" : "ثبت آدرس"}
          </p>
          <div
            className="flex justify-center w-7 sm:w-10 h-7 sm:h-10 cursor-pointer targets-center"
            onClick={() => {
              setOpen(false);
              setIsEdit(false);
            }}
          >
            <BtnClose className="w-0! sm:w-0.5! md:w-1!" />
          </div>
        </div>

        <div className={`w-full sm:h-auto h-full`}>
          {step === 1 && (
            <AddressMapStep
              target={target}
              setStep={setStep}
              handleChange={handleChange}
            />
          )}
          {step === 2 && (
            <AddressFormStep
              address={address}
              lat={lat}
              lng={lng}
              handleChange={handleChange}
              setStep={setStep}
              onSubmit={handleSubmit}
              onCancel={() => {
                setStep(1);
                setOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
