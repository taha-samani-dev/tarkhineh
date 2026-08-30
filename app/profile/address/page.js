import Button from "@/components/ui/buttons/Button";
import CloseCircle from "@/components/ui/icons/close-circle";
import { EmptyCard } from "@/components/ui/icons/empty-card";
import Link from "next/link";
import AddressBox from "../../../components/profile/AddressBox";
import { Suspense } from "react";

export default function page() {
  // const address = []
  const address = [{}];
  return (
    <div className="lg:h-106 w-full grid lg:grid-cols-2 md:gap-4 py-4 gap-2 lg:gap-6 overflow-y-auto lg:px-6 ">
      {address.length === 0 && (
        <div className="md:h-97.5 sm:h-85 h-60 relative flex items-center justify-center w-full lg:border-none border border-gray-4 rounded-lg">
          <EmptyCard
            className={`absolute -z-10 fill-gray-3 sm:w-81 sm:h-76 w-50 h-48`}
          />
          <div className="sm:space-y-6 space-y-4 md:space-y-8 font-estedad-regular text-center">
            <h1 className="font-estedad-regular align-middle z-10  text-sm sm:text-base md:text-xl text-gray-7">
              شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
            </h1>

            <Link href={"/"}>
              <Button className="flex w-38 md:w-72 mx-auto  text-xs sm:text-sm md:text-base font-estedad-medium" style="stroke">افزودن آدرس</Button>
            </Link>
          </div>
        </div>
      )}

      {address.length !== 0 && (
        <>
          <div className="absolute top-50 gap-1 hidden lg:flex left-14  z-50 font-estedad-regular text-xs">
            <Link
              href={""}
              className="flex gap-1 items-center justify-center hover:text-shade-2 text-primary"
            >
              <CloseCircle className="w-4 h-4 rotate-45 fill-primary hover:fill-shade-2" />
              <p className="">افزودن آدرس جدید</p>
            </Link>
          </div>
          <Suspense>
            <AddressBox />
          </Suspense>
        </>
      )}
    </div>
  );
}
