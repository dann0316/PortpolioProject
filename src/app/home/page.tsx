"use client";

import { motion, AnimatePresence, scale } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
    const words = [
        "Clean UI",
        "Friendly UX",
        "Growing SKills",
        "Steady Effort",
    ];

    // 처음 인사 string
    const homeIntroduce = "hello, world";

    //
    const become1 = ["creative", "growing", "striving", "diligent"];
    const become2 = ["programmer", "dreamer", "innovator", "builder"];
    const [index, setIndex] = useState(0);

    const text= "안녕하세요. 프론트엔드 개발자 정다니엘입니다. 저의 포트폴리오 홈페이지에 와주셔서 감사합니다.";

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

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

    // container variants
    const container2 = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.02,
            },
        },
    };

    // 각 문자 variants
    const letter = {
        hidden: () => ({
            y: -30 - Math.random() * 50,
            opacity: 0,
        }),
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 30,
            },
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % become1.length);
        }, 2000); // 2초마다 변경

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="w-screen h-screen flex">

            {/* 소개 */}
            <div className="w-1/2 overflow-hidden flex flex-col justify-center items-center">

                <div className="flex flex-col justify-center items-start gap-2">

                    <div className="tag-font">
                        &lt;h2&gt;
                    </div>

                    <div className="block break-words whitespace-pre-wrap uppercase">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap whitespace-pre-wrap"
                        >
                            {homeIntroduce.split("").map((char, j) => (
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
                                    className="inline-block text-7xl font-extrabold"
                                >
                                    {char}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="tag-font">
                        &lt;h2&gt;
                    </div>

                    <br />

                    <div className="tag-font">
                        &lt;p&gt;
                    </div>

                    <div >
                    <motion.div
                            variants={container2}
                            initial="hidden"
                            animate="visible"
                            className="leading-10 whitespace-pre-wrap"
                        >
                            {text.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letter}
                                    className="inline-block"
                                    custom={index}
                                >
                                    {char === "\n" ? <br /> : char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    <div className="tag-font">
                        &lt;/p&gt;
                    </div>

                </div>
            </div>

            {/* 소개2 */}
            <div className="w-1/2 h-full overflow-y-auto flex flex-col justify-center items-center gap-10">
                <div className="font-bold text-3xl uppercase">I'm trying to become a...</div>
                <div className="w-20 h-1 bg-white"></div>
                <div className="w-full flex flex-row gap-5">
                    <div className="w-1/2 flex justify-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    rotateX: -90,
                                }}
                                animate={{ opacity: 1, rotateX: 0 }}
                                exit={{ opacity: 0, rotateX: 90 }}
                                transition={{ duration: 1 }}
                                className="absolute text-3xl font-bold uppercase origin-bottom"
                            >
                                {become1[index]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="w-1/2 flex justify-start">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={become2[index]}
                                initial={{
                                    opacity: 0,
                                    rotateX: -90,
                                }}
                                animate={{ opacity: 1, rotateX: 0 }}
                                exit={{ opacity: 0, rotateX: 90 }}
                                transition={{ duration: 2.3 }}
                                className="absolute text-4xl font-bold uppercase origin-bottom"
                            >
                                {become2[index]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
