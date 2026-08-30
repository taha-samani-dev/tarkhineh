"use client"

import {useEffect, useState} from "react";

function useChips(data, swiperRef) {
    const [hash, setHash] = useState("");
    const [pressedTag, setPressedTag] = useState(null)
    const toggle = (tag) =>{
        setPressedTag(tag)
    }

    useEffect(() => {
        const updateActive = () => {
            const lineY = 250;
            let active = null;

            data.forEach(item => {
                const el = document.getElementById(item.tag);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top <= lineY && rect.bottom >= lineY) {
                    active = item;
                }
            });

            if (active) {
                setHash(active.tag);
                const index = data.indexOf(active);
                swiperRef.current?.slideTo(index);
                if (window.location.hash !== `#${active.tag}`) {
                    window.history.replaceState(null, "", `#${active.tag}`);
                }
            }
        };

        window.addEventListener("scroll", () => requestAnimationFrame(updateActive));
        window.addEventListener("resize", () => requestAnimationFrame(updateActive));

        updateActive();

        return () => {
            window.removeEventListener("scroll", () => requestAnimationFrame(updateActive));
            window.removeEventListener("resize", () => requestAnimationFrame(updateActive));
        };
    }, [data])
    const handleCLick = (e) => {
        e.preventDefault();
        const target = e.target.closest("a");
        const tag = target.getAttribute("href").replace("#", "");
        setHash(tag);
        const topFilterBox = 250;
        const el = document.getElementById(tag);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - topFilterBox;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
    return {handleCLick, toggle, hash, pressedTag, setHash,};
}

export default useChips;