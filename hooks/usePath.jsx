"use client"

import {usePathSegments} from "@/hooks/usePathSegments";
import {data} from "@/constans/constans";

const menuItems = [
    { label: "غذای اصلی", name: "main-food" },
    { label: "پیش غذا", name: "pre-food" },
    { label: "دسر", name: "desert" },
    { label: "نوشیدنی", name: "drink" },
]
export function usePath() {
    const {path} = usePathSegments()
    const {branches} = data
    const currentBranch = path[0] === "branches" && branches.find((b) => b.name === path[1]);
    const createCategory = () => (
        menuItems.map(({name,label}) => ({label, href: `/branches/${currentBranch.name}/menu?category=${name}`,})))

    const MenuLinks =  currentBranch ? createCategory() : []
    return {MenuLinks, currentBranch }
}
