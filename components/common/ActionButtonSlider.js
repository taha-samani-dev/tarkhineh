import Button from "@/components/ui/buttons/Button";
import Link from "next/link";

export function ActionButtonSlider({children,href}){
    return (
        <Button className="active:scale-95 absolute inset-x-0 bottom-8 md:bottom-12 lg:bottom-16 mx-auto mt-5 lg:mt-10 rounded-sm lg:rounded-lg w-23 md:w-32 lg:w-46 h-6 md:h-8 lg:h-10 font-estedad-regular md:font-estedad-medium text-[10px] text-white md:text-xs lg:text-base" >
            <Link href={href} >
                {children}
            </Link>
        </Button>
    )
}
