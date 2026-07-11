import ItemCategoryMenu from "./ItemCategoryMenu";
import {data} from "@/constans/constans";

export default function CategoryMenu() {
    const category = data.category;
    return (
        <div className="max-w-305.5 mx-auto">

            <h2 className="font-estedad-bold lg:mt-11 my-4 flex justify-center items-center text-lg md:text-xl lg:text-2xl">
                {"منوی رستوران"}
            </h2>

            <div className="w-full xl:h-80 grid mx-auto grid-cols-2 items-end xl:grid-cols-4  md:gap-x-6  md:gap-y-16 gap-y-8">
                {category.map(({name, alt,label,photo}) => (
                    <ItemCategoryMenu key={name} isRounded={name !== "drink"} alt={alt} text={label} name={name} image={photo} />
                ))}
            </div>
        </div>
    );
}
