"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const about = "about";
    const text = `[프론트엔드의 매력]\n사용자에게 직접 보이는 프론트엔드에 흥미를 느껴 졸업 후 본격적으로 공부하며 다양한 프로젝트를 진행했습니다.\n[성장하고 배우는 즐거움]\n기술을 단순히 사용하는 것을 넘어, 왜 필요한지 고민하며 배우는 과정에서 큰 즐거움을 느꼈고, 점점 실력을 쌓아갔습니다.\n[파고파고 파파고]]\n혼자서 대부분을 구현한 프로젝트를 통해 문제 해결 능력을 키웠고, 단순 해결을 넘어서 원인까지 파고드는 태도를 갖게 되었습니다.`;

    const skills = [
        "front-end (react, next, typescript, tailwind, bootstrap)",
        "back-end (mongodb, nextjs, nodejs, mysql)",
        "etc (git, github, vecel, aws)",
    ];

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
    };

    const item = {
        hidden: { opacity: 0, scale: 1.2 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 1000,
                damping: 10,
                duration: 0.4,
            },
        },
    };

    const container2 = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.02 } },
    };

    const yOffsets = Array(text.length).fill(-40);

    return (
        <div className="w-screen min-h-screen flex flex-col lg:flex-row">
            {/* 텍스트 영역 */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 pt-20 pb-10 lg:py-10">
                <div className="w-full max-w-xl flex flex-col gap-5">
                    <div className="tag-font">&lt;h2&gt;</div>
                    <div className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase">
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
                                    whileHover={{ scaleY: 1.2 }}
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
                        className="leading-8 sm:leading-10 whitespace-pre-wrap text-sm sm:text-base"
                    >
                        {text.split("\n").map((line, i) => (
                            <div key={i}>
                                {line.split("").map((char, j) => (
                                    <motion.span
                                        key={`${i}-${j}`}
                                        variants={{
                                            hidden: {
                                                y: yOffsets[i + j],
                                                opacity: 0,
                                            },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30,
                                                },
                                            },
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                    <div className="tag-font">&lt;/p&gt;</div>
                </div>
            </div>

            {/* 이미지 및 스킬바 영역 */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-16 px-6 pb-20">
                {/* 아바타 이미지 */}
                <div className="w-40 h-40 sm:w-52 sm:h-52 relative group">
                    <div className="tag-font pb-2">&lt;img&gt;</div>
                    <div className="absolute -top-2 -left-2 w-full h-full border rounded-2xl transition-all duration-200 group-hover:-translate-x-2 group-hover:-translate-y-2 z-10 overflow-hidden bg-[#1E293B]">
                        <Image
                            fill
                            src="/avatar.png"
                            alt="avatar"
                            className="object-cover transition-opacity duration-300"
                        />
                    </div>
                    <div className="absolute top-2 left-2 w-full h-full border rounded-2xl transition-all duration-200 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />
                    <div className="tag-font pt-2">&lt;/img&gt;</div>
                </div>

                {/* 스킬 프로그래스 바 */}
                <div className="w-full max-w-xl flex flex-col gap-6">
                    {skills.map((a) => (
                        <div
                            key={a}
                            className="font-bold text-base sm:text-lg md:text-xl uppercase"
                        >
                            <motion.div
                                variants={container2}
                                initial="hidden"
                                animate="visible"
                                className="mb-1 whitespace-pre-wrap"
                            >
                                {a.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: {
                                                y: yOffsets[index],
                                                opacity: 0,
                                            },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30,
                                                },
                                            },
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <motion.div className="bg-[#FFF1D5] rounded h-4 overflow-hidden">
                                <motion.div
                                    className="bg-[#526d9c] h-full"
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: `${
                                            a.startsWith("front-end")
                                                ? "80%"
                                                : a.startsWith("back-end")
                                                ? "60%"
                                                : a.startsWith("etc")
                                                ? "40%"
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
                    ))}
                </div>
            </div>
        </div>
    );
}
