"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const about = "about";
    const text = `[끊임없이 탐구하는 능동적인 개발자]\nReact, Next.js, Node.js(Express), TypeScript 및 JavaScript 기반으로 신입 프론트엔드 개발자 정다니엘 입니다.\nUI 중심의 작업부터 최신 기술 스택을 확장하며 다양한 문제를 다양한 외주 및 개인 프로젝트로 직접 해결해왔습니다.\n단순한 기능 구현을 넘어서, "접근성과 사용성, 반응형 디자인, 성능 개선 및 최적화"까지 끊임없이 탐구하며 ‘왜 필요한가’, ‘사용자에게 어떤 영향을 줄 수 있는가’, ‘더 나아질 수는 없는가’를 능동적으로 생각하는 "UX 중심의 개발자"로 성장하고자 합니다.`;

    const skills = [
        "Front-End (JavaScript, TypeScript, React, Next.js)",
        "Back-End (Nextjs, Node.js(Express), MongoDB, MySQL)",
        "etc (Git, GitHub, Vecel, AWS)",
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
                <div className="w-full max-w-xl flex flex-col gap-16">
                    {skills.map((a) => (
                        <div
                            key={a}
                            className="font-bold text-base sm:text-lg md:text-xl"
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
                                            a.startsWith("Front-End")
                                                ? "75%"
                                                : a.startsWith("Back-End")
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
