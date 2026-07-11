import CategoryMenu from "@/components/home/CategoryMenu";
import SectionAboutInHome from "@/components/home/SectionAboutInHome";
import AllBranches from "@/components/home/AllBranches";
import SearchInput from "@/components/home/SearchInput";
import {Slider} from "@/components/common/Slider";
import { data } from "@/constans/constans";

export default async function Home() {
    const slides = data.slides
    return (
        <div className="w-full">
            <Slider className={'w-full h-44 md:h-64 lg:h-84 relative'} data={slides}/>
            <SearchInput className={`min-[1140]:hidden my-10 px-2 max-w-70 sm:max-w-100 w-full h-8 md:h-10 mx-auto`} href={`/search`} />
            <CategoryMenu />
            <SectionAboutInHome />
            <AllBranches />
        </div>
    );
}
