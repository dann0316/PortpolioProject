"use client";

import { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    // 메뉴 펼치는 state
    const [open, setOpen] = useState(false);

    // // 메뉴 열릴 때 스크롤 막기
    // const toggleMenu = () => {
    //     if (!open) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }
    //     setOpen((prev) => {
    //         const next = !prev;
    //         document.body.style.overflow = next ? "hidden" : "auto";
    //         return next;
    //     });
    // };

    return (
        <header className="fixed w-full h-[1px] flex justify-between items-center  z-50 bg-transparent">
            {/* 로고 */}
            <Link href="/home" className="absolute left-[47.5%] top-3 hover:animate-spin transition-transform duration-5000 w-[2rem] h-[2rem]">
                <Image src="/home.png" fill alt="home" className="w-full h-full object-cover object-center block"/>
            </Link>

            {/* 메뉴 아이콘 */}
            <div
                className="absolute top-4 right-3 flex flex-col gap-1 cursor-pointer"
                onClick={() => {
                    // toggleMenu();
                    setOpen(true);
                }}
            >
                <div className="header-menu"></div>
                <div className="header-menu"></div>
                <div className="header-menu"></div>
            </div>

            {/* 메뉴 펼칠 때 */}
            <Menu open={open} setOpen={setOpen} />
        </header>
    );
}
