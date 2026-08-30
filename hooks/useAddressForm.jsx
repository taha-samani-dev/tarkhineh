"use client";
import { useEffect, useState } from "react";

export function useAddressForm({ target, userAddress, name }) {
  const [step, setStep] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (!target) {
      const nextId =
        userAddress.length === 0
          ? "1"
          : (+userAddress.at(-1).id + 1).toString();

      setAddress({
        id: nextId,
        lng: 0,
        lat: 0,
        label: "",
        selfDelivery: false,
        phone: "",
        userName: "",
        textAddress: "",
      });
      setIsEdit(false);
      setStep(1);
    } else {
      setIsEdit(true);
      setStep(2);
      setAddress(target);
    }
  }, [target, userAddress]);

  const handleChange = (name, value) => {
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const setPosition = (position) => {};

  const buildFinalAddress = ({ lat, lng }) => ({
    ...address,
    lat: Number.isFinite(lat) ? lat : address.lat,
    lng: Number.isFinite(lng) ? lng : address.lng,
    userName: address.selfDelivery ? name : address.userName,
  });

  return {
    step,

    setStep,
    isEdit,
    setIsEdit,
    address,
    handleChange,
    buildFinalAddress,
  };
}
