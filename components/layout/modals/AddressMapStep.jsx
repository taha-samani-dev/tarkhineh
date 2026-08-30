"use client";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../../maps/LeafletMap"), { ssr: false });

export default function AddressMapStep({ target, setStep, handleChange }) {
  return (
    <LeafletMap
      position={[target?.lat ?? 32.4279, target?.lng ?? 53.688]}
      setStep={setStep}
      handleChange={handleChange}
    />
  );
}
