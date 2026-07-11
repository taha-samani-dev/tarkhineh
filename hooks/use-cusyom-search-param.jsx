'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";

export function useCustomSearchParams(){
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const updateParams = useCallback((updates) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            if (value === null || value === ''|| typeof value !== 'string') {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        router.push(`${pathname}?${params.toString()}`);
    }, [searchParams, pathname, router]);

    return {updateParams};
}