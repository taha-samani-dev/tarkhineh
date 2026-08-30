"use client"

import Image from "next/image"
import { useContext, useMemo, useState } from "react"
import { ImageSkeleton } from "./ImageSkeleton"
import {useImage} from "@/components/ui/image/ImageContainer";
import {getImageUrl} from "@/lib/image/getImageUrl";

export function AppImage({ className, publicId, alt, priority,sizes }) {
    const {size} = useImage()
    const [loaded, setLoaded] = useState(false)
    const src = useMemo(() => {
        if (!size?.width || !size.height) return null
        return getImageUrl(publicId, {
            width: size.width,
            height: size.height,
            crop: "fill",
            quality: 80,
        })
    }, [publicId, size])
    const blurDataURL = useMemo(() => {
        if (!size?.width || !size.height) return null

        return getImageUrl(publicId, {
            width: 20,
            quality: 40,
            crop: "fill",
        })
    }, [publicId, size])

    if (!size || size.width === 0 || size.height === 0) {
        return <ImageSkeleton />
    }
    if (!src) return <ImageSkeleton />
    return (
        <>
            {!loaded && <ImageSkeleton />}
            <Image
                src={src}
                alt={alt}
                sizes={sizes}
                fill
                className={`${className} object-cover`}
                priority={priority}
                placeholder="blur"
                blurDataURL={blurDataURL ?? undefined}
                onLoad={() => setLoaded(true)}
            />
        </>
    )
}
