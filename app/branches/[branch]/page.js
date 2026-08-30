import { Note } from "@/components/ui/icons/note";
import InfoBranch from "@/components/branches/InfoBranch";
import Comment from "@/components/branches/Comment";
import Link from "next/link";
import Button from "@/components/ui/buttons/Button";
import { data } from "@/constans/constans";
import {Slider} from "@/components/common/Slider";
import {FoodSliderBox} from "@/components/branches/FoodSliderBox";

export default async function page({params}) {
    const slides = data.slides
    const {branch} = await params;
    const href = `${branch}/menu?category=main-food`
    return (
        <div className="w-full leading-[120%]">
            <Slider className={'w-full h-44 md:h-64 lg:h-84 relative'} data={slides}/>
            <FoodSliderBox title={`پیشنهاد ویژه`} />
            <FoodSliderBox title={`غذا های محبوب`} textColorTitle={`text-white`} bgContainer={`bg-primary`}/>
            <FoodSliderBox title={`غذا های غیر ایرانی`} />
            <Button className={'lg:h-10 h-8 px-2 lg:px-4 mx-auto text-xs md:text-sm lg:text-base font-estedad-regular md:gap-2  rounded-sm mb-4 md:mb-6 lg:mb-8 '} style="stroke" iconRight={<Note className={`md:h-5! md:w-5! h-4! w-4! fill-primary`} />}>
                <Link href={href} >
                    {"مشاهده منوی کامل"}
                </Link>
            </Button>
            <InfoBranch />
            <Comment />
        </div>
    );
}
