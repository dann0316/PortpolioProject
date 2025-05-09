"use client";

import { motion, AnimatePresence, scale } from "framer-motion";

export default function About() {
    const about = "about";

    const text = `[프론트엔드의 매력]\n
    사용자에게 직접 보이는 프론트엔드에 흥미를 느껴 졸업 후 본격적으로 공부하며 다양한 프로젝트를 진행했습니다.
    [성장하고 배우는 즐거움]
    기술을 단순히 사용하는 것을 넘어, 왜 필요한지 고민하며 배우는 과정에서 큰 즐거움을 느꼈고, 점점 실력을 쌓아갔습니다.
    [파고파고 파파고]
    혼자서 대부분을 구현한 프로젝트를 통해 문제 해결 능력을 키웠고, 단순 해결을 넘어서 원인까지 파고드는 태도를 갖게 되었습니다.`;

    const skills = ["front-end", "back-end", "reactjs", "nextjs"];

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

    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/2 overflow-hidden flex flex-col justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-1/2 flex flex-col justify-center items-start gap-5">
                        <div className="tag-font">&lt;h2&gt;</div>
                        <div className="text-7xl font-extrabold uppercase">
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                className="inline-flex whitespace-nowrap"
                            >
                                {about.split("").map((char, j) => (
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
                                ))}
                            </motion.div>
                        </div>
                        <div className="tag-font">&lt;/h2&gt;</div>

                        <div className="tag-font">&lt;p&gt;</div>

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

                        <div className="tag-font">&lt;/p&gt;</div>
                    </div>
                </div>
            </div>

            <div className="w-1/2 h-auto overflow-y-auto flex flex-col justify-center items-center gap-30">
                {/* 사진 container */}
                <div className="w-1/4 h-1/4">
                    <div className="tag-font pb-3">&lt;img&gt;</div>
                    <div className="w-full h-full flex flex-col relative group ">
                        <div className="absolute -top-2 -left-2 w-full h-full border  rounded-2xl transition-all duration-200 group-hover:-translate-x-2 group-hover:-translate-y-2 hover:-translate-x-2 hover:-translate-y-2 z-10 overflow-hidden bg-[#1E293B]">
                            <img
                                src="/avatar.png"
                                alt="avatar"
                                className="w-full h-full object-cover transition-opacity duration-300 flex justify-center items-center"
                            />
                        </div>
                        <div className="absolute top-2 left-2 w-full border h-full rounded-2xl transition-all duration-200 group-hover:translate-x-2 group-hover:translate-y-2 hover:translate-x-2 hover:translate-y-2 z-9 "></div>
                    </div>
                    <div className="tag-font pt-3">&lt;img&gt;</div>
                </div>

                {/* Progress bar container */}
                <div className="w-1/2 flex flex-col gap-5">
                    {skills.map((a, i) => {
                        return (
                            <div
                                key={a}
                                className="font-bold text-xl uppercase"
                            >
                                <div>
                                    <motion.div
                                        variants={container2}
                                        initial="hidden"
                                        animate="visible"
                                        className="leading-10 whitespace-pre-wrap"
                                    >
                                        {a.split("").map((char, index) => (
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
                                <motion.div className=" bg-[#FFF1D5] rounded h-4 overflow-hidden">
                                    <motion.div
                                        className="bg-[#526d9c] h-full"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${
                                                a === "front-end"
                                                    ? "80%"
                                                    : a === "back-end"
                                                    ? "30%"
                                                    : a === "reactjs"
                                                    ? "70%"
                                                    : a === "nextjs"
                                                    ? "60%"
                                                    : "0%"
                                            }`,
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeOut",
                                        }}
                                    />
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
