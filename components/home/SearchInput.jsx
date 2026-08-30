"use client";

import { useRouter } from "next/navigation";
import SearchNormal from "../ui/icons/search-normal";
import { useState } from "react";
import {useModal} from "@/store/Modal.store";

export default function SearchInput({ query = "",href="",className="" }) {
    const closeModal = useModal(s=>s.closeModal);
    const [querySearch, setQuery] = useState(query);
    const router = useRouter();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!querySearch.trim()) return;
                closeModal()
                router.push(`${href}?search=${querySearch.trim()}`);
            }}
            className={`flex justify-between items-center px-3 border border-gray-4 rounded-lg ${className}`}
        >
            <input
                type="text"
                value={querySearch ?? ""}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                placeholder="جستجو"
                className="  bg-transparent py-2 outline-none w-full h-auto font-estedad-regular text-gray-8 placeholder:text-gray-8 text-xs"
            />
            <div className="flex justify-center items-center">
                <SearchNormal className="fill-black w-4 md:w-6 h-4 md:h-6" />
            </div>
        </form>
    );
}
