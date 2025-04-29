'use client'

import { useState } from "react";

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <div>
        <header className="fixed top-0 w-full h-auto flex justify-between items-center p-4 bg-transparent z-50">

            {/* 로고 */}
            <div className="text-2xl font-bold">Logo</div>

            {/* 메뉴 아이콘 */}
            <div className="flex flex-col gap-1 cursor-pointer" onClick={() => {
                setOpen(!open)
            }}>
                <div className="header-menu"></div>
                <div className="header-menu"></div>
                <div className="header-menu"></div>
            </div>

            {/* 메뉴 펼칠 때 */}
            {/* {
                open && (
                    <Menu/>
                )
            } */}

        </header>
        </div>
    );
}
