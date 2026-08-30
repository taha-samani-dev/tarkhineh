import ItemBranch from "./ItemBranch";
import {data} from "@/constans/constans";

export default function AllBranches() {
    const branches = data.branches
    return (
        <div className="my-10 w-full">
            <h2 className="flex justify-center items-center font-estedad-bold text-2xl">
                {"ترخینه گردی"}
            </h2>
            <div className="gap-y-4 grid md:grid-cols-2 xl:grid-cols-4 mx-auto mt-8 max-w-308">
                {branches.map((branch, index) => (
                    <ItemBranch key={index} branch={branch} />
                ))}
            </div>
        </div>
    );
}
