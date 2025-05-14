"use client";

import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";

export default function Menu({open, setOpen}) {

    const menu = ['home', 'projects', 'about'];

    const item = {
        hidden: { opacity: 0, scale: 1.2 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1.0,
            transition: {
                type: "spring",
                stiffness: 1000,
                damping: 10,
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen bg-[#1E293B] transition-opacity duration-300 z-40 ${
                open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="absolute w-full h-[1rem]">

                {/* 메뉴 닫기 버튼 */}
                <div
                    className="absolute right-4 top-3 w-6 h-6  cursor-pointer z-50"
                    onClick={() => {
                        setOpen(false);
                    }}>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform rotate-45"></div>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -rotate-45"></div>
                </div>
            </div>


            {/* 메뉴 상단 배너 / absolute 써야하나? */}
            {/* <div className="w-full h-1/4 flex flex-row text-4xl font-bold justify-center items-center bg-[#151c2a] uppercase whitespace-pre">
                {introduce.split("").map((char, j) => (
                    <motion.div
                        key={j}
                        initial={{ scaleY: 0.5 }}
                        animate={{ scaleY: 1 }}
                        whileHover={{
                            scaleY: 1.5,
                            transition: {
                                type: "spring",
                                stiffness: 1000,
                                damping: 10,
                            },
                        }}
                        style={{ display: "inline-block" }}
                    >
                        {char}
                    </motion.div>
                ))}
            </div> */}

            {/* 메뉴 구성 */}
            <div className="w-full h-screen absolute flex flex-col justify-center items-center leading-27 sm:leading-35 md:leading-50 lg:leading-55 xl:leading-70">
                {
                    menu.map((a) => {
                        return (
                            <Link key={a} className="uppercase transition-all duration-300 hover:text-[#fefeee] font-extrabold text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] xl:text-[17rem] whitespace-nowrap"
                            href={`/${a}`} onClick={() => {
                                setOpen(false)
                                }}>
                                {
                                    a.split("").map((char, j) => (
                                        <motion.div
                                            key={j}
                                            variants={item}
                                            whileHover={{
                                                scaleY: 1.2,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20,
                                                },
                                            }}
                                            className="inline-block"
                                        >
                                            {char}
                                        </motion.div>
                                    ))
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}
