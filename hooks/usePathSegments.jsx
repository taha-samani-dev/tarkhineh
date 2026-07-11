"use client";

import { data } from "@/constans/constans";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function usePathSegments() {
    const pathname = usePathname();
    return useMemo(() => {
        if (!pathname) return [];
        const path = pathname.split("/").filter(Boolean)
        const {branches} = data
        const currentBranch = path[0] === "branches" && branches.find((b) => b.name === path[1]);
        const currentPath = () =>{
            if(path[0]==="branches"){
                if(currentBranch){
                    if(path.length === 2){
                        return {current:"branch"}
                    }
                    if(path.length === 3 && path[2]==="menu"){
                        return {current:"menu"}
                        
                    }
                    if (path.length === 3 && path[2]==="cart"){
                        return {current:"cart"}
                    }
                }
            }else{
                return {current: path[0] || "/"}
            }
            console.log(path[0]==="branches")
        }
        const {current} = currentPath()
        return {path, current,currentBranch};
    }, [pathname]);
}
